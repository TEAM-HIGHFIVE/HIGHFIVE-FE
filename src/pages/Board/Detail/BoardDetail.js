import React from "react";
import S from "../Detail/Style";

// 댓글 예시시
const comments = [
  "실제 도움이 되는 정책으로 이어지기를 바랍니다.",
  "현실적인 문제까지 짚어주셔서 공감이 많이 됩니다.",
  "이런 문제들을 더 많은 사람들이 인식했으면 합니다.",
  "읽으면서 여러 생각이 들었어요. 좋은 글 감사합니다.",
  "좋은 글이에요. 앞으로도 이런 이야기 많이 공유됐으면 좋겠습니다.",
];

const handleCommentSubmit = () => {
  const comment = document.querySelector("input[placeholder='댓글 작성']").value;

  // TODO: 백엔드에 POST 요청 예정
  console.log("작성한 댓글:", comment);

  // 예시
  // axios.post('/api/comment', { postId: ..., content: comment })
  //   .then(res => console.log(res.data))
  //   .catch(err => console.error(err));
};

const BoardDetail = () => {
  return (
    <S.Container>
      <S.PostBox>
        <S.Title>
          저소득장애인 장애인심사용 진단서 발급비 및 검사비 지원
        </S.Title>
        <S.Date>2024-07-11</S.Date>
        <S.Content>
          복지 서비스는 사회 구성원 모두가 최소한의 삶의 질을 유지할 수 있도록
          도와주는 필수적인 장치라고 생각한다. <br />
          단순한 경제적 지원을 넘어, 개인이 자립할 수 있는 기반을 마련해주는
          복지가 점점 더 중요해지고 있다. <br />
          다만 현실에서는 여전히 사각지대가 존재하고, 일부 서비스는 형식적
          절차에 치우쳐 실질적인 도움으로 이어지지 못하는 경우도 있어 아쉬움을
          느낀다. <br />
          앞으로 복지 정책이 사람들의 '삶' 그 자체에 더 깊이 스며드는 방향으로
          발전하길 기대한다.
        </S.Content>
      </S.PostBox>
      <h3 style={{ marginBottom: "10px", marginLeft: "4px" }}>댓글</h3>{" "}
    
      <S.CommentSection>
        {comments.map((comment, idx) => (
          <S.Comment key={idx}>{comment}</S.Comment>
        ))}
        <S.CommentInput placeholder="댓글 작성" />
        <S.SubmitButton onClick={handleCommentSubmit}>댓글 작성</S.SubmitButton>
      </S.CommentSection>
    </S.Container>
  );
};

export default BoardDetail;
