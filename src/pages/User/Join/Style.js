import styled from "styled-components";

const S = {};

S.Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f9fa;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 중앙에서 위쪽 정렬 */
  padding-top: 100px;       /* 원하는 만큼 위로 올리기 */
`;

S.LoginBox = styled.div`
  background-color: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
  min-width: 350px;
  text-align: center;
`;

S.Title = styled.h2`
  margin-bottom: 20px;
  font-size: 18px;
`;

S.Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

S.ErrorMsg = styled.p`
  color: #e74c3c;
  font-size: 13px;
  margin: 10px 0;
`;

S.LoginButton = styled.button`
  background-color: #5d91dc;
  color: white;
  padding: 12px 0;
  width: 100%;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;

  &:hover {
    background-color: #4a78b8;
  }
`;

export default S;
