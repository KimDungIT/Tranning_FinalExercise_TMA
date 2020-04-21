package com.tma.apa.training.device.mgmt.dao;

import com.tma.apa.training.device.mgmt.entity.Device;
import com.tma.apa.training.device.mgmt.entity.DeviceHolder;

import java.util.List;

public interface DeviceDAO {

    List<Device> getAll();

    List<Device> getByDeviceHolder(DeviceHolder deviceHolder);

    Device getByName(String name);

    void add(Device device);

    void update(String name, Device device);

    void delete(String name);

    void deleteByDeviceHolder(DeviceHolder deviceHolder);

    void deleteAll();

}

