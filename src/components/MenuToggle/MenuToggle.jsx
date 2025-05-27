import s from './MenuToggle.module.css';
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from '../../redux/feature/menuSlice';

const MenuToggle = ()=>{
    const isOpen = useSelector(state => state.menu.isOpen);
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(toggleMenu())} className={`${s.menuToggle}  ${s.draggable} ${isOpen?s.active : undefined}`} id={s.draggable}> </div>
    )
}
export default MenuToggle;