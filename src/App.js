import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import GamePage from './pages/GamePage/GamePage';
import ImagePage from './pages/ImagePage/ImagePage';
import PreloaderPage from './pages/PreloaderPage/PreloaderPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import CuruselPage from './pages/CuruselPage/CuruselPage';
import OrderPage from './pages/OrderPage/OrderPage';
import MenuToggle from './components/MenuToggle/MenuToggle';
import { useDispatch } from 'react-redux';
import { closeMenu } from './redux/feature/menuSlice';

const App =()=> {

  const dispatch = useDispatch()

  return (

     <BrowserRouter>
        
				<Sidebar/>
        <div onClick={()=>dispatch(closeMenu())}>
          <Routes>
                <Route path='*' element={<HomePage/>}/>
                <Route path='Home/*' element={<HomePage/>}/>	
                <Route path='Game' element={<GamePage/>}/>	
                <Route path='Image' element={<ImagePage/>}/>	
                <Route path='Preloader' element={<PreloaderPage/>}/>	
                <Route path='Settings' element={<SettingsPage/>}/>
                <Route path='Carusel' element={<CuruselPage/>}/>
                <Route path='Order' element={<OrderPage/>}/>
          </Routes>	
        </div>
        <MenuToggle/>
      </BrowserRouter>	
																	

  );
}

export default App;
