import React, { useState } from "react";
import { S } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

// 로그인 안되어 있을 시 나오는 모달
const LoginRequiredModal = ({ onClose, onConfirm }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "400px",
        padding: "2rem",
        background: "#fff",
        borderRadius: "16px",
        boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
        textAlign: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "14px",
          right: "16px",
          fontSize: "1.4rem",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        <FontAwesomeIcon icon={faXmark} />
      </div>

      <p style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: "1.5rem" }}>
        로그인 후 이용 가능합니다.
      </p>

      <button
        onClick={onConfirm}
        style={{
          padding: "10px 20px",
          background: "#4a90e2",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        로그인 하러 가기
      </button>
    </div>
  );
};

const Home = () => {
  // 로그인 상태에 따라 모달을 열기 위한 상태 변수
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 로그인 상태를 관리하는 상태 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 로그인 상태에 따라 페이지 이동 처리
  const handleProtectedNavigation = (targetPath) => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
    } else {
      navigate(targetPath);
    }
  };

  // 테스트
  const goToLogin = () => {
    // 💡 실제로는 navigate로 로그인 페이지 가면 되고,
    // 테스트 중엔 아래처럼 상태를 true로 바꾸는 것도 가능
    setIsLoggedIn(true); // 로그인 된 상태로 전환
    setIsModalOpen(false);
    // 또는 navigate("/user/login");
  };

  

  return (
    <S.main>
      {isModalOpen && (
        <LoginRequiredModal
          onClose={() => setIsModalOpen(false)}
          onConfirm={goToLogin}
        />
      )}

      <div style={{ position: "relative" }}>
        <S.absoluteTitle style={{ top: "0.5vw", left: "0" }}>
          복지 서비스 조회
        </S.absoluteTitle>

        <S.top>
          <S.searchBox>
            <S.input placeholder="성남에 거주 중인 20대 남자야. 교통사고로 하반신 장애를 갖게 됐어. 받을 수 있는 혜택이 있을까?" />
            <S.searchIcon onClick={() => handleProtectedNavigation("/welfare/list")}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </S.searchIcon>
          </S.searchBox>

          <S.conditionBox>
            <S.section1>
              <S.sectionTitle>거주 지역</S.sectionTitle>
              <S.regionGrid>
                {[
                  "수원시", "성남시", "의정부시", "안양시", "부천시", "광명시", "평택시",
                  "동두천시", "안산시", "고양시", "과천시", "구리시", "남양주시", "오산시",
                  "시흥시", "군포시", "의왕시", "하남시", "용인시", "파주시", "이천시",
                  "안성시", "김포시", "양주시", "포천시", "여주시", "가평군", "양평군",
                ].map((city) => (
                  <S.regionRadioLabel key={city}>
                    <input type="radio" name="region" value={city} />
                    <span>{city}</span>
                  </S.regionRadioLabel>
                ))}
              </S.regionGrid>
            </S.section1>

            <S.section2>
              <S.sectionTitle>지원 대상</S.sectionTitle>
              <S.tagGroup>
                {[
                  "장애인", "저소득", "한부모/조손",
                  "보훈대상자", "다문화/탈북민", "다자녀",
                ].map((target) => (
                  <S.radioLabel key={target}>
                    <input type="radio" name="target" value={target} />
                    <span>{target}</span>
                  </S.radioLabel>
                ))}
              </S.tagGroup>
            </S.section2>
          </S.conditionBox>
        </S.top>
      </div>

      <S.bottom>
        <div style={{ width: "60%", position: "relative", left: "-2vw" }}>
          <S.absoluteTitle style={{ top: "-3vw", left: "0" }}>
            최근 게시물
          </S.absoluteTitle>
          <S.recent>
            <ul>
              {[
                "몰랐던 복지 정보 공유합니다!",
                "이거 신청해보신 분 계신가요?",
                "알아두면 좋은 복지 상식",
                "저소득층 기준 어떻게 되나요?",
                "복지 서비스 중복 신청 가능한가요?",
              ].map((text, i) => (
                <div
                  className="item"
                  key={i}
                  onClick={() => handleProtectedNavigation("/board/list")}
                >
                  {text} <span>2025.04.2{i + 1}</span>
                </div>
              ))}
            </ul>
          </S.recent>
        </div>

        <div style={{ width: "55%", position: "relative", left: "2vw" }}>
          <S.absoluteTitle style={{ top: "-3vw", left: "0" }}>
            자주 찾는 복지 서비스
          </S.absoluteTitle>
          <S.frequent>
            <ul>
              {[
                "어린이집 입학준비금 지원",
                "수도요금감면(수급자,장애인)",
                "중증장애인 사회적응활동 지원",
                "독거노인 건강음료비 지원",
                "용인시 저소득 한부모가족 지원사업",
              ].map((item, i) => (
                <div
                  className="item"
                  key={i}
                  onClick={() => handleProtectedNavigation("/welfare/list")}
                >
                  {item}
                </div>
              ))}
            </ul>
          </S.frequent>
        </div>
      </S.bottom>
    </S.main>
  );
};

export default Home;
