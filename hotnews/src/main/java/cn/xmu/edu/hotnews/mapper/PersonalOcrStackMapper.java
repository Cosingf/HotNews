package cn.xmu.edu.hotnews.mapper;

import cn.xmu.edu.hotnews.entity.PersonalOcrStack;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PersonalOcrStackMapper {
    int deleteByPrimaryKey(Long id);

    int insert(PersonalOcrStack record);

    int insertSelective(PersonalOcrStack record);

    PersonalOcrStack selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(PersonalOcrStack record);

    int updateByPrimaryKey(PersonalOcrStack record);
}
