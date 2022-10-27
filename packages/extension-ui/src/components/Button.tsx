import styled from "styled-components"


const CustomButton = styled.button`
  /* Adapt the colors based on primary prop */
  color: ${(props: { primary: any; }) => props.primary ? "white" : "palevioletred"};
  background: linear-gradient(90deg, hsl(255deg 87% 60%) 0%, hsl(278deg 68% 58%) 100%) !important;

  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  border:none;
  cursor: pointer;
  :hover{
    opacity: 0.7;
    transition: all .2s;
  }
`;

const Button = ({ label = "Default Text" }) => {
  return (
    <CustomButton primary>{label}</CustomButton>
  )
}

export default Button