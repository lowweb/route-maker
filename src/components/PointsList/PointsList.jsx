import React, { useState } from 'react';
import PointItem from '../PointItem/PointItem';
import './PointsList.scss'

const PointsList = ({points, setPoints, remove}) => {

  const [currentPointItem, setCurrentPointItem] = useState(null)

  
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
            remove={remove} 
            key={point.id} 
            number={index+1}
            point={point}
          />
        )
      }
      
    </ul>
  )
};

export default PointsList;