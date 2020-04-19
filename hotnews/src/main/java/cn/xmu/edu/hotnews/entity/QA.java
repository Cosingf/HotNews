package cn.xmu.edu.hotnews.entity;

public class QA {
    private Long questionId;
    private Long answerId;
    private String question;
    private String answer;
    private String link;

    public QA(){}
    public QA(String question, String answer, String link) {
        this.question=question;
        this.answer =answer;
        this.link = link;
    }

    //生成QA结合
    public String getJointQA() {
        StringBuilder sb=new StringBuilder();
        sb.append(question);
        sb.append(" "+answer);
        return sb.toString();
    }

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public Long getAnswerId() {
        return answerId;
    }

    public void setAnswerId(Long answerId) {
        this.answerId = answerId;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }
}
