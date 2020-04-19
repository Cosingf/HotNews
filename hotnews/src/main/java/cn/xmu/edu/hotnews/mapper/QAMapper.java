package cn.xmu.edu.hotnews.mapper;

import cn.xmu.edu.hotnews.entity.QA;
import cn.xmu.edu.hotnews.entity.QASection;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;


@Mapper
public interface QAMapper {

    List<QA> getAllQA();

    void insertQASection(@Param("list") List<QASection> list);

    List<QA> selectQASectionBySectionId(@Param("sectionId") Long sectionId);

//    Long getLastQASectionId();

}
