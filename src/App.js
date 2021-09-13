import React from "react";
import AppRoutes from "./pages/App.route";
import {Authentication} from"./context/user.context";

function App() {
  return (
    <Authentication>
       <AppRoutes />
    </Authentication>  
  );
}

export default App;
