import LoginPage from "../components/LoginPage";
import RegistrationPage from "../components/RegistrationPage";
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
