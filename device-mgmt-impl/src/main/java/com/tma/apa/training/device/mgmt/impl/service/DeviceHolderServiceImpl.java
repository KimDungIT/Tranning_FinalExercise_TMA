package com.tma.apa.training.device.mgmt.impl.service;

import com.tma.apa.training.device.mgmt.dao.DeviceDAO;
import com.tma.apa.training.device.mgmt.dao.DeviceHolderDAO;
import com.tma.apa.training.device.mgmt.entity.DeviceHolder;
import com.tma.apa.training.device.mgmt.exception.DeviceHolderException;
import com.tma.apa.training.device.mgmt.impl.util.ConvertUtils;
import com.tma.apa.training.device.mgmt.service.DeviceHolderService;
import com.tma.apa.training.device.mgmt.vo.DeviceHolderVO;

import java.util.ArrayList;
import java.util.List;

public class DeviceHolderServiceImpl implements DeviceHolderService {

    private DeviceHolderDAO m_deviceHolderDAO;

    private DeviceDAO m_deviceDAO;

    public DeviceHolderServiceImpl(DeviceHolderDAO deviceHolderDAO, DeviceDAO deviceDAO) {
        m_deviceHolderDAO = deviceHolderDAO;
        m_deviceDAO = deviceDAO;
    }

    @Override
    public List<DeviceHolderVO> getAll() {
        List<DeviceHolder> deviceHolders = m_deviceHolderDAO.getAll();
        List<DeviceHolderVO> deviceHolderVOS = new ArrayList<DeviceHolderVO>();
        for(DeviceHolder deviceHolder : deviceHolders) {
            deviceHolderVOS.add(ConvertUtils.toDeviceHolderVO(deviceHolder));
        }
        return deviceHolderVOS;
    }

    @Override
    public DeviceHolderVO getByName(String name) {
        DeviceHolder deviceHolder = m_deviceHolderDAO.getByName(name);
        return deviceHolder == null ? null : ConvertUtils.toDeviceHolderVO(deviceHolder);
    }

    @Override
    public void add(DeviceHolderVO deviceHolderVO) throws DeviceHolderException {
        if(deviceHolderVO.getDeviceHolderName().isEmpty()) {
            throw new DeviceHolderException("Device holder can not empty");
        }
        DeviceHolder deviceHolder = m_deviceHolderDAO.getByName(deviceHolderVO.getDeviceHolderName());
        if(deviceHolder != null) {
            throw new DeviceHolderException("Device holder " + deviceHolderVO.getDeviceHolderName()
                    + " already exists");
        }
        m_deviceHolderDAO.add(ConvertUtils.toDeviceHolder(deviceHolderVO));
    }

    @Override
    public void deleteAll() throws DeviceHolderException{
        m_deviceHolderDAO.deleteAll();
    }
}
