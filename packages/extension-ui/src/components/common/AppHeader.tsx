import React from 'react'
import styled from 'styled-components'

const AppHeader = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className='app-header'>
        <div className='contents'>
          <img src="https://www.analog.one/wp-content/uploads/2022/01/logo-120x24.png" alt="logo" />
          <div className='profile-menu'>
            <svg x="0" y="0" width="32" height="32"><rect x="0" y="0" width="32" height="32" transform="translate(1.203787779538165 -0.327310720631151) rotate(397.4 16 16)" fill="#01828E"></rect><rect x="0" y="0" width="32" height="32" transform="translate(6.249576582399076 -16.94462940837736) rotate(312.8 16 16)" fill="#C81444"></rect><rect x="0" y="0" width="32" height="32" transform="translate(22.2687514845748 3.2296468309632473) rotate(151.8 16 16)" fill="#FB1855"></rect></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default styled(AppHeader)`
.app-header{
  padding: 10px;
  background: #f2f4f617;
  .contents{
    display: flex;
    justify-content: space-between;
    align-items: center;
    .profile-menu{
      border:1px solid #fff;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
  }
  .logo{
    font-size: 22px;
  }
}
`