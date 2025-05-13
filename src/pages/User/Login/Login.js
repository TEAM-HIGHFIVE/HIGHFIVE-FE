import React, { useState } from "react";
import S from "../Login/Style";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [showError, setShowError] = useState(false);

  const handleLogin = () => {
    if (!id || !pw) {
      setShowError(true);
    } else {
      setShowError(false);
      // 나중에 실제 로그인 로직 추가 예정
    }
  };

  return (
    <S.Container>
      <S.LoginBox>
        <S.Title>로그인</S.Title>
        <S.Input
          type="text"
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        {showError && <S.ErrorMsg>아이디 또는 비밀번호를 입력해 주세요.</S.ErrorMsg>}
        <S.LoginButton onClick={handleLogin}>로그인</S.LoginButton>
      </S.LoginBox>
    </S.Container>
  );
};

export default Login;
