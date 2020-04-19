package cn.xmu.edu.hotnews.mapper;

import cn.xmu.edu.hotnews.entity.LegalDoc;
import cn.xmu.edu.hotnews.entity.PersonalLegaldocStack;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface LegalDocMapper {
    int deleteByPrimaryKey(Long id);

    int insert(LegalDoc record);

    LegalDoc selectByPrimaryKey(Long id);

    List<LegalDoc> selectAll();

    int getAllNum();

    List<LegalDoc> selectPublicPage(@Param("num1") Integer num1,@Param("num2") Integer num2);

    List<LegalDoc>  selectPublicBooksByContent(@Param("content") String content);

    int updateByPrimaryKey(LegalDoc record);

    Long getLastBookId();

    void insertPersonalLegalDoc(PersonalLegaldocStack personalLegaldocStack);

    void setLegalDocEnriched(Long id);

    String getPathByBookId(Long id);
}
