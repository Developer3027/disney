import React from 'react';
import styled from 'styled-components';

function Movies() {
  return (
    <Container>
      <h4>Recommended for You</h4>
      <Content>
        <Wrap>
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6AA86E37AAE45858B6051A3A20963E81DD944696FEC7DEAC1888AA4CF1BEEA31/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals'
            alt=''
          />
        </Wrap>
        <Wrap>
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/341AE85B6C1423B9042B5F2E786645EE551B9D546C3D263B220A4727617FD2B8/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals'
            alt=''
          />
        </Wrap>
        <Wrap>
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/58AEADEAE1A956B3E307C7D11F3460A3B262C683B7CE093743421D33CB1187BA/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals'
            alt=''
          />
        </Wrap>
        <Wrap>
          <img
            src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C0C1B5ABCCA0031878CC67872E9EC10143A88AAF2C81F5283F1CBBBAE572CBBD/badging?width=400&aspectRatio=1.78&format=jpeg&label=originals'
            alt=''
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-gap: 25px;
  margin-bottom: 50px;
`;

const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 100 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
