import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames';

interface Props {
  className?: string;
  text: string | React.ReactNode;
  onClick?: () => void | undefined;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info"
}

const Alert = ({ className = "", text, color = "primary", onClick }: Props) => {
  return (
    <div className={classNames({
      [className]: true,
      [color]: true
    })} onClick={onClick}><div>{text}</div></div>
  )
}

export default styled(Alert)(({ onClick }: Props) => `
width: 100%;
box-shadow: 0px 4px 30px rgba(15, 0, 64, 0.1);
border-radius: 12px;
padding: 10px 12px;
text-align: left;
cursor: ${onClick ? "pointer" : "default"};

&.primary {
  color: #004085;
  background-color: #cce5ff;
}

&.secondary {
  color: #383d41;
  background-color: #e2e3e5;
}

&.success {
  color: #11bc89;
  background: #def6f0;
}

&.danger {
  color: #DF2A1E;
  background: rgba(223, 42, 30, 0.15);
}

&.warning {
  color: #856404;
  background-color: #fff3cd;
}

&.info {
  color: #0c5460;
  background-color: #d1ecf1;
}


div{
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
}
`)