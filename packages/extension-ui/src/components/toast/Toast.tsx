
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
  background: #FFFFFF;
  color: #0F0040;
  border-radius: 6px;
  padding: 12px;
  margin: auto;
  box-shadow: 0 0 20px 6px rgb(15 0 64 / 10%);
  span{
    color: #333333;
    font-size: 14px;
  }
`;
