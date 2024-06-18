package com.niriic.neticodemobackend.controller;

import com.niriic.neticodemobackend.model.Battery;
import com.niriic.neticodemobackend.repository.BatteryRepository;
import java.util.List;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/battery")
@AllArgsConstructor
public class BatteryController {

    private final BatteryRepository batteryRepository;

    @GetMapping
    public List<Battery> getAllBatteries() {
        return batteryRepository.findAll();
    }
}
