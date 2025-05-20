import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  max-width: 75vw;
  margin: 0 auto;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 40px 40px 10px 40px;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-right: 20px;
`;

const Tag = styled.span`
  background-color: #e0e6f0;
  color: #333;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
  padding: 0 40px 40px 40px;
`;

const Left = styled.div`
  flex: 2;
  background-color: #f9fafc;
  padding: 30px;
  border-radius: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const Right = styled.div`
  flex: 1;
  background-color: #f2f5f8;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  height: 600px;
`;

const ChatScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-right: 4px;
  margin-bottom: 10px;
`;

const Section = styled.div`
  margin-bottom: 10px;
  background-color: #fff;
  padding: 10px;
  padding-left: 30px;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.03);
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 20px;
    background-color: #4a90e2;
    border-radius: 2px;
  }
`;

const DownloadButton = styled.button`
  margin-top: 10px;
  padding: 8px 14px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 14px;
  cursor: pointer;
`;

const ChatBubbleUser = styled.div`
  background-color: white;
  padding: 15px;
  border-radius: 10px;
  align-self: flex-end;
  max-width: 100%;
  font-size: 14px;
  line-height: 1.6;
`;

const ChatBubbleAI = styled.div`
  background-color: #4a90e2;
  color: black;
  padding: 15px;
  border-radius: 10px;
  align-self: flex-start;
  max-width: 100%;
  font-size: 14px;
  line-height: 1.6;
`;

const QuestionBox = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

const QuestionButton = styled.button`
  margin-top: 10px;
  padding: 8px 14px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
`;

const S = {
  Wrapper,
  TopRow,
  Title,
  Tag,
  Container,
  Left,
  Right,
  ChatScrollArea,
  Section,
  SectionTitle,
  DownloadButton,
  ChatBubbleUser,
  ChatBubbleAI,
  QuestionBox,
  QuestionButton,
};

export default S;