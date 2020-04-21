package com.tma.apa.training.device.mgmt.impl.service;

import com.tma.apa.training.device.mgmt.dao.DeviceDAO;
import com.tma.apa.training.device.mgmt.dao.DeviceHolderDAO;
import com.tma.apa.training.device.mgmt.entity.Device;
import com.tma.apa.training.device.mgmt.entity.DeviceHolder;
import com.tma.apa.training.device.mgmt.exception.DeviceException;
import com.tma.apa.training.device.mgmt.exception.DeviceHolderException;
import com.tma.apa.training.device.mgmt.impl.util.ConvertUtils;
import com.tma.apa.training.device.mgmt.service.DeviceService;
import com.tma.apa.training.device.mgmt.vo.DeviceVO;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class DeviceServiceImpl implements DeviceService {

    private DeviceDAO m_deviceDAO;
    private DeviceHolderDAO m_deviceHolderDAO;

    public DeviceServiceImpl(DeviceDAO deviceDAO, DeviceHolderDAO deviceHolderDAO) {
        m_deviceDAO = deviceDAO;
        m_deviceHolderDAO = deviceHolderDAO;
    }
    @Override
    public List<DeviceVO> getAll() {
        List<Device> devices = m_deviceDAO.getAll();
        if(devices == null) {
            return Collections.emptyList();
        }
        List<DeviceVO> deviceVOS = new ArrayList<DeviceVO>();
        for (Device device : devices) {
            deviceVOS.add(ConvertUtils.toDeviceVO(device));
        }
        return deviceVOS;
    }

    @Override
    public List<DeviceVO> getByDeviceHolder(String name) {
        DeviceHolder deviceHolder = m_deviceHolderDAO.getByName(name);
        if(deviceHolder == null) {
            throw new DeviceHolderException("Device holder " + name + " does not exists");
        }
        List<Device> devices = m_deviceDAO.getByDeviceHolder(deviceHolder);
        List<DeviceVO> deviceVOS = new ArrayList<DeviceVO>();
        for (Device device : devices) {
            deviceVOS.add(ConvertUtils.toDeviceVO(device));
        }
        return deviceVOS;
    }

    @Override
    public DeviceVO getByName(String name) {
        Device device = m_deviceDAO.getByName(name);
        return device == null ? null : ConvertUtils.toDeviceVO(device);
    }

    @Override
    public void add(DeviceVO deviceVO) throws DeviceException {
        Device device = m_deviceDAO.getByName(deviceVO.getName());
        DeviceHolder deviceHolder = m_deviceHolderDAO.getByName(deviceVO.getDeviceHolderName());
        if(device != null) {
            throw new DeviceException("Device " + deviceVO.getName() + " already exists");
        }
        if(deviceHolder == null) {
            throw new DeviceHolderException("Device holder " + deviceVO.getDeviceHolderName() + " does not exists");
        }
        if (deviceVO.getHardwareType().isEmpty() || deviceVO.getInterfaceVersion().isEmpty()
                || deviceVO.getConnectionMechanism().isEmpty()) {
            throw new DeviceException("Insert device " + deviceVO.getName() + "fail");
        } else {
            m_deviceDAO.add(ConvertUtils.toDevice(deviceVO, deviceHolder));
        }
    }

    @Override
    public void update(String name, DeviceVO deviceVO) throws DeviceException {
        Device device = m_deviceDAO.getByName(name);
        if(device == null) {
            throw new DeviceException("Device " + name + " doest not exists");
        }
        DeviceHolder deviceHolder = m_deviceHolderDAO.getByName(deviceVO.getDeviceHolderName());
        if(deviceHolder == null) {
            throw new DeviceHolderException("Device holder " + deviceVO.getDeviceHolderName() + " doest not exists");
        }
        if (deviceVO.getHardwareType().isEmpty() || deviceVO.getInterfaceVersion().isEmpty()
                || deviceVO.getConnectionMechanism().isEmpty()) {
            throw new DeviceException("Update device " + name + "fail");
        } else {
            m_deviceDAO.update(name, ConvertUtils.toDevice(deviceVO, deviceHolder));
        }

    }

    @Override
    public void delete(String name) throws DeviceException{
        Device device = m_deviceDAO.getByName(name);
        if(device == null) {
            throw new DeviceException("Device " + name + " does not exists");
        }
        m_deviceDAO.delete(name);

    }

    @Override
    public void deleteByDeviceHolder(String name) throws DeviceException{
        DeviceHolder deviceHolder = m_deviceHolderDAO.getByName(name);
        if(deviceHolder == null) {
            throw new DeviceHolderException("Device holder " + name + " does not exists");
        }
        m_deviceDAO.deleteByDeviceHolder(deviceHolder);
    }

    @Override
    public void deleteAll() {
        m_deviceDAO.deleteAll();
    }

}
