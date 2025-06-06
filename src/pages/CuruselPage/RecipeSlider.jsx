import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';
import RecipeCard from './RecipeCard';
import s from './CuruselPage.module.css'


const RecipeSlider=()=>{
    const recipes = useSelector(state=>state.curusel.recipes)
    const [openId, setOpenId] = useState(null);

  return (
    <section>
      <div className={s.recipe_container}>
        <h1>The Dessert Recipes</h1>
        <Swiper
          className="swiper"
          modules={[Scrollbar, Mousewheel]}
          scrollbar={{ draggable: true }}
          mousewheel={{ invert: false }}
          speed={200}
          grabCursor={true}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            900: { slidesPerView: 2, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          {recipes.map((recipe) => (
            <SwiperSlide key={recipe.id}>
              <RecipeCard
                recipe={recipe}
                isOpen={openId === recipe.id}
                onToggle={(id) => setOpenId(id === openId ? null : id)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default RecipeSlider;