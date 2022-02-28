import styled from 'styled-components';
import { Search } from '@styled-icons/bootstrap/Search';

export const UserPanelContainer = styled.div`
  background: #e3e0df;
  width: 100%;
  margin-left: 4rem;
  float: left;
  min-height: 100%;
  overflow: auto;
`;

export const Header = styled.div`
  height: 60px;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1``;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  position: absolute;

  input {
    padding: 10px;
    width: 100%;
    font-size: 17px;
    line-height: 20px;
    border: 1px solid #d3d3d3;
    outline: none;
    text-align: center;
    border-radius: 5px;

    :focus {
      border: 2px solid #1e90ff;
    }
  }
`;

export const SearchIcon = styled(Search)`
  color: red;
  position: absolute;
  left: 0;
  padding: 10px;
`;
