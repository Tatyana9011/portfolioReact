import s from './CuruselPage.module.css'
import { useState, useRef, useEffect } from 'react';

const RecipeCard = ({ recipe, isOpen, onToggle }) => {
  const [liked, setLiked] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onToggle(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [onToggle]);

  return (
    <div className={`${s.post} swiper-slide`}>
      <img className={s.post_img} src={recipe.image} alt="recipe" />
      <div className={s.post_body}>
        <img className={s.post_avatar} src={recipe.avatar} alt="avatar" />
        <div className={s.post_detail}>
          <h2 className={s.post_name}>{recipe.name}</h2>
          <p className={s.post_author}>{recipe.author}</p>
        </div>

        <div className={s.post_actions} ref={ref}>
          <button
            className={`${s.post_like} ${liked ? `${s.active}` : ''}`}
            onClick={() => setLiked(!liked)}
          >
            <i className="fas fa-heart"></i>
          </button>

          <button
            className={s.post_actions_controller}
            aria-expanded={isOpen}
            onClick={(e) => {
              e.stopPropagation();
              onToggle(recipe.id);
            }}
          >
            <i className="fa-solid fa-ellipsis fa-2xl"></i>
          </button>

          {isOpen && (
            <div
              className={s.post_actions_content}
              aria-hidden={!isOpen}
              data-visible={isOpen}
            >
              <ul role="list" className={s.grid_flow} data-spacing="small">
                <li><a className={s.post_actions_link} href="#"><i className="fa-solid fa-folder-open"></i><span>Add to Collection</span></a></li>
                <li><a className={s.post_actions_link} href="#"><i className="fa-solid fa-eye"></i><span>Show the Recipe</span></a></li>
                <li><a className={s.post_actions_link} href="#"><i className="fa-solid fa-user-plus"></i><span>Follow the User</span></a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default  RecipeCard;