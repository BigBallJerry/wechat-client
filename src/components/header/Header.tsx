import { HeaderContainer, TitleContainer } from './styles';

interface HeaderTitle {
  title: string;
}

export const Header = ({ title }: HeaderTitle) => {
  return (
    <HeaderContainer>
      <TitleContainer>{title}</TitleContainer>
    </HeaderContainer>
  );
};
