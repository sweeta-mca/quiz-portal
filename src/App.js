import React from "react";
import AppRoutes from "./pages/App.route";
import {Authentication} from"./context/user.context";
import {LoaderProvider} from "./context/loader.context"

function App() {
  return (
    <LoaderProvider >
      <Authentication>
        <AppRoutes />
      </Authentication> 
    </LoaderProvider>
     
  );
}

export default App;
