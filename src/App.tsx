import { useEffect, useState } from 'react'
import Tours from './Tours'
const url = 'https://www.course-api.com/react-tours-project'
const App = () => {
  const [tours,setTours] = useState([])
  const [loading,setLoading] = useState(true)
  const removeTour = (id) =>{
    const newTours = tours.filter((tour)=>tour.id!==id)
    setTours(newTours)
  }
  const fetchTours = async() =>{
    const response = await fetch(url)
    const newTours = await response.json()
    setTours(newTours)
    setLoading(false)
  }
  useEffect(()=>{
    fetchTours()
  },[])
  if(loading){
    return (
      <div className='loading'></div>
    )
  }
  if(tours.length===0){
    return (
      <main className='title'>
        <h2>no tours left</h2>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )
}
export default App