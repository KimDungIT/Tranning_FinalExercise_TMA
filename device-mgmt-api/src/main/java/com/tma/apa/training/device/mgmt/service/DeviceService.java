package com.tma.apa.training.device.mgmt.service;

import com.tma.apa.training.device.mgmt.exception.DeviceException;
import com.tma.apa.training.device.mgmt.vo.DeviceVO;

import java.util.List;

public interface DeviceService {

    List<DeviceVO> getAll();

    List<DeviceVO> getByDeviceHolder(String name);

    DeviceVO getByName(String name);

    void add(DeviceVO deviceVO) throws DeviceException;

    void update(String name, DeviceVO deviceVO) throws DeviceException;

    void delete(String name) throws DeviceException;

    void deleteByDeviceHolder(String name) throws DeviceException;

    void deleteAll();

}
