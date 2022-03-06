import styled from 'styled-components';
import { EmojiSmile } from '@styled-icons/bootstrap/EmojiSmile';
import { Image } from '@styled-icons/bootstrap/Image';
import { MicNone } from '@styled-icons/material/MicNone';

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 460px);
  position: relative;
  background-color: #fff;
`;

export const FilePreviewer = styled.div``;

export const SendButton = styled.div`
  text-align: right;
  height: 25%;
  position: absolute;
  right: 2rem;
  bottom: 1.5rem;
`;

export const Button = styled.button`
  border: 1px solid black;
  background-color: #f5f5f5;
  color: black;
  padding: 7px 14px;
  font-size: 16px;
  cursor: pointer;
  border-color: #e5e5e5;
  color: black;

  :hover {
    background: #129611;
  }
`;

export const Toolbox = styled.div`
  border-bottom: #6d6d6d 1px;
  display: flex;
`;

export const ToolItem = styled.div`
  width: 20px;
  height: 20px;
  margin: 0.6rem 0 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  display: inline-block;

  :hover {
    transform: scale(1.1);
    transition-duration: 0.2s;
    color: #1890ff;
    cursor: pointer;
  }
`;

export const EmojiIcon = styled(EmojiSmile)`
  color: #4c4c4c;
  border: none;
  outline: none;
`;
export const SendImageIcon = styled(Image)`
  color: #4c4c4c;
  border: none;
  outline: none;
`;
export const VoiceMessageIcon = styled(MicNone)`
  color: #4c4c4c;
  border: none;
  outline: none;
`;

export const TextEditor = styled.div`
  width: 100%;
  margin-top: 1rem;
  outline: none;
  border: none;
  resize: none;
  height: 60%;
  display: flex;

  textarea {
    border: none;
    outline: none;
    resize: none;
    font-size: 1rem;
    margin: 0 1rem;
    overflow: auto;
    width: 100%;
    height: 100%;
  }
`;
