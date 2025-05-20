// src/layouts/Layout.jsx
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import S from "./Style";
import BackButton from "../../modules/BackButton";

const Layout = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => navigate("/user/login");
  const handleLogout = () => setIsLogin(false);
  const handleJoin = () => navigate("/user/join");
  const handleLogoClick = () => navigate("/");

  return (
    <>
      <S.Header>
        <S.Middle onClick={handleLogoClick}>
          <S.Logo src="/images/bock.png" alt="BOCK 로고" />
          <S.Title>BOCK-GPT</S.Title>
        </S.Middle>
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

      <BackButton />
      <Outlet />
    </>
  );
};

export default Layout;
