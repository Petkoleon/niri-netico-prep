package com.niriic.neticodemobackend.controller;

import com.niriic.neticodemobackend.model.Battery;
import com.niriic.neticodemobackend.repository.BatteryRepository;
import java.util.List;
import java.util.Optional;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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

    @GetMapping("/{id}")
    public ResponseEntity<Battery> getBatteryById(@PathVariable Long id) {
        Optional<Battery> battery = batteryRepository.findById(id);
        return battery.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Battery> updateBattery(@PathVariable Long id, @RequestBody Battery updatedBattery) {
        return batteryRepository.findById(id)
                .map(battery -> {
                    battery.setVoltage(updatedBattery.getVoltage());
                    battery.setChargingCurrent(updatedBattery.getChargingCurrent());
                    battery.setStateOfCharge(updatedBattery.getStateOfCharge());
                    battery.setTemperature(updatedBattery.getTemperature());
                    battery.setStatus(updatedBattery.getStatus());
                    battery.setCapacity(updatedBattery.getCapacity());
                    Battery savedBattery = batteryRepository.save(battery);
                    return ResponseEntity.ok(savedBattery);
                })
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
