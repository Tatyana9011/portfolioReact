
import s from "./PhoneHorosckop.module.css";

import { useSelector } from 'react-redux';
import GoBackButton from "./GoBackButton";
import FooterHoroscop from "./FooterHoroscop";

const CompatibilityCouple =()=>{
    const signActive = useSelector(state => state.home.firstSign);
    console.log('signActive: ', signActive);
    const signCouple = useSelector(state => state.home.twoSign);
    console.log('signCouple: ', signCouple);
    const db_result = useSelector(state => state.home.db_result);
    const tableCompatibility = useSelector(state => state.home.tableCompatibility);
    //const namberCompatibility = useSelector(state => state.home.tableCompatibility[signActive.index][signCouple.index]);
const namberCompatibility = (signActive?.index !== undefined && signCouple?.index !== undefined)
    ? tableCompatibility[signActive.index-1][signCouple.index-1]
    : null;
    console.log('namberCompatibility', namberCompatibility);
  /* const namberCompatibility = useSelector((state) => {
      const { firstSign, twoSign, tableCompatibility } = state.home;

      if (!firstSign || !twoSign) return null;
      if (firstSign.index == null || twoSign.index == null) return null;

      return tableCompatibility[firstSign.index][twoSign.index];
    });*/

    if (!signActive || !signCouple || namberCompatibility === null || !db_result) {
    return <p style={{ textAlign: 'center' }}>Завантаження...</p>;
  }

  return(
        <>
       
       <GoBackButton/>
       
       <div className={s.aroundSign}>
            <div className={s.imageActive}>
                <img src={`/images/${signActive.nickName}(1).png`} alt=""/>
                <div className={s.labelSign }>
                    <p className={`${s.label} ${s.pilcrow}`}>Сумісність для знаку</p>
                    <p className= {`${s.nameSign} ${s.pilcrow}`}><b>{signActive.name}</b></p>
                </div>
            </div>
        </div>
        <div className={s.aroundSign} style={{marginTop:'31px'}}>
             <div className={s.imageActive}>
                 <img src={`/images/${signCouple.nickName}(1).png`} alt=""/>
                 <div className={s.labelSign }>
                     <p className={`${s.label} ${s.pilcrow}`}>Зі знаком</p>
                     <p className= {`${s.nameSign} ${s.pilcrow}`}><b>{signCouple.name}</b></p>
                 </div>
             </div>
        </div>
    <div className= {s.aroundText}>
        <div className= {s.discription} >
            <p className={s.text}><b>{namberCompatibility}</b></p> 
            <p className={s.text}>{db_result[namberCompatibility-1]}</p>
        </div>
    </div>

  <br/><div className={s.empti}></div>
   
        <FooterHoroscop/>
        
        </>   

)
}
export default CompatibilityCouple;







