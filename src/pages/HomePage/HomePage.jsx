import s from './HomePage.module.css';
import PhoneHorosckop from './PhoneHorosckop/PhoneHorosckop';
import TableTime from './TableTime/TableTime';
import Checkbox from './Checkbox/Checkbox';
import HomeText from './HomeText/HomeText';
const HomePage = ()=>{
return(
    <div className={`${s.page} ${s.home} `} >
			<TableTime/>
			<div className={s.wrapper_content_homePage}>
				<HomeText/>
				<div className={s.home_content}>
					<Checkbox/>
					<PhoneHorosckop/>
                </div>
           </div>
	</div>											
)}
export default HomePage;