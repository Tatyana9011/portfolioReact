import s from "../HomePage.module.css"
import { useEffect, useState } from 'react';
const TableTime = ()=>{
    const [now, setNow] = useState(new Date());
    const weekday = now.toLocaleDateString("uk-UA", { weekday: "short" });
    
    useEffect(() => {
        const timer = setInterval(() => {
        setNow(new Date());
    }, 1000);
        return () => clearInterval(timer); // очистка при размонтировании
    }, []);

    return (
       <div className={s.info_content__time}>
        	<div className={s.time}> 	
        		<table id={s.tableTime} className={s.display}>
        			<tbody>
        				<tr>
                            <td>{`${now.getDate().toString().padStart(2, '0')}.${(now.getMonth()+1).toString().padStart(2, '0')}.${now.getFullYear()} `} </td>
        					<td>{weekday}</td>
        					<td>{now.toLocaleTimeString()}</td>
        				</tr>
        			</tbody>
        		</table>
        	</div>
        </div>
    )
}
export default TableTime;