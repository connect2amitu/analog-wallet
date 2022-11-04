import styled from "styled-components"
import { Theme } from "./themes";

const Button = ({ label = "Default Text", className = "", onClick = () => { } }) => <button className={className} onClick={onClick}>{label}</button>

export default styled(Button)(({ theme }: { theme: Theme }) => `
  background: ${theme.buttonBackground};
  cursor: pointer;
  display: block;
  width: 100%;
  height: 48px;
  box-sizing: border-box;
  border: none;
  border-radius: ${theme.borderRadius};
  color: ${theme.buttonTextColor};
  font-size: 15px;
  text-align: center;
`);
