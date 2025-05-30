
import { NavLink } from 'react-router-dom';
import s from './Sidebar.module.css'
import { IonIcon } from '@ionic/react';

const ItemPage = (props)=>{

 return (
              <>
               <li style={{"--bg": `${props.dataсolor}`}} className={props.isActive?`${s.active}` : ''} >
                     <NavLink to={props.href} className={({ isActive }) => isActive ? `${s.active}` : ''}>
                     <div className={s.icon}><IonIcon icon={props.icon}/></div>
                        <div className={s.text}>{props.text}</div>
                     </NavLink>
                </li>
              </>
     );
}
export default ItemPage;