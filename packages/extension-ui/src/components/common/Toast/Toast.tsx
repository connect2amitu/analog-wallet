
import { ThemeProps } from '@analog/extension-ui/types';
import React from 'react';
import styled from 'styled-components';

interface Props {
  content: React.ReactChild;
  className?: string;
}

function Toast({ className, content }: Props): React.ReactElement<Props> {
  return (
    <div className={className}>
      <span>{content}</span>
    </div>
  );
}

export default styled(Toast) <{ visible: boolean }>`
  position: fixed;
  display: ${({ visible }): string => visible ? 'block' : 'none'};
  text-align: center;
  vertical-align: middle;
  line-height: 7px;
  top: 69px;
  left: calc(50% - 50px);
  background: #7C7C7C;
  color: #0E0A0A;
  padding: 12px;
  border-radius: 40px;
  && {
    margin: auto;
    border-radius: 25px;
    background: ${({ theme }: ThemeProps): string => theme.highlightedAreaBackground};
  }
`;
