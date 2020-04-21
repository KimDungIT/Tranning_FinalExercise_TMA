package com.tma.apa.training.device.mgmt.impl.dao;

import com.tma.apa.training.device.mgmt.impl.persistence.PersistenceUtil;
import com.tma.apa.training.device.mgmt.entity.DeviceHolder;
import com.tma.apa.training.device.mgmt.dao.DeviceHolderDAO;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
public class DeviceHolderDAOImpl implements DeviceHolderDAO {

    private EntityManager m_entityManager;

    public DeviceHolderDAOImpl(PersistenceUtil persistenceUtil) {
        this.m_entityManager = persistenceUtil.getEntityManager();
    }

    @Override
    @Transactional(Transactional.TxType.SUPPORTS)
    public List<DeviceHolder> getAll() {
        TypedQuery<DeviceHolder> query = m_entityManager.createQuery("SELECT h FROM DeviceHolder h", DeviceHolder.class);
        return query.getResultList();
    }

    @Override
    @Transactional(Transactional.TxType.SUPPORTS)
    public DeviceHolder getByName(String name) {
        return m_entityManager.find(DeviceHolder.class, name);
    }

    @Override
    @Transactional(Transactional.TxType.REQUIRES_NEW)
    public void add(DeviceHolder deviceHolder) {
        m_entityManager.persist(deviceHolder);
    }

    @Override
    @Transactional(Transactional.TxType.REQUIRES_NEW)
    public void deleteAll() {
//        m_entityManager.createQuery("DELETE FROM DeviceHolder").executeUpdate();

        Query query = m_entityManager.createQuery("DELETE DeviceHolder");
        query.executeUpdate();
    }

}