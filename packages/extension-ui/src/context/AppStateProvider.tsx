import React, { useEffect, useState, useRef } from "react";

import AppContext from "./AppContext"

const AppStateProvider = ({ children, containers = {} }: {
  children: React.ReactNode; containers: any
}) => {
  const [isInitialised, setInitialised] = useState(false);
  const mapOfInstances = useRef<any>({});

  const getter = (id: any) => {
    return mapOfInstances.current[id] || {};
  };

  Object.keys(containers).forEach((k) => {
    mapOfInstances.current[k] = containers[k](getter);
  });

  useEffect(() => {
    setInitialised(true);
  }, []);

  return (
    <AppContext.Provider value={[mapOfInstances.current]}>
      {isInitialised && children}
    </AppContext.Provider>
  );
};

export default AppStateProvider;
