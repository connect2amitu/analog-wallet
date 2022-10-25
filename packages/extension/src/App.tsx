import React from "react";
import Button from "@analog/extension-ui/src/components/Button"
import Heading from "@analog/extension-ui/src/components/Heading"
import { TEST } from "@analog/extension-ui/src/shared/constants"

function App() {
  return (
    <div className="App">
      <Heading text="Analog Extension 2.0" />
      <Button label="Submit button" />
      <br />
      {TEST}
    </div>
  );
}

export default App;
