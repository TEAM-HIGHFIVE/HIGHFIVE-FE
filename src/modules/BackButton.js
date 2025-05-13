import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // 메인 페이지에서는 안 보이게 처리
  if (location.pathname === "/") return null;

  return (
    <Wrapper onClick={() => navigate(-1)}>
      <Arrow>&lt;</Arrow>
      <Text>돌아가기</Text>
    </Wrapper>
  );
};

export default BackButton;

const Wrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Arrow = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-right: 6px;
`;

const Text = styled.div`
  font-size: 16px;
`;
