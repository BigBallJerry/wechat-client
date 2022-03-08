import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
  color: black;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 30px;
  overflow: none;
`;

export const PageContainer = styled.div`
  @media screen and (min-width: 900px) {
    width: 900px;
    height: 700px;
    top: calc((100% - 700px) / 2);
    left: calc((100% - 900px) / 2);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  @media screen and (max-height: 500px) {
    width: 600px;
    height: 450px;
    top: calc((100% - 450px) / 2);
    left: calc((100% - 600px) / 2);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  position: absolute;
  display: flex;
  flex-direction: row;
`;

export const Footer = styled.div``;
