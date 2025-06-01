
import s from "./PhoneHorosckop.module.css";
import chunkArray from "./chunkArray";
import { useSelector, useDispatch } from 'react-redux';
import { setFirstSign, setTwoSign } from "../../../redux/feature/homeSlise";
import { useLocation } from "react-router-dom";


const RenderSignsGroup =()=>{
    const dispatch = useDispatch()
    const db = useSelector(state => state.home.db)
    const signActive = useSelector(state => state.home.firstSign) //знак зодіаку вибраний і записаний в стейт обьект
    const coupleActive = useSelector(state => state.home.twoSign)  //знак зодіаку для пари вибраний і записаний в стейт обьект
    const grouped = chunkArray(db, 3);
    const  location = useLocation();
    const hash = location.pathname.replace('/Home/', '');
    const signsTwo =(hash==='signsTwo');
    const signsPage = (hash==='signs');

    const handlOnClick = (name)=>signsTwo?dispatch(setTwoSign(name)):dispatch(setFirstSign(name))

  return(
        <>
            <div  className={`${s.signs}`}>
                 {grouped.map((group, groupIndex) => (
                    <div className={`${s.group} ${s.signs}`} key={groupIndex}>
                        {group.map((sign, index) => (
                             <div onClick={()=>handlOnClick(sign.name)} className={s.sign} key={index}>
                                    <div className={`${(!signsTwo&&signActive?.name === sign.name)||
                                        (!signsPage&&coupleActive?.name===sign.name)?s.imageActive:''}`}>
                                        <img src={`/images/${(!signsTwo&&signActive?.name === sign.name)||
                                            (!signsPage&&coupleActive?.name===sign.name) ? `${sign.nickName}(1)` : sign.nickName}.png`} alt={sign.name} />
                                    </div>
                               <p>{sign.name}</p>
                              </div>
                        ))}
                    </div>
                    ))}
            </div>
        </>
    )
}
export default RenderSignsGroup;







