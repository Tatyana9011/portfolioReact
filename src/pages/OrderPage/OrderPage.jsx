import s from "./OrderPage.module.css"
const OrderPage = ()=>{
    return (
		<div className={`${s.page} ${s.order} `}>
		<div className={s.order_content}>
			
			<div className={s.wrapper_button}>
				<button className={s.button}>
				<svg className={s.circle} viewBox="0 0 76 76">
					<circle className={s.default} cx="38" cy="38" r="36"></circle>
					<circle className={s.active} cx="38" cy="38" r="36"></circle>
				</svg>
				<div className={s.icon}>
					<svg className={s.line1} viewBox="0 0 4 37">
						<line x1="2" y1="2" x2="2" y2="35"></line>
					</svg>
					<div className={s.arrow_progress}>
						<svg className={s.arrow} viewBox="0 0 40 32">
							<path d="M 8,16 C 8,16 20,30 20,30 C 20,30 32,16 32,16"></path>
							<path d="M 2,16 C 5.6,16 12.8,16 20,16 C 27.2,16 34.4,16 38,16"></path>
						</svg>
						<svg className={s.progress} viewBox="0 0 444 10">
							<path d="M2,5 L42,5 C60.0089086,6.33131695 73.3422419,6.99798362 82,7 C87.572404,7.00129781 91.0932494,1.72677301 102,1.99944178 C112.906751,2.27211054 112.000464,7.99986045 122,8 C131.999536,8.00013955 132,2 142,2 C152,2 152,8 162,8 C172,8 172,2 182,2 C192,2 192,8 202,8 C212,8 212,2 222,2 C232,2 232,8 242,8 C252,8 252,2 262,2 C272,2 272,8 282,8 C292,8 292,2 302,2 C312,2 312,8 322,8 C332,8 332,2 342,2 C352,2 351.897852,7.49489262 362,8 C372.102148,8.50510738 378.620177,5.22532154 402,5 L442,5"></path>
						</svg>
					</div>
				</div>
				<span>0%</span>
				</button>
			</div>	
			<div className={s.wrapper}>
				<div className={s.all_toggle_wrapper}>
					<div className={s.toggle_wrapper}>
						<div className={`${s.toggle} ${s.normal}`}>
							<input id={s.normal} type="checkbox"/>
							<label className={s.toggle_item} htmlFor="normal"></label>
						</div>
						<div className={s.name}>Normal</div>
					</div>
					<div className={s.toggle_wrapper}>
						<div className={`${s.toggle} ${s.transparent}`}>
							<input id={s.transparent} type="checkbox"/>
							<label className={s.toggle_item} htmlFor="transparent"></label>
				  		</div>
						<div className={s.name}>Transparent</div>
	
					</div>
					<div className={s.toggle_wrapper}>
						<div className={`${s.toggle} ${s.checkcross}`}>
				  			<input id={s.checkcross} type="checkbox"/>
				  			<label className={s.toggle_item} htmlFor="checkcross">
								<div className={s.check}></div>
				  			</label>
						</div>
						<div className={s.name}>Yes &amp; No</div>
					</div>

					<div className={s.toggle_wrapper}>
						<div className={s.toggle}>
				  			<input id={s.gravity} type="checkbox"/>
				  			<label className={s.toggle_item} htmlFor="gravity"></label>
						</div>
						<div className={s.name}>Gravity</div>
					</div>

					<div className={s.toggle_wrapper}>
						<div className={`${s.toggle} ${s.pancake_stack}`}>
				  			<input id={s.pancake} type="checkbox"/>
				  			<label className={s.toggle_item} htmlFor="pancake">
							<div className={s.pancakes}>
					  			<div className={s.pancake}></div>
					  			<div className={s.pancake}></div>
					  			<div className={s.pancake}></div>
					  			<div className={s.butter}></div>
							</div>
				  			</label>
						</div>
						<div className={s.name}>Pancake Stacks</div>
					</div>
					<div className={s.toggle_wrapper}>
						<div className={`${s.toggle} ${s.dog_rollover}`}>
				  			<input id={s.doggo} type="checkbox"/>
				  			<label className={s.toggle_item} htmlFor="doggo">
								<div className={s.dog}>
					 			 	<div className={s.ear}></div>
					  				<div className={`${s.ear} ${s.right}`}></div>
					  				<div className={s.face}>
										<div className={s.eyes}></div>
										<div className={s.mouth}></div>
					  				</div>
								</div>
				  			</label>
						</div>
						<div className={s.name}>Doggo Wants a Treat</div>
					</div>
				</div>
				<div className={s.ball_wrap}>
					  <div className={s.toggle_wrapper}>
					<div className={`${s.toggle} ${s.basketball_hoop}`}>
					  <input id={s.hoop} type="checkbox"/>
					  <label className={s.toggle_item} htmlFor="hoop">
						<div className={s.ball__wrapper}>
						  <div className={s.ball}></div>
						</div>
						<div className={s.hoop}></div>
					  </label>
					</div>
					<div className={s.name}>Kobe Bryant Tribute</div>
					  </div>
						
					<div className={s.toggle_wrapper}>
				<div className={`${s.toggle} ${s.beer_pong}`}>
				  <input id={s.beer_pong} type="checkbox"/>
				  <label className={s.toggle_item} htmlFor="beer_pong"></label>
				  <div className={s.cup}>
					<div className={s.lid}></div>
				  </div>
				</div>
				<div className={s.name}>Beer Pong</div>
					  </div>
				</div>
			</div>
			</div>
	</div>

      );
}
export default OrderPage;