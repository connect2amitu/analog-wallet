import { useReducer } from "react";

interface State {
  isWelcomeDone: boolean
}

const reducer = (state: State, action: any) => { return { ...state, ...action } }

const initialArgs = { count: 0 };

const useAction = () => {
  const [state, setState] = useReducer(reducer, initialArgs);

  const onAction = async (to?: string) => {

    if (to) {
      window.localStorage.setItem('popupNavigation', to);
      window.location.hash = to;
    }

    setState({
      ...state,
      count: state.count + 1
    })
  }

  return { onAction, ...state };
};

export default useAction;
