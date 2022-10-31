package com.todaypills.apigatewayservice.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration //yml 파일의 라우팅 정보를 이와 같이 자바 클래스로도 설정할 수도 있음
public class FilterConfig {
    @Bean
    public RouteLocator gatewayRoutes(RouteLocatorBuilder builder){
        return builder.routes() //lamda 함수(익명 클래스) r 이라는 매개변수가 들어왔을 때 -> 헤야할 동작을 정의(정의한 헤더를 붙인 후, 지정 uri로 보낸다)
                .route(r -> r.path("/nutrients/**")
                        .filters(f -> f.addRequestHeader("nutrients-request", "nutrients-request-header-value")
                                        .addResponseHeader("nutrients-response", "nutrients-response-header-value"))
                        .uri("http://localhost:8081"))
                .build();
    }
}
