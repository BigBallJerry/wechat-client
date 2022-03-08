import styled from 'styled-components';

interface ContainerProps {
  selected: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  padding-left: 3rem;
  height: 4rem;
  margin-bottom: 0.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: transform 500ms;
  cursor: pointer;

  :hover {
    background-color: #c9d1d1;
  }

  :last-child {
    margin-bottom: 0;
  }

  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  background-color: ${(props) =>
    props.selected ? props.theme.colors.chatRoomItem.selectedBgColor : props.theme.colors.chatRoom.bgColor};
`;

export const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin-left: 0.5rem;
  image-rendering: -webkit-optimize-contrast;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  position: absolute;
  left: 0;
  overflow: hidden;

  img {
    width: 3rem;
    height: 3rem;
  }
`;

export const Badge = styled.div`
  box-sizing: border-box;
  position: absolute;
  width: 1.2rem;
  height: 1.2rem;
  font-size: 0.9rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 0.1rem;
  left: 2.7rem;
  background: red;
  color: white;
`;

export const Name = styled.span`
  display: block;
  font-weight: 500;
  text-align: left;
  margin-left: 1rem;
  margin-top: 0.1rem;
  height: 1.2rem;
  font-size: 0.9rem;
  clear: both;
  display: inline-block;
`;

export const LatestMessage = styled.span`
  font-size: 0.9rem;
  color: #999;
  display: block;
  height: 1.2rem;
  margin-left: 1rem;
  font-size: 0.8rem;
  clear: both;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-align: left;
  text-overflow: ellipsis;
`;
