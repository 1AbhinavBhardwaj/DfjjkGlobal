package com.dfjjk.dto;

public class OrderRequest {
    private String courseSku;
    private String paymentMethod;

    public OrderRequest() {}

    public String getCourseSku() { return courseSku; }
    public void setCourseSku(String courseSku) { this.courseSku = courseSku; }

    public String getPaymentMethod() { return paymentMethod; }
    public void setPaymentMethod(String paymentMethod) { this.paymentMethod = paymentMethod; }
}
