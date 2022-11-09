import { ChangeEvent, useState } from "react";

import { Button, Checkbox, Loader, NextStepButton, Tabs, TextBox } from "../../components";
import Container from "../../components/common/Container";
import { toShortAddress } from "../../shared/functions";

import BackIcon from "../../assets/icons/back.svg";
import CopyIcon from "../../assets/icons/copy.svg";
import DownloadIcon from "../../assets/icons/download.svg";
import TwitterIcon from "../../assets/icons/social/twitter.svg";
import DiscordIcon from "../../assets/icons/social/discord.svg";
import Form from "./Form";

const Components = () => {
  const [checked, setChecked] = useState(false)
  const [step, setStep] = useState(0)
  const [val, setVal] = useState<string | ChangeEvent<HTMLInputElement>>("")

  return (
    <div>
      <Container>
        <Button>Primary Button</Button>
        <br />
        <Button inverted={true}>Inverted Button</Button>
        <br />
        <Button isDisabled={true}>Disabled button</Button>
        <br />

        <img
          className='icon'
          height={24}
          src={BackIcon}
          width={24}
          alt="icon"
        />&nbsp;&nbsp;
        <img
          className='icon'
          height={24}
          src={CopyIcon}
          width={24}
          alt="icon"
        />&nbsp;&nbsp;
        <img
          className='icon'
          height={24}
          src={DownloadIcon}
          width={24}
          alt="icon"
        />
        <img
          className='icon'
          height={24}
          src={TwitterIcon}
          width={24}
          alt="icon"
        />&nbsp;&nbsp;
        <img
          className='icon'
          height={24}
          src={DiscordIcon}
          width={24}
          alt="icon"
        />
        <br />
        <Checkbox
          checked={checked}
          label={<>I agree to the <b>Terms of Service</b></>}
          onChange={setChecked}
        />

        <NextStepButton>With next icon button</NextStepButton>
        <br />
        <NextStepButton isDisabled={true}><div style={{ display: "flex", justifyContent: "start" }}>
          <img
            className='icon'
            height={24}
            src={TwitterIcon}
            width={24}
            alt="icon"
          />
          <span style={{ marginLeft: 10 }}>Follow us on Twitter</span>
        </div></NextStepButton>
        <br />
        <NextStepButton isDisabled={true}><div style={{ display: "flex", justifyContent: "start" }}>
          <img
            className='icon'
            height={24}
            src={DiscordIcon}
            width={24}
            alt="icon"
          />
          <span style={{ marginLeft: 10 }}>Follow us on Discord</span>
        </div></NextStepButton>

        Trimmed Address : <span>{toShortAddress("5FntYAhGeqxMf6VmLxYig3XAw64JQTKD9rCpRWACLTeFGThf", 4)}</span>

        <Tabs limit={3} value={step} onChange={(val) => setStep(val)} />
        <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
          <button disabled={step <= 0} onClick={() => setStep(prev => prev - 1)}>Previous</button>
          <button disabled={step >= 3} onClick={() => setStep(prev => prev + 1)}>Next</button>
        </div>

        <br />
        {/* <TextBox onChange={(data) => {
          setVal(data)
        }} type={"text"} id={"textbox"} label={"Public address"} field={{ value: val }} /> */}
        <Form />
        <br />

        <Loader height={40} width={40} />
        <br />
      </Container>
    </div>
  );
};

export default Components