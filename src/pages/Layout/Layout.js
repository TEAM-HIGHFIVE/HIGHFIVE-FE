import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import S from "./Style";

const Layout = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/user/login");
  };

  const handleLogout = () => {
    setIsLogin(false);
  };

  const handleJoin = () => {
    navigate("/user/join");
  };

  const handleLogoClick = () => {
    navigate("/"); // 홈으로 이동
  };

  return (
    <div>
      <S.Header>
        <S.Logo src="/images/bock.png" alt="BOCK 로고" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
        {/* 👆 로고에 onClick 연결하고 커서도 pointer로 */}
        <S.ButtonWrapper>
          {isLogin ? (
            <S.Button onClick={handleLogout}>로그아웃</S.Button>
          ) : (
            <>
              <S.Button onClick={handleLogin}>로그인</S.Button>
              <S.Button onClick={handleJoin}>회원가입</S.Button>
            </>
          )}
        </S.ButtonWrapper>
      </S.Header>

      <Outlet />
    </div>
  );
};

export default Layout;
