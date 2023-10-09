import { Routes, Route } from 'react-router-dom';
import Form from './Pages/Form/Form';
import DataList from './Pages/DataList/DataList';
import WheelSpinner from './Pages/WheelSpinner/WheelSpinner';

function App() {
  return (
    <div style={{ fontFamily: 'Helvetica' }}>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/datalist" element={<DataList />} />
      <Route path="/wheelspinner" element={<WheelSpinner />} />
    </Routes>
    </div>
    
  );
}

export default App;
