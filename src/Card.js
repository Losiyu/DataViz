import React from 'react'

// function useWindowSize(){
//   const [size, setSize] = useState([window.innerHeight, window.innerWidth])
//   useEffect(() => {
//     const handleResize = () => {
//       setSize([window.innerHeight, window.innerWidth])
//     }
//     window.addEventListener('resize', handleResize)
//   }, [])
//   return size
// }

function Card(props){
  // const [screenHeight, screenWidth] = useWindowSize()
  return(
    <div className="card">
      <img className="images" src={props.imgPath}/>
      <div className="description">{props.description}</div>
    </div>
  )
}

export default Card