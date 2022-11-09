import React, { useState } from 'react'
import styled from 'styled-components'

const DropDown = ({ trigger, options, onChange, className }: { className?: string, trigger: any, options: any[], onChange: (opt: any) => void }) => {
  const [show, setShow] = useState(false)

  return (
    <div className={className}>
      <span onClick={() => setShow((prev) => !prev)}>{trigger}</span>
      {show && <div className='menu-list'>
        {
          options.map(opt =>
            <span className='menu' key={opt.name} onClick={() => {
              setShow(false)
              onChange(opt)
            }}>{opt.name}</span>
          )
        }
      </div>}
    </div>
  )
}

export default styled(DropDown)`
position: relative;
.menu-list{
  margin: 0;
  position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 120px;
    background: #43444b;
    top: 55px;
    padding: 10px;
    .menu{
      display: block;
      width: 100%;
      cursor: pointer;
      :hover{
        opacity: .7;
        transition: all .7s;
      }
    }
}
  
`