package com.tma.apa.training.device.mgmt.rest.resource.impl;

import com.tma.apa.training.device.mgmt.rest.resource.DeviceRestResource;
import com.tma.apa.training.device.mgmt.rest.util.RestUtil;
import com.tma.apa.training.device.mgmt.service.DeviceService;
import com.tma.apa.training.device.mgmt.vo.DeviceVO;

import javax.ws.rs.core.Response;
import java.util.List;

public class DeviceRestResourceImpl implements DeviceRestResource {

    private DeviceService m_deviceService;

    public DeviceRestResourceImpl(DeviceService deviceService) {
        m_deviceService = deviceService;
    }

    @Override
    public Response getDevices(String name) {
        if (name == null || name.isEmpty()) {
            return Response.status(200).entity(m_deviceService.getAll()).build();
        } else {
            return Response.status(200).entity(m_deviceService.getByName(name)).build();
        }
    }

    @Override
    public Response getDevicesByDeviceHolder(String deviceHolderName) {
        List<DeviceVO> result = m_deviceService.getByDeviceHolder(deviceHolderName);
        return Response.status(200).entity(result).build();
    }

    @Override
    public Response insertDevice(DeviceVO deviceVO) {
        try {
            m_deviceService.add(deviceVO);
            return RestUtil.printPassResponse("Inserted device successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return RestUtil.printFailResponse("Insert device fail ", e);
        }
    }

    @Override
    public Response updateDevice(String name, DeviceVO deviceVO) {
        try {
            m_deviceService.update(name, deviceVO);
            return RestUtil.printPassResponse("Updated device successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return RestUtil.printFailResponse("Update device fail ", e);
        }
    }

    @Override
    public Response deleteDevice(String name) {
        try {
            m_deviceService.delete(name);
            return RestUtil.printPassResponse("Deleted device successfully");
        } catch (Exception e) {
            e.printStackTrace();
            return RestUtil.printFailResponse("Delete device fail", e);
        }
    }

    @Override
    public Response deleteDevices(String deviceHolder) {
        if (deviceHolder == null || deviceHolder.isEmpty()) {
            m_deviceService.deleteAll();
            return RestUtil.printPassResponse("Deleted all device successfully");
        } else {
            try {
                m_deviceService.deleteByDeviceHolder(deviceHolder);
                return RestUtil.printPassResponse("Deleted device by device holder successfully");
            } catch (Exception e) {
                e.printStackTrace();
                return RestUtil.printFailResponse("Delete device by device holder fail ", e);
            }
        }
    }
}
