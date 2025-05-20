import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";

const S = {};

S.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  padding: 40px 20px;
`;

S.SearchContainer = styled.div`
  width: 100%;
  max-width: 720px;
  background-color: white;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 40px;
  background-color: #fafafa;
`;

S.SearchBox = styled.div`
  position: relative;
  padding-top: 10px;
  margin-bottom: 20px;
  padding-left: 10px;
  font-weight: bold;
`;

S.Input = styled.input`
  width: 100%;
  padding: 16px 48px 16px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 12px;
`;

S.SearchIcon = styled.div`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  cursor: pointer;
`;

S.FilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fafafa;
  padding: 12px;
  border-radius: 8px;
`;

S.FilterItem = styled.div`
  display: flex;
  flex-direction: column;
`;

S.Label = styled.span`
  font-size: 13px;
  color: #888;
`;

S.Value = styled.span`
  font-size: 15px;
  font-weight: 600;
`;

S.ListContainer = styled.div`
  width: 100%;
  max-width: 720px;
  background-color: white;
  padding: 24px;
  border-radius: 16px;
`;

S.SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

S.ProfileIcon = styled(FaUserCircle)`
  font-size: 24px;
  color: #4469fa;
`;

S.List = styled.div`
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
`;

S.Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  background-color: white;

  &:hover {
    background-color: #f5f5f5;
  }
`;

S.Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 6px;
`;

S.PageButton = styled.button`
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  background-color: ${({ $active }) => ($active ? "#333" : "#ddd")};
  color: ${({ $active }) => ($active ? "#fff" : "#000")};
  cursor: pointer;

  &:hover {
    background-color: #888;
    color: #fff;
  }
`;

export default S;
