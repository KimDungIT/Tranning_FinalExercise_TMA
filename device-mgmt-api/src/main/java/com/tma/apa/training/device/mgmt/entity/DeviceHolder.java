package com.tma.apa.training.device.mgmt.entity;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "DeviceHolder")
public class DeviceHolder {

    @Id
    @Column(name = "device_holder_name")
    private String deviceHolderName;

    @OneToMany(mappedBy = "deviceHolder", cascade = CascadeType.ALL, orphanRemoval = true)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private List<Device> m_devices = new ArrayList<Device>();

    public DeviceHolder() {
    }

    public DeviceHolder(String deviceHolderName) {
        this.deviceHolderName = deviceHolderName;
    }

    public DeviceHolder(String deviceHolderName, List<Device> devices) {
        this.deviceHolderName = deviceHolderName;
        m_devices = devices;
    }

    public String getDeviceHolderName() {
        return deviceHolderName;
    }

    public void setDeviceHolderName(String deviceHolderName) {
        this.deviceHolderName = deviceHolderName;
    }

    public List<Device> getDevices() {
        return m_devices;
    }

    public void setDevices(List<Device> devices) {
        m_devices = devices;
    }
}