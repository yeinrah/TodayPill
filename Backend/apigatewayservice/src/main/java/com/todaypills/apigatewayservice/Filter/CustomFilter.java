package com.todaypills.apigatewayservice.Filter;

import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;
import reactor.core.publisher.Mono;

@Slf4j //for print log
@Component
public class CustomFilter extends AbstractGatewayFilterFactory {

    @Override
    public GatewayFilter apply(Object config) {
        //custom prefilter
        return ((exchange, chain) -> {
            ServerHttpRequest request = exchange.getRequest();
            ServerHttpResponse response = exchange.getResponse();

            log.info("custom pre filter: request id -> {}", request.getId());

            //custom postfilter
            return chain.filter(exchange).then(Mono.fromRunnable(() -> { //Mono 객체: 웹플럭스(스프링5)에서 지원하는 기능으로 비동기방식의 서버에서 단일값을 전달할 때 모노타입으로 전달
                log.info("custom post filter: response code -> {}", response.getStatusCode());
            }));

        });
    }

    public static class Config{
        // 여기에 configuration 이 있다면 삽입
    }
}
