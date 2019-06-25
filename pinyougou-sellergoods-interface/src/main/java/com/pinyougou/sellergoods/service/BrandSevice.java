package com.pinyougou.sellergoods.service;


import com.pinyougou.pojo.TbBrand;
import entity.PageResult;

import java.util.List;

public interface BrandSevice {

    public List<TbBrand> findAll();
//品牌分页

    /**
     * 品牌分页
     * @param pageNum 当前页
     * @param pageSize 每页数量
     * @return
     */
    public PageResult findPage(int pageNum,int pageSize);


    /**
     * 增加
     * @param bBrand  实体类
     */
    public void add(TbBrand bBrand);

    /**
     * 根据id查找实体
     * @param id
     * @return
     */
    public TbBrand findOne(Long id);

    /**
     * 修改
     * @param bBrand
     */
    public void update(TbBrand bBrand);

    /**
     * 根据id删除
     * @param ids
     */
    public void delete(Long[] ids);

    /**
     * 品牌分页根据条件查询
     * @param pageNum 当前页
     * @param pageSize 每页数量
     * @return
     */
    public PageResult findPage(TbBrand brand,int pageNum,int pageSize);
}
