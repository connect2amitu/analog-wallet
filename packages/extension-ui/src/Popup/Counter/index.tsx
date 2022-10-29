import { useTranslation } from "react-i18next";

import NavBar from "../Navbar";
import useAppState from "../../context/useAppState";

const Counter = () => {

  const { t } = useTranslation();
  const { count, increment, decrement } = useAppState('counter');

  return (
    <div>
      <NavBar />
      <h2>{t("Counter")}</h2>
      <button onClick={decrement}>-</button>{count}<button onClick={increment}>+</button>
    </div>
  );
};

export default Counter