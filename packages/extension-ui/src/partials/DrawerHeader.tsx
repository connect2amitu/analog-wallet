import React from 'react'
import styled from 'styled-components';

import { getLogoByNetworkKey } from '../shared/functions';

import BackIcon from "../assets/icons/back.svg";

const AddAssetDrawer = styled.div`
  height: 100vh;
  background: ${`url(${getLogoByNetworkKey("background")})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: top;
`;

const Heading = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 14px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #0F0040;
`;

const Container = styled.div`
  max-height: 100vh;
  overflow: auto;

  .text{
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #0F0040;
  }

  .search-container{
    padding: 14px 16px 0;
  }

  .asset-list{
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    align-items: self-start;
    overflow: auto;
    padding: 24px 16px;
    height: calc(100vh - 220px);

  }

  .save-btn{
    padding: 24px 16px;
  }



  .search{
    background: #FFFFFF;
    border: 1px solid rgba(15, 0, 64, 0.08);
    box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.07);
    border-radius: 10px;
  }
 
`;

const BackButton = styled.div`
  position: absolute;
  left: 16px;
  top: 22px;
  cursor: pointer;
`;


const Drawer = ({ title, children, onBack }: any) => {
  return (
    <AddAssetDrawer>
      <Heading>
        <BackButton onClick={onBack}>
          <img src={BackIcon} alt="close-icon" height={20} width={20} />
        </BackButton>
        <Title>{title}</Title>
      </Heading>

      <Container>
        {children}
      </Container>
    </AddAssetDrawer>
  )
}

export default Drawer