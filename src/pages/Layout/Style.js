// src/layouts/Style.js
import styled from "styled-components";

const S = {};

S.Header = styled.header`
  /* main 컨테이너(80vw)와 동일한 너비로 중앙 정렬 */
  width: 80vw;
  margin: 0 auto;
  height: 15vh;
  position: relative;
  display: flex;
  justify-content: flex-end;  /* 버튼을 오른쪽 끝에 배치 */
  align-items: center;
  /* main과 맞추기 위해 좌우 패딩 3% */
  padding: 0 3%;
  box-sizing: border-box;
  background-color: #ffffff;
  margin-top: 30px;
  margin-bottom: 10px;
  border-bottom: none;
`;

S.Middle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

S.Logo = styled.img`
  height: 70%;
  object-fit: contain;
`;

S.Title = styled.h1`
  margin-left: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
`;

S.ButtonWrapper = styled.div`
  display: flex;
  gap: 20px;
`;

S.Button = styled.button`
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;     /* 버튼 텍스트를 굵게 */
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 4px;
`;

export default S;
