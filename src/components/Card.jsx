import './Card.css'
function Card({title, content}){
    return(
    <div className='card'>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>)
}

export default Card