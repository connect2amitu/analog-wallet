
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
  top: 13px;
  left: calc(50% - 38px);
  background: #2CC99A;
  color: #fff;
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 6px;
  margin: auto;
  box-shadow: 0 0 20px 6px rgb(15 0 64 / 10%);
  span{
    color: #fff;
    font-size: 14px;
  }
`;
