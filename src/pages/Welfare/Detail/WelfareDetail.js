import React from 'react';
import S from '../Detail/Style';

// 후에 채팅내용 보내기기
const handleQuestionSubmit = () => {
  // 입력창의 내용을 가져옴
  const question = document.querySelector("input[type='text']").value;

  // TODO: 백엔드로 POST 요청 보내는 부분 작성 예정
  console.log("사용자 질문:", question);

  // 예시로 백엔드에 보낸다고 가정하는 코드
  // axios.post('/api/question', { content: question })
  //   .then(res => { console.log(res.data); })
  //   .catch(err => { console.error(err); });
};

const WelfareDetail = () => {
  return (
    <S.Wrapper>
      <S.TopRow>
        <S.Title>중증장애인 사회적응활동 지원</S.Title>
        <S.Tag># 성남시</S.Tag>
        <S.Tag># 장애인</S.Tag>
        <S.Tag># 저소득</S.Tag>
      </S.TopRow>

      <S.Container>
        <S.Left>
          <S.Section>
            <S.SectionTitle>지원 대상</S.SectionTitle>
            <p>성남시 거주 중위소득 52% 이내 중증 장애인 (22명)</p>
          </S.Section>
          <S.Section>
            <S.SectionTitle>선정 기준</S.SectionTitle>
            <p>심사표기준표에 의한 고득점자순으로 선정</p>
          </S.Section>
          <S.Section>
            <S.SectionTitle>서비스 내용</S.SectionTitle>
            <p>
              1인당 60만원 (실비 지급)<br />
              별도 재활 서비스와 동일 치료 불가
            </p>
          </S.Section>
          <S.Section>
            <S.SectionTitle>신청 방법</S.SectionTitle>
            <p>
              동주민센터 매월 5일까지 신청 접수 (양식, 증빙 등)<br />
              구청에서 대상자 소득 재산동 확인 → 시청에서 개인 계좌로 입금
            </p>
          </S.Section>
          <S.Section>
            <S.SectionTitle>전화 문의</S.SectionTitle>
            <p>성남시 장애인복지과 031-729-2889</p>
          </S.Section>
          <S.Section>
            <S.SectionTitle>관련 웹사이트</S.SectionTitle>
            <p>성남시 장애인 복지과 www.seongnam.go.kr</p>
          </S.Section>
          <S.Section>
            <S.SectionTitle>근거 법령 및 자료</S.SectionTitle>
            <S.DownloadButton>자료 다운로드</S.DownloadButton>
          </S.Section>
        </S.Left>

        <S.Right>
          <S.ChatScrollArea>
            <S.ChatBubbleUser>
              중증 장애인의 기준이 뭐야?
            </S.ChatBubbleUser>

            <S.ChatBubbleAI>
              중증 장애인은 「장애인복지법 시행규칙」에 따라 장애 정도가 심한 장애인으로,<br />
              기준 1~3급 수준의 장애를 가진 사람을 말해요.<br />
              예를 들어, 사지 마비, 시각·청각 완전 상실, 지적장애 중도 이상, 중증 자폐나 정신질환 등이 해당돼요.<br />
              중증 등록 시 복지 서비스에서 우선 지원을 받을 수 있어요.
            </S.ChatBubbleAI>

            <S.ChatBubbleUser>
              그러면 어디서 등록해요?
            </S.ChatBubbleUser>

            <S.ChatBubbleAI>
              가까운 주민센터나 구청 복지과에서 등록 신청이 가능해요. 진단서 등 필요한 서류를 지참하면 도와드릴 수 있어요.
            </S.ChatBubbleAI>

            <S.ChatBubbleUser>
              신청 기간은 언제예요?
            </S.ChatBubbleUser>

            <S.ChatBubbleAI>
              신청은 매월 5일까지 접수 가능하며, 구체적인 일정은 성남시 공지사항을 참고하시면 됩니다.
            </S.ChatBubbleAI>
          </S.ChatScrollArea>

          <S.QuestionBox>
            <input
              type="text"
              placeholder="심사표기준표의 고득점자는 어떻게 산정돼?"
              style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
            />
           <S.QuestionButton onClick={handleQuestionSubmit}>질문하기</S.QuestionButton>
          </S.QuestionBox>
        </S.Right>
      </S.Container>
    </S.Wrapper>
  );
};

export default WelfareDetail;
