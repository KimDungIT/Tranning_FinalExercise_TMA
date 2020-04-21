package com.tma.apa.training.device.mgmt.impl.dao;

import com.tma.apa.training.device.mgmt.impl.persistence.PersistenceUtil;
import com.tma.apa.training.device.mgmt.entity.Device;
import com.tma.apa.training.device.mgmt.entity.DeviceHolder;
import com.tma.apa.training.device.mgmt.dao.DeviceDAO;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
public class DeviceDAOImpl implements DeviceDAO {

    private EntityManager m_entityManager;

    public DeviceDAOImpl(PersistenceUtil persistenceUtil) {
        m_entityManager = persistenceUtil.getEntityManager();
    }

    @Override
    @Transactional(Transactional.TxType.SUPPORTS)
    public List<Device> getAll() {
        TypedQuery<Device> query = m_entityManager.createQuery("SELECT d FROM Device d", Device.class);
        return query.getResultList();
    }

    @Override
    @Transactional(Transactional.TxType.SUPPORTS)
    public List<Device> getByDeviceHolder(DeviceHolder deviceHolder) {
        TypedQuery<Device> query = m_entityManager.createQuery("SELECT d FROM Device d WHERE "
                + "d.deviceHolder = :deviceHolder", Device.class);
        query.setParameter("deviceHolder", deviceHolder);
        return query.getResultList();
    }

    @Override
    @Transactional(Transactional.TxType.SUPPORTS)
    public Device getByName(String name) {
        TypedQuery<Device> query = m_entityManager.createQuery("SELECT d FROM Device d WHERE "
                + "d.name = :name", Device.class);
        query.setParameter("name", name);
        return query.getResultList().isEmpty() ? null : query.getSingleResult();
    }

    @Override
    @Transactional(Transactional.TxType.REQUIRES_NEW)
    public void add(Device device) {
        m_entityManager.persist(device);
    }

    @Override
    @Transactional(Transactional.TxType.REQUIRES_NEW)
    public void update(String name, Device device) {
        Device deviceDB = getByName(name);
        deviceDB.setHardwareType(device.getHardwareType());
        deviceDB.setInterfaceVersion(device.getInterfaceVersion());
        deviceDB.setConnectionMechanism(device.getConnectionMechanism());
        deviceDB.setDeviceHolder(device.getDeviceHolder());
        m_entityManager.merge(deviceDB);
    }

    @Override
    @Transactional(Transactional.TxType.REQUIRES_NEW)
    public void delete(String name) {
        Device device = getByName(name);
        m_entityManager.remove(device);
    }

    @Override
    @Transactional(Transactional.TxType.REQUIRES_NEW)
    public void deleteByDeviceHolder(DeviceHolder deviceHolder) {
//        TypedQuery<Device> query = m_entityManager.createQuery("DELETE FROM Device d WHERE d.deviceHolder = :deviceHolder", Device.class);
//        query.setParameter("deviceHolder", deviceHolder).executeUpdate();

        m_entityManager.createQuery("DELETE FROM Device d WHERE d.deviceHolder = :deviceHolder")
                .setParameter("deviceHolder", deviceHolder).executeUpdate();
    }

    @Override
    @Transactional(Transactional.TxType.REQUIRES_NEW)
    public void deleteAll() {
        m_entityManager.createQuery("DELETE FROM Device").executeUpdate();
    }

}