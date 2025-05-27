import s from "./CuruselPage.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const CuruselPage = ()=>{
    return (
	<div className={`${s.page} ${s.curusel}`}>
		<div className={s.anime_checkbox} >
			<div id={s.drag_container}>
				<div id={s.spin_container}>

			  		<img src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="photo"/>
			  		<img src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="photo"/>
			  		<img src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="photo"/>
			  		<img src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="photo"/>
			  		<img src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="photo"/>
			  		<img src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="photo"/>
			  		<img src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="photo"/>
			  		<a target="_blank" href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg"></a>
				</div>						  
			</div>
			<div className={`${s.layer} ${s.layers__base}`} ></div>
			<div className={`${s.layer} ${s.layers__middle}`} ></div>
			<div className={`${s.layer} ${s.layers__front}`} ></div>
		</div>

		<div className={s.travel_card} >
		
			<div className={s.card}>
			<div className={s.poster}><img src="https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg" alt="Location Unknown"/></div>
			<div className={s.details}>
				<h1>Location Unknown</h1>
				<h2>2021 • PG • 1hr 38min</h2>
				<div className={s.rating}>
			<i className={`fas fa-star`}></i>
			<i className={`fas fa-star`}></i>
			<i className={`fas fa-star`}></i>
			<i className={`fas fa-star`}></i>
			<i className={`far fa-star`}></i>
			<span>4.2/5</span>
				</div>
			<div className={s.tags}>
				<span className={s.tag}>Italian</span>
				<span className={s.tag}>Drama</span>
				<span className={s.tag}>Indie</span>
			</div>
			<p className={s.desc}>
				Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.
			</p>
			<div className={s.cast}>
			<h3>Cast</h3>
			<ul>
				<li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews"/></li>
				<li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd"/></li>
				<li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg" alt="Antonio Herrera" title="Antonio Herrera"/></li>
			</ul>
			</div>
			</div>
			</div>
			<div className={s.card}>
	<div className={s.poster}><img src="https://i.postimg.cc/GtxLYS7q/poster2-img.jpg" alt="Location Unknown"/></div>
	<div className={s.details}>
		<h1>Air</h1>
		<h2>2020 • PG • 24min</h2>
		<div className={s.rating}>
			<i className={`fas fa-star`}></i>
			<i className={`fas fa-star`}></i>
			<i className={`fas fa-star`}></i>
			<i className={`fas fa-star`}></i>
			<i className={`far fa-star`}></i>
			<span>4/5</span>
		</div>
		<div className={s.tags}>
			<span className={s.tag}>Romance</span>
			<span className={s.tag}>Comedy</span>
			<span className={s.tag}>Short</span>
		</div>
		<p className={s.desc}>
			Two strangers meet together on a plane flying to the alps.
		</p>
		<div className={s.cast}>
			<h3>Cast</h3>
			<ul>
				<li><img src="https://i.postimg.cc/yY2QcYRp/cast-21.jpg" alt="Angelina Whyte" title="Angelina Whyte"/></li>
				<li><img src="https://i.postimg.cc/R0BgpsXc/cast-22.jpg" alt="Ivan Benson" title="Ivan Benson"/></li>
			</ul>
		</div>
	</div>
			</div>
			<div className={s.card}>
	<div className={s.poster}><img src="https://i.postimg.cc/yxH6DzPD/poster3-img.jpg" alt="Location Unknown"/></div>
	<div className={s.details}>
		<h1>End Credits</h1>
		<h2>2021 • R • 1hr 41min</h2>
		<div className={s.rating}>
			<i className={`fas fa-star`}></i>
			<i className={`fas fa-star`}></i>
			<i className={`fas fa-star`}></i>
			<i className={`fas fa-star`}></i>
			<i className={`fas fa-star-half-alt`}></i>
			<span>4.7/5</span>
		</div>
		<div className={s.tags}>
			<span className={`${s.tag} ${s.yellow}`}>Teen</span>
			<span className={s.tag}>Comedy</span>
			<span className={`${s.tag} ${s.blue}`}>Drama</span>
		</div>
		<p className={s.desc}>
			Alex, together with his best friends, goes on a road trip whilst experiencing friendship, self-discovery, and the bittersweet transition to adulthood.
		</p>
		<div className={s.cast}>
			<h3>Cast</h3>
			<ul>
				<li><img src="https://i.postimg.cc/xd3twv4B/cast-31.jpg" alt="Jessica Enduro" title="Jessica Enduro"/></li>
				<li><img src="https://i.postimg.cc/C1MmSZy5/cast-32.jpg" alt="Charles Garcia" title="Charles Garcia"/></li>
			</ul>
		</div>
	</div>
			</div>
		</div>

		<section>
			<div className={s.recipe_container}>
			  <h1>The Dessert Recipes</h1>
			  <Swiper
      			spaceBetween={50}
      			slidesPerView={3}
      			onSlideChange={() => console.log('slide change')}
      			onSwiper={(swiper) => console.log(swiper)}
    			></Swiper>

                 <SwiperSlide>
				<div className={`${s.post}`}>
					<img
					  className={s.post_img}
					  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/defebc72-ea17-41c7-9bb6-70b3974a93b7"
					  alt="recipe" />
	  
					<div className={s.post_body}>
					  <img
						className={s.post_avatar}
						src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f9d29d0e-f03b-4990-9bc5-ade57a276b41"
						alt="avatar" />
					  <div className={s.post_detail}>
						<h2 className={s.post_name}>Homemade Ice Cream</h2>
						<p className={s.post_author}>Evelyn Taylor</p>
					  </div>
	  
					  <div className={s.post_actions}>
						<a className={s.post_like} href="javascript:void(0)"><i className={`fas fa-heart`}>
						</i></a>
						<button className={s.post_actions_controller}
						  data-target="post1"
						  aria-controls="post_actions_content"
						  aria-expanded="false">
						  <i className={`fa-solid fa-ellipsis fa-2xl`}></i>
						</button>
						<div
						  className={s.post_actions_content}
						  id={s.post1}
						  data-visible="false"
						  aria-hidden="true">
						  <ul role="list" className={s.grid_flow} data-spacing="small">
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-folder-open`}></i>
								<span>Add to Collection</span>
							  </a>
							</li>
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-eye`}></i>
								<span>Show the Recipe</span>
							  </a>
							</li>
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-user-plus`}></i>
								<span>Follow the User</span>
							  </a>
							</li>
						  </ul>
						</div>
					  </div>
					</div>
				  </div>
				  </SwiperSlide>

				  <SwiperSlide> 
				  <div className={`${s.post}`}>
					<img className={s.post_img} src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/7443d18f-26b6-47eb-bfca-541fb72cee65" alt="recipe" />
	  
					<div className={s.post_body}>
					  <img
						className={s.post_avatar}
						src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/3c7b6ef9-cd2d-4d70-819a-2aa9c2309083"
						alt="avatar" />
					  <div className={s.post_detail}>
						<h2 className={s.post_name}>Pancake</h2>
						<p className={s.post_author}>Ethan Wilson</p>
					  </div>
	  
					  <div className={s.post_actions}>
						<a className={s.post_like} href="javascript:void(0)"><i className={`fas fa-heart`}></i></a>
						<button
						  className={s.post_actions_controller}
						  data-target="post2"
						  aria-controls="post_actions_content"
						  aria-expanded="false">
						  <i className={`fa-solid fa-ellipsis fa-2xl`}></i>
						</button>
						<div
						  className={s.post_actions_content}
						  id={s.post2}
						  data-visible="false"
						  aria-hidden="true">
						  <ul role="list" className={s.grid_flow} data-spacing="small">
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-folder-open`}></i>
								<span>Add to Collection</span>
							  </a>
							</li>
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-eye`}></i>
								<span>Show the Recipe</span>
							  </a>
							</li>
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-user-plus`}></i>
								<span>Follow the User</span>
							  </a>
							</li>
						  </ul>
						</div>
					  </div>
					</div>
				  </div>
				  </SwiperSlide>
				  <SwiperSlide>
				  <div className={s.post}>
					<img className={s.post_img} src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/24566dbf-61a2-4bd0-bb29-ef1773364eba" alt="recipe" />
	  
					<div className={s.post_body}>
					  <img
						className={s.post_avatar}
						src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/01332597-5aeb-483b-b682-9379c6ed8f14"
						alt="avatar" />
					  <div className={s.post_detail}>
						<h2 className={s.post_name}>Macaron</h2>
						<p className={s.post_author}>Bella Smith</p>
					  </div>
	  
					  <div className={s.post_actions}>
						<a className={s.post_like} href="javascript:void(0)"><i className={`fas fa-heart`}></i></a>
						<button
						  className={s.post_actions_controller}
						  data-target="post3"
						  aria-controls="post_actions_content"
						  aria-expanded="false">
						  <i className={`fa-solid fa-ellipsis fa-2xl`}></i>
						</button>
						<div
						  className={s.post_actions_content}
						  id={s.post3}
						  data-visible="false"
						  aria-hidden="true">
						  <ul role="list" className={s.grid_flow} data-spacing="small">
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-folder-open`}></i>
								<span>Add to Collection</span>
							  </a>
							</li>
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-eye`}></i>
								<span>Show the Recipe</span>
							  </a>
							</li>
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-user-plus`}></i>
								<span>Follow the User</span>
							  </a>
							</li>
						  </ul>
						</div>
					  </div>
					</div>
				  </div>
				  </SwiperSlide>

				  <SwiperSlide>
				  <div className={s.post}>
					<img
					  className={s.post_img}
					  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/a208eb17-a847-4e04-be2c-d7ec2071ae45"
					  alt="recipe" />
	  
					<div className={s.post_body}>
					  <img className={s.post_avatar} src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/b9f5ef94-c2c9-4792-b7a3-593d393f2c84" alt="avatar" />
					  <div className={s.post_detail}>
						<h2 className={s.post_name}>Cheesecake</h2>
						<p className={s.post_author}>Mia Dixon</p>
					  </div>
	  
					  <div className={s.post_actions}>
						<a className={s.post_like} href="javascript:void(0)"><i className={`fas fa-heart`}></i></a>
						<button
						  className={s.post_actions_controller}
						  data-target="post4"
						  aria-controls="post_actions_content"
						  aria-expanded="false">
						  <i className={`fa-solid fa-ellipsis fa-2xl`}></i>
						</button>
						<div
						  className={s.post_actions_content}
						  id={s.post4}
						  data-visible="false"
						  aria-hidden="true">
						  <ul role="list" className={s.grid_flow} data-spacing="small">
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-folder-open`}></i>
								<span>Add to Collection</span>
							  </a>
							</li>
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-eye`}></i>
								<span>Show the Recipe</span>
							  </a>
							</li>
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-user-plus`}></i>
								<span>Follow the User</span>
							  </a>
							</li>
						  </ul>
						</div>
					  </div>
					</div>
				  </div>
				  </SwiperSlide>

				  <SwiperSlide>
				  <div className={s.post}>
					<img className={s.post_img} src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/208fe8f5-9d7f-4b83-9249-43601bb4c500" alt="recipe" />
	  
					<div className={s.post_body}>
					  <img
						className={s.post_avatar}
						src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/58f9319c-78cf-444b-ba71-701c506c2dd3"
						alt="avatar" />
					  <div className={s.post_detail}>
						<h2 className={s.post_name}>Donuts</h2>
						<p className={s.post_author}>Olivia Martinez</p>
					  </div>
	  
					  <div className={s.post_actions}>
						<a className={s.post_like} href="javascript:void(0)"
						  ><i className={`fas fa-heart`}></i
						></a>
						<button
						  className={s.post_actions_controller}
						  data-target="post5"
						  aria-controls="post_actions_content"
						  aria-expanded="false">
						  <i className={`fa-solid fa-ellipsis fa-2xl`}></i>
						</button>
						<div
						  className={s.post_actions_content}
						  id={s.post5}
						  data-visible="false"
						  aria-hidden="true">
						  <ul role="list" className={s.grid_flow} data-spacing="small">
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-folder-open`}></i>
								<span>Add to Collection</span>
							  </a>
							</li>
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-eye`}></i>
								<span>Show the Recipe</span>
							  </a>
							</li>
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-user-plus`}></i>
								<span>Follow the User</span>
							  </a>
							</li>
						  </ul>
						</div>
					  </div>
					</div>
				  </div>
				  </SwiperSlide>

				  <SwiperSlide>
				  <div className={s.post}>
					<img
					  className={s.post_img}
					  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/e4f91d6d-ee11-4ff7-9e6f-0fb3f9a78598"
					  alt="recipe" />
	  
					<div className={s.post_body}>
					  <img
						className={s.post_avatar}
						src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/24ca2eec-a5ba-4c32-907c-ffffca203e1c"
						alt="avatar" />
					  <div className={s.post_detail}>
						<h2 className={s.post_name}>Rolo Cheesecake</h2>
						<p className={s.post_author}>Benjamin Clark</p>
					  </div>
	  
					  <div className={s.post_actions}>
						<a className={s.post_like} href="javascript:void(0)"
						  ><i className={`fas fa-heart`}></i
						></a>
						<button
						  className={s.post_actions_controller}
						  data-target="post6"
						  aria-controls="post_actions_content"
						  aria-expanded="false">
						  <i className={`fa-solid fa-ellipsis fa-2xl`}></i>
						</button>
						<div
						  className={s.post_actions_content}
						  id={s.post6}
						  data-visible="false"
						  aria-hidden="true">
						  <ul role="list" className={s.grid_flow} data-spacing="small">
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-folder-open`}></i>
								<span>Add to Collection</span>
							  </a>
							</li>
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-eye`}></i>
								<span>Show the Recipe</span>
							  </a>
							</li>
							<li>
							  <a className={s.post_actions_link} href="javascript:void(0)">
								<i className={`fa-solid fa-user-plus`}></i>
								<span>Follow the User</span>
							  </a>
							</li>
						  </ul>
						</div>
					  </div>
					</div>
				  </div>
				  </SwiperSlide>

			</div>
				
				<div className={s.swiper_scrollbar}></div>
		</section>
 </div> 

)      
          

}
export default CuruselPage;