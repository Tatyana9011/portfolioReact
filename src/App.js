import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { BrowserRouter, Route , Routes} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import GamePage from './pages/GamePage/GamePage';
import ImagePage from './pages/ImagePage/ImagePage';
import PreloaderPage from './pages/PreloaderPage/PreloaderPage';
import SettingsPage from './pages/SettingsPage/SettingsPage';
import CuruselPage from './pages/CuruselPage/CuruselPage';
import OrderPage from './pages/OrderPage/OrderPage';
import MenuToggle from './components/MenuToggle/MenuToggle';


const App =({store})=> {
  return (

     <BrowserRouter>
        
				<Sidebar/>
        <Routes>
           <Route path='/' Component={HomePage}/>
           <Route path='Home' Component={HomePage}/>	
           <Route path='Game' Component={GamePage}/>	
           <Route path='Image' Component={ImagePage}/>	
           <Route path='Preloader' Component={PreloaderPage}/>	
           <Route path='Settings' Component={SettingsPage}/>
           <Route path='Carusel' Component={CuruselPage}/>
           <Route path='Order' Component={OrderPage}/>
        </Routes>	
        <MenuToggle/>
      </BrowserRouter>	
																	

  );
}

export default App;
