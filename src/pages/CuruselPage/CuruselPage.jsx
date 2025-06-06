import s from "./CuruselPage.module.css"
import CuruselDragContainr from "./CuruselDragContainr";
import TravelCard from "./TravelCard";
import RecipeSlider from "./RecipeSlider";
const CuruselPage = ()=>{
    return (
	<div className={`${s.page} ${s.curusel}`}>
		<CuruselDragContainr/>
		<TravelCard/>
		<RecipeSlider/>
 	</div> 
)}
export default CuruselPage;