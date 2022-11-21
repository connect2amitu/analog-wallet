import React, { useState } from 'react'
import styled from 'styled-components'
import Highlighter from "react-highlight-words";

import { Dialog, SearchBox } from '../../components';


import AddIcon from "../../assets/icons/add.svg";
import BackIcon from "../../assets/icons/back.svg";


const Image = styled.img`
  width: ${(props: any) => (props.width ? `${props.width}px` : '19.64px')};
  height: ${(props: any) => (props.height ? `${props.height}px` : '19.64px')};
`;

const AddAssetDrawer = styled.div<{ show: boolean }>`
  background: #ffffff;
  height: 100vh;
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
  margin-top: 11px;
  max-height: 250px;
  min-height: 160px;
  overflow: auto;
  padding: 8px 16px;

  .text{
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #0F0040;
  }

  .asset-list{
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    align-items: self-start;
  }
  .unhighlight {
      background: transparent;
      color: #0F0040;
      font-weight: normal;
    }
    .highlight{
      background: transparent;
      color: #0F0040;
      font-weight: bolder;
    }
`;

const BackButton = styled.div`
  position: absolute;
  left: 16px;
  top: 22px;
  cursor: pointer;
`;

const Footer = ({ className }: { className?: string }) => {

  const [openDrawer, setOpenDrawer] = useState(false);
  const [search, setSearch] = useState("")

  const ASSET_LIST = ["Ethereum", "Bitcoin", "Polkadot"]


  const onSearch = (value: string) => {
    console.info('value=>', value);
    setSearch(value)
  }

  return (
    <div className={className}>
      <div className='add-asset-menu'>
        <div className='icon' onClick={() => setOpenDrawer(true)}>
          <Image src={AddIcon} alt="add-asset" height={44} width={44} />
        </div>
        <span className='menu-text'>ADD ASSETS</span>
      </div>

      <Dialog fullscreen={true} open={openDrawer} onClose={() => {
        setOpenDrawer(false)
      }}>
        <AddAssetDrawer show={true}>
          <Heading>
            <BackButton onClick={() => setOpenDrawer(false)}>
              <Image src={BackIcon} alt="close-icon" height={12} width={12} />
            </BackButton>
            <Title>Add Assets</Title>
          </Heading>

          <Container>
            <SearchBox placeholder='Search...' name='search' onChange={onSearch} type='text' />

            <div className="asset-list">

              {
                ASSET_LIST.map((asset, index) => <h1>
                  <Highlighter
                    className='text'
                    highlightClassName="highlight"
                    unhighlightClassName="unhighlight"
                    searchWords={search.split(" ")}
                    autoEscape={true}
                    textToHighlight={asset}
                  />
                </h1>)
              }
            </div>
          </Container>
        </AddAssetDrawer>
      </Dialog>

    </div>
  )
}

export default styled(Footer)`
    height: 44px;
    background: red;
    width: 100%;
    left: 0;
    position: absolute;
    bottom: 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(25.5px);

    .add-asset-menu{
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
     

      .icon{
        position: absolute;
        background: linear-gradient(89.78deg, #2406E2 0.19%, #7B35EE 99.81%);
        box-shadow: 0px 4px 9px rgba(51, 14, 228, 0.15), inset 2px 5px 4px rgba(33, 0, 181, 0.18);
        border-radius: 50%;
        height: 44px;
        width: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: auto;
        left: 50%;
        top: -20px;
        transform: translateX(-50%);
        border: 5px solid #ffffff;
        cursor: pointer;

      }
      .menu-text{
        font-weight: 500;
        font-size: 8px;
        line-height: 15px;
        text-align: center;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #0F0040;
        margin-top: 25px;
      }
      
      img{
        
        height: 27px;
        width: 27px;
      }
    }
  
`