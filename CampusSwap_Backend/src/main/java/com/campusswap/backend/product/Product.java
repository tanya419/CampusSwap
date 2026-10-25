package com.campusswap.backend.product;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;

@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is required")
    @Column(nullable = false)
    private String title;

    @Column(length = 2000)
    private String description;

    @PositiveOrZero(message = "Price must be zero or greater")
    private double price;

    private String category;

    @NotBlank(message = "Listing type is required (SELL or EXCHANGE)")
    private String listingType;

    @NotBlank(message = "Seller name is required")
    private String sellerName;

    public Product() {
    }

    public Long getId() { return id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public double getPrice() { return price; }
    public void setPrice(double price) { this.price = price; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getListingType() { return listingType; }
    public void setListingType(String listingType) { this.listingType = listingType; }

    public String getSellerName() { return sellerName; }
    public void setSellerName(String sellerName) { this.sellerName = sellerName; }
}
