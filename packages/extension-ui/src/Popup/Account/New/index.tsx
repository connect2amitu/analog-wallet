
import { ActionContext, Container, Header, Loader, LoadingContainer, Tabs } from '../../../components';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import SecretRecoveryPhrase from '../SecretRecoveryPhrase';
import VerifyPhrase from '../VerifyPhrase';
import CreatePassword from '../CreatePassword';
import YouAreAllDone from './YouAreAllDone';

interface Props {
  className?: string;
}

function CreateAccount({ className }: Props): React.ReactElement {
  const onAction = useContext(ActionContext);
  const [isBusy, setIsBusy] = useState(false);
  const [step, setStep] = useState<number>(1);
  const [seed, setSeed] = useState<null | string>(null);
  const isFirefox = window.localStorage.getItem('browserInfo') === 'Firefox';
  const isLinux = window.localStorage.getItem('osInfo') === 'Linux';

  if (isFirefox || isLinux) {
    window.localStorage.setItem('popupNavigation', '');
  }

  useEffect((): void => {
    const lastStep = Number(localStorage.getItem("step")) || 1;
    setStep(lastStep)
    setSeed("physical undo offer dumb hawk fruit harsh main poem bounce ginger owner")
  }, []);

  useEffect((): void => {
    localStorage.setItem("step", String(step))
  }, [step]);

  const onCreate = useCallback(
    (): void => {
      // this should always be the case
      setIsBusy(true);
      setTimeout(() => {
        setIsBusy(false);
        window.localStorage.setItem('popupNavigation', '/');
        localStorage.setItem("step", "0")
        onAction('/');
      }, 2000);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [onAction]
  );

  const onNextStep = () => {
    setStep((step) => step + 1)
  }

  const onPreviousStep = () => {
    if (step >= 2) {
      setStep((step) => step >= 2 ? step - 1 : step)
    } else {
      onAction('/');
    }
  }

  const RenderComponent = () => {
    switch (step) {
      case 1:
        return <SecretRecoveryPhrase onChange={onNextStep} />
      case 2:
        return <VerifyPhrase onChange={onNextStep} />
      case 3:
        return <CreatePassword onChange={onNextStep} />
      case 4:
        return <YouAreAllDone onChange={onCreate} />
      default:
        return <></>
    }
  }

  return (
    <Container className={className}>
      {isBusy ?
        <Loader full={true} show={isBusy} height={65} width={65} /> : <>
          <Header title={<Tabs limit={3} value={step} />} onBack={onPreviousStep} />
          <RenderComponent />
        </>
      }
    </Container>
  );
}

export default styled(CreateAccount)`
  padding:32px;
`;
