package cn.xmu.edu.hotnews.mapper;

import cn.xmu.edu.hotnews.entity.Resultuser;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ResultuserMapper {
    int insert(Resultuser record);

    int insertSelective(Resultuser record);
}
