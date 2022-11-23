import React, { useState } from 'react'
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { cloneDeep, size, some } from 'lodash';

import { Button, Dialog, SearchBox } from '../../components';
import AssetsCard from './AssetsCard';
import { ASSET_LIST } from '../../shared/constants';

import BackIcon from "../../assets/icons/back.svg";
import { getLogoByNetworkKey } from '../../shared/functions';


const AddAssetDrawer = styled.div<{ show: boolean }>`
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
    padding: 24px 16px;
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

const AssetDrawer = ({ open, onClose }: { open: boolean, onClose: () => void }) => {
  const [assets, setAssets] = useState(ASSET_LIST)
  const [search, setSearch] = useState("");

  const { t } = useTranslation();

  const onSearch = (value: string) => {
    let _assets = ASSET_LIST;

    if (value) {
      _assets = ASSET_LIST.filter(assets => assets.title.toLowerCase().includes(value.toLowerCase()))
    }

    setAssets(_assets)
    setSearch(value)
  }

  const onSelectAsset = (value: boolean, index: number) => {
    const _assets = cloneDeep(assets)
    _assets[index].checked = value

    setAssets(_assets)
  }

  const showSaveBtn = () => {
    return some(assets, ['checked', true])
  }

  const onSave = () => {
    onClose()
  }

  return (
    <div>
      <Dialog fullscreen={true} open={open} onClose={onClose}>
        <AddAssetDrawer show={true}>
          <Heading>
            <BackButton onClick={onClose}>
              <img src={BackIcon} alt="close-icon" height={20} width={20} />
            </BackButton>
            <Title>{t("Add Assets")}</Title>
          </Heading>

          <Container>

            <div className='search-container'>
              <SearchBox placeholder='Search...' name='search' value={search} onChange={onSearch} />
            </div>
            <div className="asset-list">
              {
                size(assets) > 0 ? assets.map(({ amount, checked, title, icon, unit }, index) =>
                  <AssetsCard
                    search={search}
                    amount={amount}
                    checked={checked}
                    title={title}
                    icon={icon}
                    unit={unit}
                    onSelect={(val: boolean) => onSelectAsset(val, index)}
                  />) : <div>NO Assets</div>
              }
            </div>

            {showSaveBtn() && <div className="save-btn">
              <Button onClick={onSave}>Save</Button>
            </div>}
          </Container>
        </AddAssetDrawer>
      </Dialog>
    </div>
  )
}

export default AssetDrawer