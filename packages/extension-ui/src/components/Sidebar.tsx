import React from 'react'
import styled from 'styled-components';
import { ThemeProps } from '../types';

interface Props {
  className?: string;
  open: boolean;
  children: React.ReactNode;
}

const Sidebar = (props: Props) => {
  const { className, open, children } = props;

  return (
    <div className={className}>
      <div className={`sidebar ${open && 'open'}`}>
        <div className='sidebar-wrapper'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default styled(Sidebar)(({ theme }: ThemeProps) => `
  .sidebar{  
    z-index: 1000;
    position: fixed;
    will-change: transform;
    overflow-y: auto;
    transition: transform 0.3s ease;
    will-change: transform;
    transform: translateZ(0) translateX(-100%);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background: rgb(0 0 0 / 19%);
    backdrop-filter: saturate(180%) blur(11px);
    z-index: 9;
    transition: transform .3s ease;


    .sidebar-wrapper{
          position: absolute;
          left: 0px;
          top: 0px;
          width: 100%;
          height: 100vh;
          z-index: 999;
          /* opacity: 0; */
          background: #FFFFFF;
          padding: 15px 17px;
      }

    &.open{
        transform: translateX(0px) translateY(0px);
        .sidebar-wrapper{
          opacity: 1;
          transition: opacity .3s ease-out;
        }
      }
  }
`)