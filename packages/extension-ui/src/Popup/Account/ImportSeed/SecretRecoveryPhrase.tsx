import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { cloneDeep, trim } from 'lodash';

import { Button } from '../../../components'

interface Props {
  className?: string;
  onChange?: () => void | Promise<void | boolean>;
}

const Chip = styled.label`
background: #FFFFFF;
box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.1);
border-radius: 8px;
padding: 6px 9.9px;
flex: 1 1 30%;
cursor: pointer;
user-select: none;

display: flex;
align-items: center;

label{
  display: flex;
}

span{
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #9A97A6;
  width: calc(100% - 65px);
}

.textbox{
  width: 100%;
  border: none;
  outline: none;
  padding-left: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #0F0040;
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

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 18px;
`

const Link = styled.p`
  margin-top: 19px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  background: linear-gradient(89.78deg, #2406E2 0.19%, #7B35EE 99.81%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  cursor: pointer;
  user-select: none;
  `

const Phrase = ({ className, index, value, onChange }: { className?: string, index: number, value: string, onChange: (val: string) => void }) =>
  <Chip className={className} htmlFor={`seed-${index}`}>
    <span> {index}. </span> <input autoComplete='off' className='textbox' id={`seed-${index}`} onChange={(e: any) => onChange(e.target.value)} value={value} type={"text"} />
  </Chip >

const VALID_PHRASE_LENGTH = [12, 24]

const SecretRecoveryPhrase = ({ onChange, className }: Props) => {

  const [seedLength, setSeedLength] = useState(12);
  const [words, setWords] = useState<string[]>([]);

  const { t } = useTranslation();

  const changeSeedLength = () => {
    setSeedLength(prev => prev === 12 ? 24 : 12)
  }

  const onChangePhrase = (value: string, index: number) => {
    let _words = cloneDeep(words)
    const splittedWords = value.split(" ");

    if (VALID_PHRASE_LENGTH.includes(splittedWords.length)) {
      _words = splittedWords
    } else {
      _words[index] = trim(value);
    }

    setWords(_words)
  }

  useEffect(() => {
    setWords(Array(seedLength).join(".").split("."))
  }, [seedLength])

  console.info('words=>', words);

  return (
    <div className={className}>

      <PageHeading>
        <h1>{t("Secret recovery phrase")}</h1>
        <p>{t("Import an existing wallet with your 12 or 24-word secret recovery phrase.")}</p>
      </PageHeading>

      <Container>
        {words.map((phrase, index) =>
          <Phrase key={index} index={index + 1} value={trim(phrase)} onChange={(val) => {
            console.info('onChange phrase=>', index, val);
            onChangePhrase(val, index)
          }} />
        )}
      </Container>

      <Link onClick={changeSeedLength}>I have a {seedLength === 12 ? 24 : 12}-word secret recovery.</Link>

      <Button className='continue-btn' onClick={onChange}> {t("Continue")}</Button>
    </div >
  )
}



export default styled(SecretRecoveryPhrase)`
  .continue-btn{
    margin-top: 19px;
  }
`