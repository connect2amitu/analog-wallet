import React from 'react'
import styled from 'styled-components'

import ActionButtons from './ActionButtons'
import Balance from './Balance'
import WalletSelector from './WalletSelector'


interface Props {
  className?: string;
}

const ActionBlock = ({ className }: Props) => {
  return (
    <div className={className}>
      {/* show balance */}
      <Balance />

      {/* wallet change and open wallet drawer */}
      <WalletSelector />

      {/* send recieve button */}
      <ActionButtons />
    </div>
  )
}

export default styled(ActionBlock)`
  margin-top: 6px;
`