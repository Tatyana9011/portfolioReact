import ItemPage from "./ItemPage.jsx";
import s from './Sidebar.module.css';
import { IonIcon } from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import {codeWorkingOutline,chevronBackOutline} from 'ionicons/icons';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu, addActiveLink } from '../../redux/feature/menuSlice';


const Menulist = ()=>{
    const dispatch = useDispatch();
    const isOpen = useSelector(state => state.menu.isOpen);
    const listLink = useSelector(state => state.menu.listLink);
    const location = useLocation();

    useEffect(() => {
      dispatch(addActiveLink(location.pathname));
    }, [location.pathname]);
    return (
                <div className={s.Menulist}>
                  
                  <li onClick={()=>dispatch(toggleMenu())} className={s.all_sidebar} style={{"--bg": `#f44336;`}}>
                      <a href="#">
                        {isOpen?<div className={`${s.icon} ${s.two} ${s.active} `}><IonIcon icon={chevronBackOutline}/></div>:
                                <div className={`${s.icon} ${s.one} ${s.active}`}><IonIcon icon={codeWorkingOutline}/></div>
                        }  
                          <div className={s.text}>Hid sidebar</div>
                      </a>
                  </li>
                        
                   {listLink.map(link=>(
                    <ItemPage 
                    key={link.text}
                    dataсolor={link.dataсolor} href={link.href} 
                    icon={link.icon} 
                    text={link.text} 
                    isActive={link.isActive}/>))
                    }    
               <div/>                                                                                                                                                                                                                                                                                                                                                                                                              </div>
      );
}
export default Menulist;