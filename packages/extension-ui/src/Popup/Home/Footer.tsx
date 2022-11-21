import React from 'react'
import styled from 'styled-components'

const Footer = ({ className }: { className?: string }) => {
  return (
    <div className={className}>Footer</div>
  )
}

export default styled(Footer)`
    height: 44px;
    background: red;
    width: 100%;
    left: 0;
    position: absolute;
    bottom: 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(25.5px);
  
`