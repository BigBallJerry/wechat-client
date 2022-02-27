import * as React from 'react';
import { Container, Content, PageContainer } from './styles';

type Props = {
  title?: string;
};

export const WeChatLayout: React.FunctionComponent<Props> = ({ children, title = 'This is the default title' }) => (
  <Container>
    {/* <Header title={title} /> */}
    <Content>
      <PageContainer>{children}</PageContainer>
    </Content>
  </Container>
);
