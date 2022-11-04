import React from 'react'
import styled from 'styled-components'

const Container = ({ className, children }: { className?: string; children: any }) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default styled(Container)`
  padding: 5px 10px;
`