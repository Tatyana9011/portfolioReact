import s from "./ImagePage.module.css"
import { IonIcon } from '@ionic/react';
import {arrowRedoOutline} from 'ionicons/icons';
const ImagePage = ()=>{
    return (
        <div className={`${s.page} ${s.imageCanvas} `} >
			<div className={s.title}> 
					<h2>На цій сторінці презентація роботи з картинками в тегу 'canvas'</h2>
				<div>
                    <p className={s.head_title}>Завантажте картинку зі свого компютера або введіть URL картинки.
					 Можна скористатися безкоштовними картинками з сайтів:
                    </p>
						<a href="https://www.pexels.com/ru-ru/" alt="photo"  className={s.photoStock} target="_blank">Безкоштовні стокові фото(pexels)</a><br/>
						<a href="https://pixabay.com/ru/"alt="photo" className={s.photoStock}target="_blank">Pixabay</a><br/>
						<a href="https://www.istockphoto.com/uk"alt="photo" className={s.photoStock}target="_blank">iStock</a><br/>
						<a href="https://freerangestock.com/"alt="photo" className={s.photoStock}target="_blank">Freerangestock</a>
				</div>
			</div>
			<div className={s.massager}></div>
			<nav className={s.navBar}>
				<img  crossorigin="anonymous" alt="Photo" id={s.preview} />
					<div className={s.wrapAddImage}>
						<label htmlFor="finput" className={`${s.addImg} ${s.labelCreat}`}>
							<input type="file" accept="image/*" id={s.finput}/>
							Add Image
						</label>
						<input type="text" accept="image/*" placeholder='Або введіть URL' id ={s.imageURL}/>
			   		</div>

				<div className={s.filter}>
						<select name="languaga" id={s.lang}>
							<option value="">Add filter</option>
							<option value="gray">gray</option>
							<option value="red">red</option>
							<option value="orange">orange</option>
							<option value="yellow">yellow</option>
							<option value="green">green</option>
							<option value="blue">blue</option>
							<option value="indigo">indigo</option>
							<option value="violet">violet</option>
						</select>
				</div>	
				<input type = "button" value="Rainbow" id={s.rainbow}/>
				<input type = "button" value="All clear" id={s.clear} />	
			</nav>
			<div className={s.canvas_content}>
				<div className={`${s.canvas_content} ${s.wrapper_width}`}>
					<div className={`${s.album} ${s.active}`}></div>
					<biv className={s.book}></biv>
				</div>
				<div className={s.canvas_width}>
					
					<canvas width="300" height="200" id={s.canvasPreview} ></canvas>

				</div>
				<div className={s.arrow}><IonIcon icon={arrowRedoOutline}/></div>
				
				<div className={s.canvas_width}>
					<canvas width="300" height="200" id={s.getCanvas} ></canvas>
    			</div>
					
			</div>
      </div>
      );
}
export default ImagePage;