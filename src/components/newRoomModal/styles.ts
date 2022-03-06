import styled from 'styled-components';

export const ModalDialog = styled.div`
  background: #fefefe;
  border: 1px solid grey;
  border-radius: 5px;
  margin-left: -200px;
  position: fixed;
  left: 50%;
  top: -100%;
  z-index: 11;
  width: 360px;
  transform: translate(0, -500%);
  transition: all 0.3s ease-out;
`;

export const Container = styled.div`
  &:before {
    content: '';
    display: none;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }

  &:target {
    // Active animate in modal
    &:before {
      display: block;
    }
    ${ModalDialog} {
      transform: translate(0, 0);
      top: 20%;
    }
  }
`;

export const ModalHeader = styled.div`
  padding: 0.5rem 1.5rem;
  border-bottom: 1px solid #eee;

  h2 {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0;
  }
`;

export const CloseButton = styled.a`
  color: #aaa;
  font-size: 2.25rem;
  text-decoration: none;
  position: absolute;
  right: 0.5rem;
  top: 0;

  &:hover {
    color: darken(#aaa, 10%);
  }
`;

export const ModalFooter = styled.div`
  padding: 0.5rem 1.5rem;
  border-top: #eee solid 1px;
  text-align: right;

  button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 0.5rem 2rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;

    :hover {
      background-color: #e7e7e7;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 1.5rem;
  display: flex;
  align-items: start;
  justify-content: left;
  flex-direction: column;
`;

export const RoomIdLabel = styled.label`
  margin: 0.5rem;
  display: inline-block;
  font-weight: 500;
  text-align: left;
  color: rgba(28, 9, 80, 0.75);

  span {
    color: blue;
  }
`;

export const RoomNameLabel = styled.label`
  margin-left: 0.5rem;
  display: inline-block;
  text-align: left;
  font-weight: 500;
  font-size: 1.2rem;
  color: rgba(28, 9, 80, 0.75);

  span {
    color: blue;
  }
`;

export const RoomNameInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  font-weight: 500;
  font-size: 1.2rem;
`;
