import styled from "styled-components";
import { Loader } from ".";

const Loading = ({ className, text = "Loading..." }: { className?: string; text?: string }) => <div className={className}>
  <Loader height={50} width={50} />
</div>


const LoadingComponent = styled(Loading)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export default LoadingComponent