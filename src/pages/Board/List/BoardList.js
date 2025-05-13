import React, { useState } from "react";
import S from "../List/Style";

const dummyPosts = [
  { id: 1, title: "몰랐던 복지 정보 공유합니다!", date: "2025.04.01" },
  { id: 2, title: "이거 신청해보신 분 계신가요?", date: "2025.04.02" },
  { id: 3, title: "알아두면 좋은 복지 상식", date: "2025.04.03" },
  { id: 4, title: "저소득층 기준 어떻게 되나요?", date: "2025.04.04" },
  { id: 5, title: "복지 서비스 중복 신청 가능한가요?", date: "2025.04.05" },
  { id: 6, title: "생활비 지원 받는 방법?", date: "2025.04.06" },
  { id: 7, title: "이사 지원 신청했어요", date: "2025.04.07" },
  { id: 8, title: "2025년 복지 변경사항 정리", date: "2025.04.08" },
  { id: 9, title: "기초생활수급자 조건이 뭔가요?", date: "2025.04.09" },
  { id: 10, title: "정부 지원 사업 후기", date: "2025.04.10" },
  { id: 11, title: "노인 복지 혜택 정리", date: "2025.04.11" },
  { id: 12, title: "장애인 복지카드 질문", date: "2025.04.12" },
  { id: 13, title: "청년 지원금 후기", date: "2025.04.13" },
  { id: 14, title: "전세자금대출 복지 연계", date: "2025.04.14" },
  { id: 15, title: "육아지원금 신청 방법", date: "2025.04.15" },
  { id: 16, title: "긴급복지 생계지원 후기", date: "2025.04.16" },
  { id: 17, title: "의료비 지원 대상이 궁금해요", date: "2025.04.17" },
  { id: 18, title: "복지 상담 어디서 받아요?", date: "2025.04.18" },
  { id: 19, title: "월세지원이 있다던데?", date: "2025.04.19" },
  { id: 20, title: "구직지원금 받는 법", date: "2025.04.20" },
  { id: 21, title: "한부모가정 복지 정책", date: "2025.04.21" },
  { id: 22, title: "실업급여랑 복지 같이 받나요?", date: "2025.04.22" },
  { id: 23, title: "의료급여 신청 후기", date: "2025.04.23" },
  { id: 24, title: "청년 주거급여 신청함", date: "2025.04.24" },
  { id: 25, title: "2025 복지정책 요약", date: "2025.04.25" },
  { id: 26, title: "복지 신청 시 필요한 서류는?", date: "2025.04.26" },
  { id: 27, title: "노인 장기요양 등급 기준", date: "2025.04.27" },
  { id: 28, title: "다문화가정 복지 내용", date: "2025.04.28" },
  { id: 29, title: "복지 사각지대란 뭔가요?", date: "2025.04.29" },
  { id: 30, title: "가구 소득 기준 정리", date: "2025.04.30" },
];

const BoardList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = dummyPosts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(dummyPosts.length / postsPerPage);

  // 상세페이지 연결
  const handleRowClick = (post) => {
    console.log("클릭된 게시글:", post);

    // 추후에는 navigate(`/detail/${post.id}`, { state: post }) 이런 식으로 넘기게 될 예정
  };

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Q&A 및 후기 게시판</S.Title>

        <S.List>
          {currentPosts.map((post) => (
            <S.Row key={post.id} onClick={() => handleRowClick(post)}>
              <span>{post.title}</span>
              <span>{post.date}</span>
            </S.Row>
          ))}
        </S.List>
        <S.Pagination>
          {currentPage > 1 && (
            <S.PageButton onClick={() => setCurrentPage(currentPage - 1)}>
              &lt;
            </S.PageButton>
          )}

          {Array.from({ length: totalPages }, (_, i) => (
            <S.PageButton
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              $active={currentPage === i + 1}
            >
              {i + 1}
            </S.PageButton>
          ))}

          {currentPage < totalPages && (
            <S.PageButton onClick={() => setCurrentPage(currentPage + 1)}>
              &gt;
            </S.PageButton>
          )}
        </S.Pagination>
      </S.Container>
    </S.Wrapper>
  );
};

export default BoardList;
