import s from "../HomePage.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { startToggleHorosckop } from "../../../redux/feature/homeSlise";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Checkbox =()=>{
    const location = useLocation();
    const hash = location.pathname.replace('#', '');
    console.log('hash: ', hash);
    const dispatch = useDispatch();
    const initialHorosckop = useSelector(state => state.home.initialHorosckop)
    console.log('initialHorosckop: ', initialHorosckop);
    const navigate = useNavigate();

  useEffect(() => {
  if (initialHorosckop && hash === '/Home/startPage') {
    navigate('/Home/signs');
  }
  if (!initialHorosckop && hash !== '/Home/startPage') {
    navigate('/Home/startPage');
  }
}, [initialHorosckop]);

  const handelOnChange = () => {
  dispatch(startToggleHorosckop());

};
 
    return(
        <div className={s.home_chackbox}>
        	<input onChange={handelOnChange} type="checkbox" checked={initialHorosckop} id="toggle"/>
        	<label htmlFor="toggle"></label>
        </div>
    )
}

export default Checkbox;