import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {BrowserRouter} from "react-router-dom";
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {

  return (
      <BrowserRouter>
          <Header />
          <ProtectedRoutes />
      </BrowserRouter>
  );
}

export default App;
