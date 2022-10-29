import { useReducer } from "react";

const reducer = (state: any, action: any) => { return { ...state, ...action } }

const initialArgs = { count: 0 };

const useCounter = () => {
  const [state, setState] = useReducer(reducer, initialArgs);

  const increment = async () => {
    setState({
      ...state,
      count: state.count + 1
    })
  }

  const decrement = async () => {
    setState({
      ...state, count: state.count - 1
    })
  }

  return { increment, decrement, ...state };
};

export default useCounter;
