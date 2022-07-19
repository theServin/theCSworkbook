import './Unit.css'
import {Link} from 'react-router-dom' 
function Unit({title, lessons, border, to}){
    border = undefined==border?"":border;
    return(
        <div className={"Unit "+border}>
            <h1>{title}</h1>
            <div className="lessons">
            {lessons.map(lesson=><p><Link to={"/TheCSWorkbook/CS1/"+to}  style={{ textDecoration: 'none', color:'black' }}>{lesson}</Link></p>)}
            </div>
        </div>
    )
}

export default Unit