import s from "./GamePage.module.css"
const GamePage = ()=>{
    return (
          <div  className={`${s.page} ${s.game} `} id={s.universe}>
				
				<div className={s.l_container}>
 				 	<div className={s.b_game_card}>
  				 		<div className={s.b_game_card__cover} id={s.newGame}></div>
  					</div>
  					<div className={s.b_game_card}>
   				 		<div className={s.b_game_card__cover} id={s.boardColor}></div>
  					</div>
  					<div className={s.b_game_card}>
  					 	<div className={s.b_game_card__cover} id={s.circle} ></div>
 					</div>
 				 	<div className={s.b_game_card}>
    					<div className={s.b_game_card__cover} id={s.car}></div>
  					</div>
				</div>
		</div>	
          
         
          
      );
}
export default GamePage;