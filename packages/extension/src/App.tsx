import React from "react";
import Button from "@analog/extension-ui/src/Button"
import { TEST } from "@analog/extension-ui/src/shared/constants"

function App() {
  return (
    <div className="App">
      <h1>extension</h1>
      <Button label="Submit button" />
      <br />
      {TEST}
    </div>
  );
}

export default App;
