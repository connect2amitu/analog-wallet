import React from 'react'
import styled from 'styled-components'

interface Props {
  className?: string;
}

const Balance = ({ className }: Props) => {
  return (
    <div className={className}>
      <span className='balance-amount'>
        $10,005.38
      </span>
    </div>
  )
}

export default styled(Balance)`
justify-content: center;
display: flex;
.balance-amount{
  font-weight: 700;
  font-size: 36px;
  line-height: 50px;
  color: #0F0040;
}

  
`