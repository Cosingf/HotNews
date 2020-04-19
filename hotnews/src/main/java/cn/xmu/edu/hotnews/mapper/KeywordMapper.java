package cn.xmu.edu.hotnews.mapper;

import cn.xmu.edu.hotnews.entity.Keyword;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;


@Mapper
public interface KeywordMapper {

    void insertKeywordList(List<Keyword> keywordList);

    Long getLastId();

    List<Keyword> getKeywordByBookId(@Param("bookId") Long bookId);

    List<Keyword> getUnmatchedKeywordByBookId(Long bookId);

    void updateKeywordById(Keyword keyword);
}
