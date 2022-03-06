import * as React from 'react';
import { Container, Content, PageContainer } from './styles';

type Props = {
  title?: string;
  backgroundColor?: string;
};

export const WeChatLayout: React.FunctionComponent<Props> = ({ children }) => (
  <Container>
    {/* <Header /> */}
    <Content>
      <PageContainer className='PageContainer_1'>{children}</PageContainer>
    </Content>
  </Container>
);
