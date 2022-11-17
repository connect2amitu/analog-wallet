import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { chunk, cloneDeep, shuffle } from 'lodash';

import { Button } from '../../components'
import classNames from 'classnames';

interface Props {
  className?: string;
  onChange?: () => void | Promise<void | boolean>;
}

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
  text-align: center;
  color: #746B92;
}
`

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 18px;

  .even {
    width: 100%;
    display: flex;
    margin-left: 53px;
    justify-content: space-around;
    margin-bottom:24px;
  }

  .odd {
    width: 100%;
    display: flex;
    margin-right: 53px;
    justify-content: space-around;
    margin-bottom:24px;
  }

  .odd:last-of-type {
  margin-bottom: 0;
}
`

const Chip = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.1);
border-radius: 8px;
padding: 6px 16px;
cursor: pointer;
height: 29px;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.3s;

span{
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #9A97A6;
}

p{
  line-height: 20px;
  color: #0F0040;
  margin-left:4px;
  margin: 0;
  display: inline-block;
  font-weight: 500;
  font-size: 16px;
}

&.valid{
  background: linear-gradient(89.78deg, #2406E2 0.19%, #7B35EE 99.81%);
  p{
    color: #FFFFFF;
  }
  position: relative;
  ::after{
    content: attr(data-content);
    position: absolute;
    height: 20px;
    width: 20px;
    background: #FF8B1F;
    box-shadow: 0px -4px 30px rgb(15 0 64 / 10%);
    border-radius: 10px;
    width: 50px;
    height: 20px;
    top: -12px;
    color: #fff;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
  }
}
&.invalid{
  background: rgba(223, 42, 30, 0.15);
  position: relative;
  ::after{
    content: "Wrong";
    position: absolute;
    height: 20px;
    width: 20px;
    background: #DF2A1E;
    box-shadow: 0px -4px 30px rgb(15 0 64 / 10%);
    border-radius: 10px;
    width: 50px;
    height: 20px;
    top: -12px;
    color: #fff;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
  }
}
`

const Phrase = ({ valid = false, invalid = false, label, tooltip, onClick }: { tooltip: string, label: string, invalid: boolean, valid?: boolean, onClick: () => void }) => {
  return <Chip className={classNames({ valid: valid, invalid: invalid })} data-content={tooltip} onClick={onClick}>
    <p> {label} </p>
  </Chip>
}

const VerifyPhrase = ({ onChange, className }: Props) => {
  const [selectedMnemonic, setSelectedMnemonic] = useState<string[]>([])
  const [selectedShuffledMnemonic, setSelectedShuffledMnemonic] = useState<string[]>([])
  const [validMnemonic, setValidMnemonic] = useState<string[]>([])
  const [inValidMnemonic, setInValidMnemonic] = useState<string[]>([])

  const { t } = useTranslation();

  useEffect(() => {
    const mnemonic = "physical undo offer dumb hawk fruit harsh main poem bounce ginger owner";
    const mnemonicList: string[] = mnemonic.split(" ")
    const mnemonicShuffleArray = shuffle(mnemonicList);

    setValidMnemonic([mnemonicList[0], mnemonicList.reverse()[0]]);
    setSelectedShuffledMnemonic(mnemonicShuffleArray);
  }, [])

  useEffect(() => {
    setTimeout(() => {

    }, 1000)
  }, [inValidMnemonic])



  const selectMnemonic = (word: string) => {
    // prevent chip selection after 2 valid mnemonic word selected
    if (selectedMnemonic.length >= 2) return;

    const clonedInValidMnemonic = cloneDeep(inValidMnemonic);

    if (validMnemonic.includes(word)) {
      const _selectedMnemonic: string[] = cloneDeep(selectedMnemonic)
      if (!_selectedMnemonic.includes(word)) {
        _selectedMnemonic.push(word)
        setSelectedMnemonic(_selectedMnemonic)
        clonedInValidMnemonic.pop();
      }
    } else {
      clonedInValidMnemonic.pop();
      clonedInValidMnemonic.push(word)
    }
    setInValidMnemonic(clonedInValidMnemonic)
  }

  return (
    <div className={className}>
      <PageHeading>
        <h1>{t("You saved it, right?")}</h1>
        <p>{t("Verify that you saved your secret recovery phrase by clicking on the first (1st) then last (12th) word.")}</p>
      </PageHeading>

      <Container>
        {chunk(selectedShuffledMnemonic, 3).map((mnemonicItem, index) =>
          <div className={index % 2 ? "odd" : "even"}>
            {mnemonicItem.map((word, index) =>
              <Phrase key={index} tooltip={selectedMnemonic[0] === word ? "First" : "Last"} valid={selectedMnemonic.includes(word)} invalid={inValidMnemonic.includes(word)} label={word} onClick={() => selectMnemonic(word)} />
            )}
          </div>
        )}

      </Container>

      <Button isDisabled={selectedMnemonic.length !== 2} className='continue-btn' onClick={onChange}> {t("Continue")}</Button>
    </div>
  )
}

export default styled(VerifyPhrase)`
.continue-btn{
  margin-top: 32px;
}
`