import s from './HomePage.module.css';
import PhoneHorosckop from './PhoneHorosckop/PhoneHorosckop';

const HomePage = ()=>{
return(
    <div className={`${s.page} ${s.home} `} >
			<div className={s.info_content__time}>
				<div className={s.time}> 	
					<table id={s.tableTime} className={s.display}>
						<tbody>
							<tr>
								<td>Row 1 </td>
								<td></td>
								<td>Row 1 Data 3</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className={s.wrapper_content_homePage}>
				<div id={s.container_home_text}>
					<h1>
					  <span><i>Ця</i></span>
					  <span><i>сторінка</i></span>
					  <span><i>для</i></span>
					  <span><i>навчання</i></span>
					  <span><i>і</i></span>
					  <span><i>втілення</i></span>
					  <span><i>різних</i></span>
					  <span><i>цікавих</i></span>
						<span><i>ідей</i></span>
						<span><i>для</i></span>
						<span><i>сайту</i></span>
					</h1>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi, nam magnam temporibus obcaecati et aliquid! Assumenda asperiores quas vel rem voluptates inventore eius expedita repellat cupiditate reprehenderit magnam, voluptas quod quasi.
					  Create, prototype, collaborate, and bring your ideas to life with the design platform used by over one million people — from freelance 	rs, to the world’s largest teams.
					😂😂😂^⁒₩∨
					</p>
				</div>

				<div className={s.home_content}>
					<div className={s.home_chackbox}>
						<input type="checkbox" id={s.toggle}/>
						<label htmlFor="toggle"></label>
					</div>
				    
				    <PhoneHorosckop/>
			        
                </div>
        </div>
	</div>											
)
}
export default HomePage;