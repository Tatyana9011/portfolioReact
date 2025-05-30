
import s from "./PhoneHorosckop.module.css";
import chunkArray from "./chunkArray";
import { useSelector, useDispatch } from 'react-redux';
import { setFirstSign, setTwoSign } from "../../../redux/feature/homeSlise";

const RenderSignsGroup =()=>{
    const dispatch = useDispatch()
    const db = useSelector(state => state.home.db)
    const signActive = useSelector(state => state.home.firstSign) //знак зодіаку вибраний і записаний в стейт обьект
    const coupleActive = useSelector(state => state.home.twoSign)  //знак зодіаку для пари вибраний і записаний в стейт обьект
    const grouped = chunkArray(db, 3);
    const signsForCouple = useSelector(state => state.home.signsForCouple)//сторінка для вибота пари відкрита 
    
    const handlOnClick = (name)=>signsForCouple?dispatch(setTwoSign(name)):dispatch(setFirstSign(name))

  return(
        <>
            <div  className={`${s.signs}`}>
                 {grouped.map((group, groupIndex) => (
                    <div className={`${s.group} ${s.signs}`} key={groupIndex}>
                        {group.map((sign, index) => (
                             <div onClick={()=>handlOnClick(sign.name)} className={s.sign} key={index}>
                                    <div className={`${(!signsForCouple&&signActive?.name === sign.name)||
                                        coupleActive?.name===sign.name?s.imageActive:''}`}>
                                        <img src={`/images/${(!signsForCouple&&signActive?.name === sign.name)||coupleActive?.name===sign.name ? `${sign.nickName} (1)` : sign.nickName}.png`} alt={sign.name} />
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







