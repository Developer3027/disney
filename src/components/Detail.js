import React from 'react';
import { FaPlay, FaPlus } from 'react-icons/fa';
import { TiGroup } from 'react-icons/ti';
import styled from 'styled-components';

function Detail() {
  return (
    <Container>
      <Background>
        <img
          src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/DEA199731025DF43C89E737AFD70F4C6F7CEE500744B95EC49E32AD6F385DB76/scale?width=1440&aspectRatio=1.78&format=jpeg'
          alt=''
        />
      </Background>
      <ImageTitle>
        <img
          src='https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/AEF0F6B1E2D96E8903DF710141334E32AC6204F827043BAEB70400322472B7C6/scale?width=1440&aspectRatio=1.78'
          alt=''
        />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <FaPlay /> &nbsp;
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <FaPlay /> &nbsp;
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <FaPlus />
        </AddButton>
        <GroupWatchButton>
          <TiGroup />
        </GroupWatchButton>
      </Controls>
      <SubTitle>2018 * 7m * family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        earum facere excepturi quo fugiat sapiente labore officia, sequi
        laboriosam id illum eius cupiditate culpa deserunt?
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin: 30px 0;
  margin-top: 50px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background-color: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;
  text-transform: uppercase;

  &:hover {
    background-color: rgb(198, 198, 198);
  }
`;

const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);

  &:hover {
    color: rgb(0 0 0);
  }
`;

const AddButton = styled.button`
  width: 44px;
  height: 44px;
  margin-right: 16px;
  font-size: 30px;
  color: rgb(249, 249, 249);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 2px solid rgb(249, 249, 249);
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
`;

const GroupWatchButton = styled(AddButton)`
  background-color: rgba(0, 0, 0, 0.8);
`;

const SubTitle = styled.h5`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.p`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 760px;
`;
