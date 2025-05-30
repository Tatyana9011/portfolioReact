import s from "../HomePage.module.css";

const HomeText =()=>{
const words = ["Ця", "сторінка", "для", "навчання", "і", "втілення", "різних", "цікавих", "ідей", "для", "сайту"];

    return(
       
       <div id={s.container_home_text}>
	<h1>
	  {words.map((word, index) => (
	    <span key={index}><i>{word}</i></span>
	  )).reduce((acc, el) => acc.length === 0 ? [el] : [...acc, " ", el], [])}
	</h1>

	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, adipisci eligendi illo dolorum quas asperiores ex architecto a, vitae commodi distinctio illum sequi quo earum tempora qui dolores voluptates deleniti.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium commodi, nam magnam temporibus obcaecati et aliquid! Ass
	  Create, prototype, collaborate, and bring your ideas to life with the design platform used by over one million people — from f
	😂😂😂^⁒₩∨
	</p>
</div>

)}

export default HomeText;