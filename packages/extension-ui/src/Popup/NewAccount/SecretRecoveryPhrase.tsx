import React, { useState } from 'react'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { Button, Checkbox } from '../../components'

import DownloadIcon from "../../assets/icons/download-gradient.svg";
import CopyIcon from "../../assets/icons/copy-gradient.svg";
import { useToast } from '../../components/toast/ToastProvider';

interface Props {
  className?: string;
  onChange?: () => void | Promise<void | boolean>;
}

const Chip = styled.div`
background: #FFFFFF;
box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.1);
border-radius: 8px;
padding: 6px 9.9px;
flex: 1 1 30%;
cursor: pointer;

span{
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #9A97A6;
}

p{
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: #0F0040;
  margin-left:4px;
  margin: 0;
  display: inline-block;
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

const Image = styled.img`
  width: ${(props: any) => (props.width ? `${props.width}px` : '19.64px')};
  height: ${(props: any) => (props.height ? `${props.height}px` : '19.64px')};
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  margin-top: 18px;
`

const Phrase = ({ className, index, label, onClick }: { className?: string, index: number, label: string, onClick: () => void }) =>
  <Chip className={className} onClick={onClick}>
    <span> {index}. </span> <p> {label} </p>
  </Chip>


const SecretRecoveryPhrase = ({ onChange, className }: Props) => {

  const { t } = useTranslation();
  const { show } = useToast()

  const [agree, setAgree] = useState(false);
  const mnemonic = "physical undo offer dumb hawk fruit harsh main poem bounce ginger owner"

  const onCopyHandler = () => {
    navigator.clipboard.writeText(mnemonic);
    show("Copied!")
  }

  const onDownloadHandler = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(mnemonic);
    const fileName = `mnemonic.txt`;
    const downloadAnchorNode = document.createElement('a');

    if (downloadAnchorNode) {
      downloadAnchorNode.setAttribute('href', dataStr);
      downloadAnchorNode.setAttribute('download', fileName);
      document.body.appendChild(downloadAnchorNode); // required for firefox

      setTimeout(() => {
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
        show("Downloaded!")
      }, 1000);
    }
  };

  return (
    <div className={className}>

      <PageHeading>
        <h1>{t("Secret recovery phrase")}</h1>
        <p>{t("This phrase is the ONLY way to recover your wallet. Do NOT share it with anyone!")}</p>
      </PageHeading>

      <Container>
        {mnemonic.split(" ").map((phrase, index) =>
          <Phrase key={index} index={index + 1} label={phrase} onClick={() => {
            console.info('selected phrase=>', index);
          }} />
        )}

      </Container>

      <div className='action-row'>

        <div className='item' onClick={onCopyHandler}>
          <Image src={CopyIcon} alt="cross-icon" height={19} width={19} />
          <span className='text'>{t("Copy to clipboard")}</span>
        </div>

        <div className='item' onClick={onDownloadHandler}>
          <Image src={DownloadIcon} alt="cross-icon" height={19} width={19} />
          <span className='text'>{t("Download secret phrase")}</span>
        </div>


        <div className='item'>
          <Checkbox name="acceptTerms" value={agree} label="" onChange={setAgree} />
          <span className='agree-text'>
            {t("I understand that if I lose my recovery phrase, I’ll lose all of the crypto in my wallet")}
          </span>
        </div>
      </div>

      <Button className='continue-btn' isDisabled={!agree} onClick={onChange}> {t("Continue")}</Button>

    </div >
  )
}



export default styled(SecretRecoveryPhrase)`
  .action-row{
    margin-top: 24px;

    .item{
      margin-top: 6px;
      display: flex;
      cursor: pointer;
      .text{
        margin-left: 8px;
        font-size: 14px;
        line-height: 20px;
        background: linear-gradient(89.78deg, #2406E2 0.19%, #7B35EE 99.81%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      .agree-text{
        margin-left: 8px;
        font-size: 14px;
        line-height: 20px;
        color: #746B92;
      }
    }
  }

  .continue-btn{
    margin-top: 18px;
  }
`