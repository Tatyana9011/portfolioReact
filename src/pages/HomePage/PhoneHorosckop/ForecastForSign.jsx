
import s from "./PhoneHorosckop.module.css";

import { useSelector } from 'react-redux';
import GoBackButton from "./GoBackButton";
import FooterHoroscop from "./FooterHoroscop";

const ForecastForSign =()=>{
    const signActive = useSelector(state => state.home.firstSign)

  return(
        <>
       
       <GoBackButton/>
       
       <div className={s.aroundSign}>
        <div className={s.imageActive}>
            <img src={`/images/${signActive.nickName}(1).png`} alt=""/>
            <div className={s.labelSign }>
                <p className={`${s.label} ${s.pilcrow}`}>Прогноз для знаку</p>
                <p className= {`${s.nameSign} ${s.pilcrow}`}><b>{signActive.name}</b></p>
            </div>
        </div>
    </div>
    <div className= {s.aroundText}>
        <div className= {s.discription} >
            <p className={s.text}>{signActive.discription}</p> 
            <p className={s.text}>{signActive.textDescrib}</p>
            <p><b>{signActive.text}</b></p>
        </div>
    </div>

    <div className={`${s.result} ${s.gun}`}>
        <img  src="/images/gun.png" alt="gun"/>
        <p className={`${s.gunText} ${s.pilcrow}`}><b>Зброя-талісман</b></p>
    </div>
    <p className={s.pilcrow}>{signActive.gun}</p>
    
    <div className={`${s.result} ${s.moon}`}>
        <img  src="/images/moon.png" alt="moon"/>
        <p className={`${s.gunText} ${s.pilcrow}`}><b>Гороскоп на 2024</b></p>
    </div>
    <p className={s.pilcrow}>{signActive.advaic}</p>
    <div className={`${s.result} ${s.cube}`}>
        <img  src="/images/cube.png" alt="cube"/>
        <p className={`${s.gunText} ${s.pilcrow}`}><b>Щасливі числа</b></p>
    </div>
    <p className={s.pilcrow}>{signActive.number}</p>
<br/><div className={s.empti}></div>
   
        <FooterHoroscop/>
        
        </>   

)
}
export default ForecastForSign;







