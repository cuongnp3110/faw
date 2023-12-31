import { Routes, Route } from "react-router-dom";
import Form from "./Pages/Form/Form";
import DataList from "./Pages/DataList/DataList";
import Login from "./Pages/Login/Login";

import AuthContextProvider from "./Pages/Components/contexts/auth.context";

function App() {
  return (
    <div style={{ fontFamily: "Helvetica" }}>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/login" element={<Login />} />
          <Route path="/datalist" element={<DataList />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
