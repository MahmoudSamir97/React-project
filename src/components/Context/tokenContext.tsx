import React, { createContext, useState } from "react";

export const tokenContext = createContext({});
function TokenContextProvider(props: any) {
  let [token, setToken] = useState(null);
  return (
    <tokenContext.Provider value={{ token, setToken }}>
      {props.children}
    </tokenContext.Provider>
  );
}

export default TokenContextProvider;
