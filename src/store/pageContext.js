import React, { useState } from "react";

const PageContext = React.createContext({
  activePageType: 1,
  onPageChange: () => {},
});

export const PageContextProvider = ({ children }) => {
  const [activePageType, setActivePageType] = useState(1);

  const onPageChange = (type) => {
    setActivePageType(type);
  };

  return (
    <PageContext.Provider
      value={{
        activePageType: activePageType,
        onLogout: onPageChange,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};

export default PageContext;
