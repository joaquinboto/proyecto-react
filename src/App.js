import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import {SubMenu} from './components/SubMenu';

function App() {
  return (
    
    <BrowserRouter>
      <NavBar />
      <SubMenu/>
    <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path=':idCategory' element={<ItemListContainer/>} />
    </Routes>
    </BrowserRouter>
    
  );
}



export default App;
