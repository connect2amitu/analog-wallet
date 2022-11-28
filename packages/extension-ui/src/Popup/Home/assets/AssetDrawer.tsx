import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { cloneDeep, size, some } from 'lodash';
import styled from 'styled-components';

import { Button, Dialog, SearchBox } from '../../../components';
import Drawer from '../../../partials/Drawer';
import AssetsCard from './AssetsCard';
import { ASSET_LIST } from '../../../shared/constants';

const AssetContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  align-items: self-start;
  overflow: auto;
  padding: 24px 16px;
  height: calc(100vh - 155px);
`

const SaveButton = styled.div`
  padding: 0 16px;
`
const SearchContainer = styled.div`
  padding: 0px 16px 0;
`

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
    <Dialog fullscreen={true} open={open} onClose={onClose}>
      <Drawer onBack={onClose} title={t("Add Assets")}>
        <SearchContainer>
          <SearchBox placeholder='Search...' name='search' value={search} onChange={onSearch} onActionClick={() => onSearch("")} />
        </SearchContainer>
        <AssetContainer>
          {
            size(assets) > 0 ? assets.map((asset, index) =>
              <AssetsCard
                key={index}
                search={search}
                asset={asset}
                onSelect={(val: boolean) => onSelectAsset(val, index)}
              />) : <div>{t("No Assets")}</div>
          }
        </AssetContainer>

        {showSaveBtn() && <SaveButton>
          <Button onClick={onSave}>{t("Save")}</Button>
        </SaveButton>}
      </Drawer>
    </Dialog>
  )
}

export default AssetDrawer