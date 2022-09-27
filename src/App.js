import React, { useContext } from "react";

import PageContext from "./store/pageContext";
import HomePage from "./pages/HomePage";
import ServerPage from "./pages/ServerPage";

const App = () => {
  const pageCtx = useContext(PageContext);

  return (
    <>
      {pageCtx.activePageType === 1 && <HomePage />}

      {pageCtx.activePageType === 2 && <ServerPage />}
    </>
  );
};

export default App;
