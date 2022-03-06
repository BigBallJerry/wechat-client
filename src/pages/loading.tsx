import { Circle } from 'better-react-spinkit';
import styled from 'styled-components';
import CircleSpinner from '../components/circleSpinner/CircleSpinner';

type Props = {};

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Loading = (props: Props) => {
  return (
    <Container>
      <img
        src='https://logodownload.org/wp-content/uploads/2019/08/wechat-logo-4.png'
        alt=''
        style={{ marginBottom: 20 }}
        height={200}
        width={200}
      />
      <CircleSpinner color='#02de6d' />
    </Container>
  );
};

export default Loading;
