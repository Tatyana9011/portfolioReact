import s from "./SettingsPage.module.css"
const SettingsPage = ()=>{
    return (
        <div className={`${s.page} ${s.settings} `}>
			<div className={s.settings_content}>
				<nav className={s.amazing_tabs}>
				<div className={s.filters_container}>
				  <div className={s.filters_wrapper}>
					<ul className={s.filter_tabs}>
					  <li>
						<button className={`${s.filter_button} ${s.filter_active}`} data-translate-value="0">
						  New
						</button>
					  </li>
					  <li>
						<button className={s.filter_button} data-translate-value="100%">
						  Popular
						</button>
					  </li>
					  <li>
						<button className={s.filter_button} data-translate-value="200%">
						  Following
						</button>
					  </li>
					</ul>
					<div className={s.filter_slider} aria-hidden="true">
					  <div className={s.filter_slider_rect}>&nbsp;</div>
					</div>
				  </div>
				</div>
				<div className={s.main_tabs_container}>
				  <div className={s.main_tabs_wrapper}>
					<ul className={s.main_tabs}>
					  <li>
						<button className={s.round_button} data-translate-value="0" data-color="red">
						  <span className={s.avatar}>
							<img src="https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="user avatar" />
						  </span>
						</button>
					  </li>
					  <li>
						<button className={`${s.round_button} ${s.gallery} ${s.active}`} data-translate-value="100%" data-color="blue">
						  <svg fill="currentColor" viewBox="0 0 16 16">
							<path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
							<path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
						  </svg>
						</button>
					  </li>
					  <li>
						<button className={s.round_button} data-translate-value="200%" data-color="green">
						  <svg fill="currentColor" viewBox="0 0 16 16">
							<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
							<path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
						  </svg>
						</button>
					  </li>
					  <li>
						<button className={s.round_button} data-translate-value="300%" data-color="purple">
						  <svg fill="currentColor" viewBox="0 0 16 16">
							<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
						  </svg>
						</button>
					  </li>
					  <li>
						<button className={s.round_button}  data-translate-value="400%" data-color="orange">
						  <svg fill="currentColor" viewBox="0 0 16 16">
							<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
						  </svg>
						</button>
					  </li>
					</ul>
					<div className={s.main_slider} aria-hidden="true">
					  <div className={s.main_slider_circle}>&nbsp;</div>
					</div>
				  </div>
				</div>
			  	</nav>
				  <section className={s.card_area}>

					<section className={s.card_section}>
						<div className={s.card}>
							<div className={s.flip_card}>
								<div className={s.flip_card__container}>
									<div className={s.card_front}>
										<div className={`${s.card_front__tp} ${s.card_front__tp__beach}`}>
											<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60 60" className={s.card_front__icon}>
									   <path d="M57.2,28h-7.4c-0.4-4-2-7.7-4.4-10.6l3.2-3.2c0.8-0.8,0.8-2,0-2.8c-0.8-0.8-2-0.8-2.8,0l-3.2,3.2c-3-2.4-6.6-4-10.6-4.4V2.8
										   c0-1.1-0.9-2-2-2s-2,0.9-2,2v7.4c-4,0.4-7.7,2-10.6,4.4l-3.2-3.2c-0.8-0.8-2-0.8-2.8,0c-0.8,0.8-0.8,2,0,2.8l3.2,3.2
										   c-2.4,3-4,6.6-4.4,10.6H2.8c-1.1,0-2,0.9-2,2s0.9,2,2,2h7.4c0.4,4,2,7.7,4.4,10.6l-3.2,3.2c-0.8,0.8-0.8,2,0,2.8
										   c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6l3.2-3.2c3,2.4,6.6,4,10.6,4.4v7.4c0,1.1,0.9,2,2,2s2-0.9,2-2v-7.4c4-0.4,7.7-2,10.6-4.4
										   l3.2,3.2c0.4,0.4,0.9,0.6,1.4,0.6s1-0.2,1.4-0.6c0.8-0.8,0.8-2,0-2.8l-3.2-3.2c2.4-3,4-6.6,4.4-10.6h7.4c1.1,0,2-0.9,2-2
										   S58.3,28,57.2,28z M30,45.9c-8.8,0-15.9-7.2-15.9-15.9c0-8.8,7.2-15.9,15.9-15.9c8.8,0,15.9,7.2,15.9,15.9
										   C45.9,38.8,38.8,45.9,30,45.9z"></path>
									    </svg>
									   
													   <h2 className={s.card_front__heading}>
														   Beach time
													   </h2>
													   <p className={s.card_front__text_price}>
														   From £229
													   </p>
										</div>
		
										<div className={s.card_front__bt}>
											<p className={`${s.card_front__tex_view} ${s.card_front__tex_view__beach}`}>
												View me
											</p>
										</div>
									</div>
					
								</div>
							</div>
		
							<div className={s.inside_page}>
								<div className={s.inside_page__container}>
									<h3 className={`${s.inside_page__heading} ${s.inside_page__heading__beach}`}>
										For sun lovers
									</h3>
									<p className={s.inside_page__text}>
									   Relax and get sun-kissed tan in the sea or take up surfting for an adventure!
									</p>
									<a href="#" className={`${s.inside_page__btn} ${s.inside_page__btn__beach}`}>View deals</a>
								</div>
							</div>
						</div>
					</section>
		
					<section className={s.card_section}>
						<div className={s.card}>
							<div className={s.flip_card}>
								<div className={s.flip_card__container}>
									<div className={s.card_front}>
										<div className={`${s.card_front__tp} ${s.card_front__tp__camping}`}>
											<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 60 60" className={s.card_front__icon}>
									   <path d="M57,52.1c0-0.4-0.1-0.7-0.3-1.1l-6.3-10.8L32.4,9l2.3-4c0.6-1,0.2-2.2-0.7-2.7c-1-0.6-2.2-0.2-2.7,0.7L30,5.2L28.7,3
										   c-0.6-1-1.8-1.3-2.7-0.7c-1,0.6-1.3,1.8-0.7,2.7l2.3,4l-18,31.1L3.3,51C3.1,51.3,3,51.7,3,52.1c0,0.4,0.1,0.7,0.3,1
										   c0.4,0.6,1,1,1.7,1h50c0.7,0,1.4-0.4,1.7-1C56.9,52.8,57,52.4,57,52.1z M34.7,49.8C34.2,50,32.1,50,30,50s-4.2,0-4.7-0.2
										   c-0.2-0.5-0.2-2.1-0.2-3.6l0-4.3c0-2.7,2.2-4.9,4.9-4.9s4.9,2.2,4.9,4.9l0,4.3C34.9,47.7,34.9,49.3,34.7,49.8z M13.1,42.1L28,16.5
										   v16.7c-3.9,0.9-6.9,4.4-6.9,8.6l0,4.3c0,1.7,0,2.9,0.2,4H8.5L13.1,42.1z M38.7,50.1c0.2-1,0.2-2.3,0.2-4l0-4.3
										   c0-4.2-2.9-7.7-6.9-8.6V16.5l15,25.7l4.6,7.9H38.7z"></path>
									   </svg>
													   <h2 className={s.card_front__heading}>
														   Camping trek
													   </h2>
													   <p className={s.card_front__text_price}>
														   From £129
													   </p>
										</div>
		
										<div className={s.card_front__bt}>
											<p className={`${s.card_front__tex_view} ${s.card_front__tex_view__camping}`}>
												View me
											</p>
										</div>
									</div>
							
								</div>
							</div>
		
							<div className={s.inside_page}>
								<div className={s.inside_page__container}>
									<h3 className={`${s.inside_page__heading} ${s.inside_page__heading__camping}`}>
										For nature lovers
									</h3>
									<p className={s.inside_page__text}>
									   Get your boots on for some hiking and explore all the beautiful scenery of nature!
									</p>
									<a href="#" className={`${s.inside_page__btn} ${s.inside_page__btn__camping}`}>View deals</a>
								</div>
							</div>
						</div>
					</section>
				</section>
			</div>
		</div>
        
        
        
          
     
      );
}
export default SettingsPage;