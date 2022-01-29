import React, { useState } from 'react';
import PointItem from '../PointItem/PointItem';
import './PointsList.scss'

const PointsList = ({points, remove, setPoints, placemarkDraggin}) => {

  const [currentPointItem, setCurrentPointItem] = useState(null)

  function dragStartHandler(e,point) {
    setCurrentPointItem(point)
    e.target.classList.add('point-item--drag')
    
  }

  function dragEndHandler(e) {
    e.target.classList.remove('point-item--drag')
    e.target.classList.remove('point-item--dragover')
  }

  function dragOverHandler(e) {
    e.preventDefault()
    e.target.classList.add('point-item--dragover')
    
  }

  function dropHandler(e,point) {
    e.preventDefault()
    setPoints(
      points.map(item=>{
      if(item.id === point.id) {
        return {...item, order: currentPointItem.order}
      }
      if(item.id === currentPointItem.id) {
        return {...item, order: point.order}
      }
      return item
    })
    )
    e.target.classList.remove('point-item--dragover')
  }

  const sortPoints = (a,b) => {
    if(a.order > b.order) {
      return 1
    }
    else {
      return -1
    }
  }

  if (!points.length) {
    return (
      <div className="point-item--empty">Список пуст</div>
    )
  }
  return (
    <ul className="points-list">
      {
        points.sort(sortPoints).map((point,index) => 
          <PointItem 
            onDragStart={(e)=> dragStartHandler(e,point)}
            onDragLeave={(e)=> dragEndHandler(e)}
            onDragEnd={(e)=> dragEndHandler(e)}
            onDragOver={(e)=> dragOverHandler(e)}
            onDrop={(e)=> dropHandler(e,point)}
            draggable={true} 
            remove={remove} 
            key={point.id} 
            number={index+1}
            point={point}
            placemarkdraggin={placemarkDraggin}

          />
        )
      }
      
    </ul>
  )
};

export default PointsList;