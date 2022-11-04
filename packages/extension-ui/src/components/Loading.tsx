import styled from "styled-components";

import Logo from '../assets/images/logo.png';

const Loading = ({ className, text = "Loading..." }: { className?: string; text?: string }) => <div className={className}>
  <div>
    <img src={Logo} alt="logo" />
  </div>
  <div>
    <h1>{text}</h1>
  </div>
</div>


const LoadingComponent = styled(Loading)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img{
    /* animation: bounce 3s infinite alternate; */

    @keyframes bounce {
      0%   { transform: scale(1,1)      translateY(0); }
      10%  { transform: scale(1.1,.9)   translateY(0); }
      30%  { transform: scale(.9,1.1)   translateY(-50px); }
      50%  { transform: scale(1.05,.95) translateY(0); }
      57%  { transform: scale(1,1)      translateY(-7px); }
      64%  { transform: scale(1,1)      translateY(0); }
      100% { transform: scale(1,1)      translateY(0); }
}
  }
`;


export default LoadingComponent