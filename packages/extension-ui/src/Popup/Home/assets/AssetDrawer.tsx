import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import { cloneDeep, size, some } from 'lodash';

import { Button, Dialog, SearchBox } from '../../../components';
import Drawer from '../../../partials/DrawerHeader';
import AssetsCard from './AssetsCard';
import { ASSET_LIST } from '../../../shared/constants';

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
      <Drawer onBack={onClose} title={t("Add Assets")} >
        <div className='search-container'>
          <SearchBox placeholder='Search...' name='search' value={search} onChange={onSearch} onActionClick={() => onSearch("")} />
        </div>
        <div className="asset-list">
          {
            size(assets) > 0 ? assets.map((asset, index) =>
              <AssetsCard
                search={search}
                asset={asset}
                onSelect={(val: boolean) => onSelectAsset(val, index)}
              />) : <div>{t("No Assets")}</div>
          }
        </div>

        {showSaveBtn() && <div className="save-btn">
          <Button onClick={onSave}>{t("Save")}</Button>
        </div>}
      </Drawer>
    </Dialog>
  )
}

export default AssetDrawer