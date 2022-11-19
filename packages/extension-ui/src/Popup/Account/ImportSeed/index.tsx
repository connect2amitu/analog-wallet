import { ActionContext, Container, Header, Tabs } from '../../../components'
import React, { useCallback, useContext, useState } from 'react'
import CreatePassword from '../CreatePassword';
import SecretRecoveryPhrase from './SecretRecoveryPhrase';
import YouAreAllDone from '../New/YouAreAllDone';
import ImportAccounts from './ImportAccounts';
import styled from 'styled-components';

const ImportSeed = ({ className }: { className?: string }) => {

  const [step, setStep] = useState<number>(1);
  const onAction = useContext(ActionContext);
  const [isBusy, setIsBusy] = useState(false);



  const onPreviousStep = () => {
    setStep((step) => step >= 2 ? step - 1 : step)
  }

  const onNextStep = () => {
    setStep((step) => step + 1)
  }

  const onImport = useCallback(
    (): void => {
      setIsBusy(false);
      window.localStorage.setItem('popupNavigation', '/');
      onAction('/');
    },
    [onAction]
  );

  const RenderComponent = () => {
    switch (step) {
      case 1:
        return <CreatePassword onChange={onNextStep} />
      case 2:
        return <SecretRecoveryPhrase onChange={onNextStep} />
      case 3:
        return <ImportAccounts onChange={onNextStep} />
      case 4:
        return <YouAreAllDone onChange={onImport} />
      default:
        return <></>
    }
  }


  return (
    <Container className={className}>
      <Header title={<Tabs limit={3} value={step} />} onBack={onPreviousStep} />
      <RenderComponent />
    </Container>
  )
}

export default styled(ImportSeed)`
    padding:32px
`