import s from './PreloaderPage.module.css';


const PreloaderPage = ()=>{
return( 
     <div className={`${s.page} ${s.louder}`}>
			<p className={s.head_title}>Анімація для прилоудерів</p>
			<div className={s.content_louder}></div>
	</div>
	)
}
export default PreloaderPage;