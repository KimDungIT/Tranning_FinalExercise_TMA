package com.tma.apa.training.device.mgmt.dao;

import com.tma.apa.training.device.mgmt.entity.DeviceHolder;

import java.util.List;

public interface DeviceHolderDAO {

    List<DeviceHolder> getAll();

    DeviceHolder getByName(String name);

    void add(DeviceHolder deviceHolder);

    void deleteAll();
}