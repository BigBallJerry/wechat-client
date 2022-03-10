import { Container, AvatarLetters } from './styles';

type Props = {
  size?: number;
  avatar?: string;
  sizeUnit?: string;
};

const LetterAvatar = ({ size, avatar, sizeUnit = 'px' }: Props) => {
  return (
    <Container size={size} sizeUnit={sizeUnit}>
      <AvatarLetters>{avatar}</AvatarLetters>
    </Container>
  );
};

export default LetterAvatar;
