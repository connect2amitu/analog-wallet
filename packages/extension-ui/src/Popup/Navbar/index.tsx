import { useState } from "react";
import styled from "styled-components";

import { Header, Sidebar, Theme } from "../../components";

import HamburgerIcon from "../../assets/icons/hamburger.svg";
import ActivityIcon from "../../assets/icons/activity.svg";
import BackIcon from "../../assets/icons/back.svg";
import NoActivityIcon from "../../assets/icons/no-activity.svg";

interface ThemeProps {
  theme: Theme;
}

interface Props {
  className?: string;
}

const NavBar = (props: Props) => {

  const [openActivity, setOpenActivity] = useState(false)
  const [openMenubar, setOpenMenubar] = useState(false)
  const { className } = props;

  const onActivityHandler = () => {
    setOpenActivity(true)
    setOpenMenubar(false)
  }

  const onMenubarHandler = () => {
    setOpenMenubar(true)
    setOpenActivity(false)
  }

  return (
    <div className={className}>
      <div className="container">
        <img
          onClick={() => onMenubarHandler()}
          className='icon'
          src={HamburgerIcon}
          height={20}
          width={20}
          alt="icon"
        />
        <img
          onClick={() => onActivityHandler()}
          className='icon'
          src={ActivityIcon}
          height={20}
          width={20}
          alt="icon"
        />
      </div>
      <div>

        <Sidebar open={openMenubar}>
          <Header title="Settings" subTitle="" onBack={() => { setOpenMenubar(false) }} />

        </Sidebar>

        <Sidebar open={openActivity}>
          <Header title="Activity" subTitle="" onBack={() => { setOpenActivity(false) }} />
          <div className="activity-container">
            <img

              onClick={() => setOpenMenubar(false)}
              className='no-activity-icon'
              src={NoActivityIcon}
              height={20}
              width={20}
              alt="icon"
            />
            <h1 className="title">No activity yet</h1>
            <span className="sub-title">Your activities will show up here </span>
          </div>
        </Sidebar>
      </div>
    </div>
  );
};

export default styled(NavBar)(({ theme }: ThemeProps) => `
height: 42px;
.container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.activity-container{
  height: calc(100vh - 80px);
  display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
.no-activity-icon{
  width: 165px;
height: 164.61px;
}
    .title{
      font-weight: 700;
font-size: 24px;
line-height: 36px;
text-align: center;
color: #0F0040;
margin-top: 17px;
margin-bottom: 0;
    }
    .sub-title{
      font-weight: 400;
font-size: 14px;
line-height: 20px;
text-align: center;
color: #746B92;
margin-top: 6px;

    }
}
`)