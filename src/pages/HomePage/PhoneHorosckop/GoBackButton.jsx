
import s from "./PhoneHorosckop.module.css";

import { useDispatch } from 'react-redux';
import { backInitialHorosckopWithActiveSign } from "../../../redux/feature/homeSlise";

const GoBackButton =()=>{
    const dispatch = useDispatch()

  return(
        <>
        <div onClick = {()=>dispatch(backInitialHorosckopWithActiveSign())}className={s.goBack}>
            <img src="./images/Leading.png" alt=""/>
        </div>
        </>    )
}
export default GoBackButton;







