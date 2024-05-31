import { useState } from "react"
const Tour = ({id,removeTour,image,info,name,price}) => {
  const [readMore,setReadMore] = useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt={name} className='img'/>
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore?info:`${info.substring(0,200)}...`}
          <button className='info-btn' onClick={()=>setReadMore(!readMore)}>
            {readMore?'show less':'read more'}
          </button>
        </p>
        <button type='button' className='delete-btn btn-block' onClick={()=>removeTour(id)}>remove</button>
      </div>
    </article>
  )
}
export default Tour