import { cloneDeep, some } from 'lodash';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Button, Checkbox, Loader } from '../../../components';
import { toShortAddress } from '../../../shared/functions';

interface Props {
  className?: string,
  onChange: () => void | Promise<void | boolean>;
}


const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 57px;
  margin-bottom: 57px;
`

const AccountList = styled.div`
  margin-top: 17px;
  background: #FFFFFF;
  box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.07);
  border-radius: 12px;
  padding: 16px;
`

const AccountItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;

  &:first-of-type{
    margin-top: 0;
  }

  .left{
    display: flex;
    align-items: center;
    .address{
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      color: #0F0040;
    }
  }

  .right{
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #746B92;
  }
`

const PageHeading = styled.div`
margin-top: 10px;
h1{
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #0F0040;
}

p{
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  margin-top: 2px;
  text-align: center;
  color: #746B92;
}
`

const DUMMY_ACCOUNTS = [
  { address: "5Hdy7wFP4CU9YJW5vNtSGreZ33Mns9oDCbrC6wREu5GRcY9K", type: "SOL", amount: 0 },
  { address: "5D2psEqbVLX2oSHk3fXMpAh9Qz4aBoYwUNuc6VdA9bKxB8aV", type: "SOL", amount: 0 },
  { address: "5DLqWkL83ypxWcAMMDwb5ney8y6PXn4dFJocTM7ZXXZNxXRK", type: "SOL", amount: 0 },
  { address: "5FcTVMyXNcfzTjSbtYCk5vjbrMmqZYH5d867f86Bnc7xd5ZM", type: "SOL", amount: 0 },
  { address: "5DWgiYkBSJwhfbbEv71NVrpNYVqaVrqpwBYzmM817Fzbd16L", type: "SOL", amount: 0 },
]

const ImportAccounts = ({ onChange, className }: Props) => {
  const { t } = useTranslation();

  const [isBusy, setIsBusy] = useState(false);
  const [accounts, setAccounts] = useState<{ address: string; type: string; amount: number, selected?: boolean }[]>([]);


  useEffect(() => {
    setIsBusy(true);

    setTimeout(() => {
      setIsBusy(false)
      setAccounts(DUMMY_ACCOUNTS)
    }, 200);
  }, [])


  const onImportAccount = () => {
    onChange()
  }

  const onAccountSelect = (value: boolean, index: number) => {
    const _accounts = cloneDeep(accounts)
    _accounts[index].selected = value

    setAccounts(_accounts)
  }

  console.info('countBy(accounts, (o) => o.selected).true=>',);
  return (
    <div className={className}>
      <PageHeading>
        <h1>{t("Import Accounts")}</h1>
        <p>{t("Choose wallet accounts to import")}</p>
      </PageHeading>

      {!isBusy && accounts.length > 0 &&
        <AccountList>
          {accounts.map(({ address, type, amount, selected }, index) =>
            <AccountItem key={index}>
              <div className='left'>
                <div className='checkbox'><Checkbox name={`account-${index}`} label="" value={selected} onChange={(value) => onAccountSelect(value, index)} /></div>
                <div className='address'><span>{toShortAddress(address, 4)}</span></div>
              </div>
              <div className='right'>
                <span>{`${amount} ${type}`}</span>
              </div>
            </AccountItem>
          )}
        </AccountList>}

      {isBusy && <Container>
        <Loader show={isBusy} height={65} width={65} />
      </Container>}


      <Button isDisabled={Boolean(isBusy || !some(accounts, 'selected'))} className='continue-btn' onClick={onImportAccount}> {t("Import Selected Accounts")}</Button>

    </div>
  )
}

export default styled(ImportAccounts)`
  .continue-btn{
    margin-top: 24px;
  }
`