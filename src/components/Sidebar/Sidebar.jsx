import Menulist from "./Menulist.jsx";
import ItemLogo from "./ItemLogo.jsx";
import s from "./Sidebar.module.css"
import { useSelector } from "react-redux";

const Sidebar = ()=>{
    const isOpen = useSelector(state => state.menu.isOpen);
    return (
       
        <div className={`${s.sidebar} ${isOpen?s.active : undefined}`}>
          <ul>
              <ItemLogo/>
              <Menulist/>
           </ul>
        </div>
      
      );
}
export default Sidebar;