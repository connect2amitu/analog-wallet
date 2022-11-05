import { useReducer } from "react";

interface State {
  count: number
}

const reducer = (state: State, action: any) => { return { ...state, ...action } }

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
