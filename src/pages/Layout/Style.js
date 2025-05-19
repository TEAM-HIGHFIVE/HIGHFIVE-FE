import styled from "styled-components";

const S = {};

S.Header = styled.header`
  width: 100vw;
  height: 15vh;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 50px;
  box-sizing: border-box;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0; /* 👈 추가 */
`;


S.Logo = styled.img`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 70%;
  object-fit: contain;
`;

S.ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

S.Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default S;
