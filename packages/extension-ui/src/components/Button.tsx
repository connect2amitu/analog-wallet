import styled from "styled-components"


const CustomButton = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props: { primary: any; }) => props.primary ? "palevioletred" : "white"};
  color: ${(props: { primary: any; }) => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = ({ label = "Default Text" }) => {
  return (
    <CustomButton primary>{label}</CustomButton>
  )
}

export default Button