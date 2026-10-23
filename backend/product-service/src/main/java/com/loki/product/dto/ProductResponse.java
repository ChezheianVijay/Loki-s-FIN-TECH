package com.loki.product.dto;

import java.math.BigDecimal;

public class ProductResponse {

    private Long id;
    private String name;
    private String type;
    private BigDecimal interestRate;
    private Integer tenureMonths;
    private String status;

    public ProductResponse() {
    }

    public ProductResponse(Long id, String name, String type, BigDecimal interestRate, Integer tenureMonths, String status) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.interestRate = interestRate;
        this.tenureMonths = tenureMonths;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public BigDecimal getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(BigDecimal interestRate) {
        this.interestRate = interestRate;
    }

    public Integer getTenureMonths() {
        return tenureMonths;
    }

    public void setTenureMonths(Integer tenureMonths) {
        this.tenureMonths = tenureMonths;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}