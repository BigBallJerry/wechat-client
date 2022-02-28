import { UserPanelContainer, SearchBar, Header, SearchIcon } from './styles';

export const UserPanel = () => {
  return (
    <UserPanelContainer>
      <Header>
        <SearchBar>
          <SearchIcon size='20' />
          <input type='text' placeholder='Search chat' />
        </SearchBar>
      </Header>
      <h1>UserPanel</h1>
    </UserPanelContainer>
  );
};
