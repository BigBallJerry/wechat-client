import { Container, AvatarLetters } from './styles';

type Props = {
  width?: string;
  height?: string;
  avatar?: string;
};

const LetterAvatar = (props: Props) => {
  return (
    <Container width={props.width} height={props.height}>
      <AvatarLetters>{props.avatar}</AvatarLetters>
    </Container>
  );
};

export default LetterAvatar;
