import styled from "styled-components";

const Container = styled.div`
  width: 60%;
  margin: 40px auto;
  font-family: sans-serif;
`;

const PostBox = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  margin-bottom: 30px;
`;

const Title = styled.h2`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Date = styled.div`
  font-size: 14px;
  color: gray;
  margin-bottom: 15px;
`;

const Content = styled.div`
  font-size: 16px;
  line-height: 1.7;
  color: #333;
`;

const CommentSection = styled.div`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.03);
`;

const Comment = styled.div`
  background-color: #fff;
  padding: 12px 15px;
  margin-bottom: 12px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
`;

const CommentInput = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 10px;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
  font-size: 14px;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const S = {
  Container,
  PostBox,
  Title,
  Date,
  Content,
  CommentSection,
  Comment,
  CommentInput,
  SubmitButton,
};

export default S;
