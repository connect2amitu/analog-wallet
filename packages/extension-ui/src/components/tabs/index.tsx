import React from 'react'
import styled from 'styled-components'

import { ThemeProps } from '../../types';

interface Props extends ThemeProps {
  className?: string;
  value: number;
  limit: number;
  children?: React.ReactNode;
  onChange?: (index: number) => void | Promise<void | boolean>;
}


const Tabs = ({ limit, value, className, onChange = () => { } }: Props) => {
  return (
    <div className={className}>
      {
        [...Array(limit)].map((o, index) =>
          <div onClick={() => onChange(index + 1)} key={index} className={`tab${index < value ? " active" : ""}`} />)
      }
    </div>
  )
}

export default styled(Tabs)(({ theme }: Props) => `
display: flex;
justify-content: center;

.tab{
  opacity: 0.1;
  background: ${theme.tabColor};
  border-radius: 10px;
  width: 40px;
  height: 6px;
  margin-left: 12px;
  cursor: pointer;
  &.active{
    opacity: 1;
  }
}
`)