import React from 'react'
import styled from 'styled-components'

const Container = ({ className, children }: { className?: string; children: any }) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default styled(Container)`
  position: relative;
  padding: 16px;
  height: 100vh;
`