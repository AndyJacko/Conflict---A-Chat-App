import React, { useState } from "react";

const PageContext = React.createContext({
  activePageType: 1,
  activeServer: 1,
  onPageChange: () => {},
});

export const PageContextProvider = ({ children }) => {
  const [activePageType, setActivePageType] = useState(1);
  const [activeServer, setActiveServer] = useState(1);

  const onPageChange = (id, type) => {
    setActivePageType(type);
    setActiveServer(id);
  };

  return (
    <PageContext.Provider
      value={{
        activePageType: activePageType,
        activeServer: activeServer,
        onPageChange: onPageChange,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
