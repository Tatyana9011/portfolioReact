import { NavLink } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import {logoApple} from 'ionicons/icons';
import s from './Sidebar.module.css';

const ItemLogo = ()=>{
    return (
        <>
              <li className={s.sidebar__logo}  style={{"--bg": `#333`}}>
                  <NavLink to="/Carusel">
                      <div className={s.icon}> 
                        <IonIcon icon={logoApple}/>
                      </div>
                      <div className={s.text}>Website Logo</div>
                  </NavLink>
              </li>
        </>
      );
}
export default ItemLogo;