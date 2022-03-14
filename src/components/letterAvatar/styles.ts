import styled from 'styled-components';

type LetterAvatarProps = {
  size?: number;
  sizeUnit?: string;
};

export const AvatarLetters = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
`;

export const Container = styled.div<LetterAvatarProps>`
  width: ${(props) => (props.size ? `${props.size}${props.sizeUnit}` : '4rem')};
  height: ${(props) => (props.size ? `${props.size}${props.sizeUnit}` : '4rem')};
  display: inline-block;
  vertical-align: middle;
  position: relative;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  border-radius: 50%;
`;
