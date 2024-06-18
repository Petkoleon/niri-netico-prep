package com.niriic.neticodemobackend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.sql.Timestamp;
import lombok.Data;

@Data
@Entity
@Table(name = "battery")
public class Battery {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "timestamp", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    private Timestamp timestamp;

    @Column(name = "voltage", precision = 5, scale = 2)
    private BigDecimal voltage;

    @Column(name = "chargingCurrent", precision = 5, scale = 2)
    private BigDecimal chargingCurrent;

    @Column(name = "stateOfCharge", precision = 5, scale = 2)
    private BigDecimal stateOfCharge;

    @Column(name = "temperature", precision = 5, scale = 2)
    private BigDecimal temperature;

    @Column(name = "status", length = 20)
    private String status;

    @Column(name = "capacity", precision = 10, scale = 2)
    private BigDecimal capacity;
}
