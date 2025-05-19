import styled from "styled-components";

const S = {};

S.Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 60px 0;
`;

S.Container = styled.div`
  width: 90%;
  max-width: 720px;
  background-color: #fff;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

S.Title = styled.h1`
  font-size: 24px;
  margin-bottom: 24px;
`;

S.List = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
`;

S.Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  cursor: pointer;
`;

S.Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

S.PageButton = styled.button`
  padding: 6px 12px;
  border-radius: 4px;
  border: none;
  background-color: ${({ $active }) => ($active ? '#333' : '#ddd')};
  color: ${({ $active }) => ($active ? '#fff' : '#000')};
  cursor: pointer;

  &:hover {
    background-color: #888;
    color: #fff;
  }
`;

export default S;
