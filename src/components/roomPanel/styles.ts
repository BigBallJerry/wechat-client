import styled from 'styled-components';
import { Wechat } from '@styled-icons/remix-line/Wechat';
import { PlusSquareFill } from '@styled-icons/bootstrap/PlusSquareFill';

export const RoomPanelContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100%;
  overflow: hidden;
  border: 1px solid #e7e7e7;
`;

export const Header = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1``;

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-left: 0.5rem;

  input {
    padding: 10px;
    width: 100%;
    font-size: 12px;
    line-height: 18px;
    border: 1px solid #d3d3d3;
    outline: none;
    text-align: left;
    border-radius: 5px;
    background-color: #e2e2e2;

    :focus {
      border: 2px solid #1e90ff;
    }
  }
`;

export const CreateIcon = styled(PlusSquareFill)`
  color: #e2e2e2;

  :hover {
    color: #a2a2a2;
  }
`;

export const CreateNewRoom = styled.a`
  margin-right: 1rem;
  cursor: pointer;
`;

export const ChatRoomContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #e0dfde;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      .active {
        background-color: #480048;
      }
    }
  }

  ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const ChatIcon = styled.img``;

export const GroupChatIcon = styled(Wechat)`
  color: black;
`;

export const ChatRoomTitle = styled.span`
  font-size: 14px;
`;
