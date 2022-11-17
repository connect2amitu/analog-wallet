import { useState } from "react";
import { useNavigate } from "react-router";

import Container from "../../components/common/Container";
import { Header, Tabs } from "../../components";
import SecretRecoveryPhrase from "./SecretRecoveryPhrase";
import YouAreAllDone from "./YouAreAllDone";
import CreatePassword from "./CreatePassword";
import VerifyPhrase from "./VerifyPhrase";

const NewAccount = () => {
  const [step, setStep] = useState(1)

  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path)
  }

  const RenderComponent = () => {
    switch (step) {
      case 1:
        return <SecretRecoveryPhrase onChange={() => setStep(prev => prev + 1)} />
      case 2:
        return <VerifyPhrase onChange={() => setStep(prev => prev + 1)} />
      case 3:
        return <CreatePassword onChange={() => setStep(prev => prev + 1)} />
      case 4:
        return <YouAreAllDone onChange={() => {
          goTo("/components")
        }} />
      default:
        return <></>
    }
  }

  const onChangeBackButton = () => {
    if (step === 1) {
      goTo("/")
    } else {
      setStep(prev => prev - 1)
    }
  }

  return (
    <Container>
      <Header title={<Tabs limit={3} value={step} />} onBack={onChangeBackButton} />
      <RenderComponent />
    </Container>
  );
};

export default NewAccount