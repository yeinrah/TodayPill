package com.todaypills.apigatewayservice.Filter;

import lombok.Data;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Slf4j //for print log
@Component
public class GlobalFilter extends AbstractGatewayFilterFactory<GlobalFilter.Config> {

    public GlobalFilter() { super(Config.class); }

    @Override
    public GatewayFilter apply(Config config) {
        //custom prefilter
        return ((exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();
            ServerHttpResponse response = exchange.getResponse();

            log.info("global filter: request id -> {}", config.getBaseMessage());

            if(config.isPreLogger()){
                log.info("global filter start: request id -> {}", request.getId());
            }
            //custom postfilter
            return chain.filter(exchange).then(Mono.fromRunnable(() -> { //Mono 객체: 웹플럭스(스프링5)에서 지원하는 기능으로 비동기방식의 서버에서 단일값을 전달할 때 모노타입으로 전달
                log.info("global filter end: response code -> {}", response.getStatusCode());
            }));

        });
    }
    @Data // setter getter 함수 생성 (isPreLogger(), isPostLogger() 등)
    public static class Config{
        // 여기에 configuration 이 있다면 삽입
        private String baseMessage;
        private boolean preLogger;
        private boolean postLogger;
    }
}
