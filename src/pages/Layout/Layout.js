import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import S from "./Style";
import BackButton from "../../modules/BackButton"; // 경로 주의

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
    navigate("/");
  };

  return (
    <div>
      <S.Header>
        <S.Logo
          src="/images/bock.png"
          alt="BOCK 로고"
          onClick={handleLogoClick}
          style={{ cursor: "pointer" }}
        />
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

      <BackButton /> {/* 뒤로가기 버튼 추가 */}
      <Outlet />
    </div>
  );
};

export default Layout;
