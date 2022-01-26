import React from 'react';
import Button from '../UI/Button/Button';
import './PointItem.scss'

const PointItem = (props) => {
  return (
    <li className="point-item"
      number={props.number}
    >
      <div className="point-item__number">{props.number}</div>
      <div className='point-item__cap'>
        { props.point.name}
      </div>
      <Button onClick={()=>props.remove(props.point)} className="point-item__button button button--round-del">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM12 13.4142L8.70711 16.7071L7.29289 15.2929L10.5858 12L7.29289 8.70711L8.70711 7.29289L12 10.5858L15.2929 7.29289L16.7071 8.70711L13.4142 12L16.7071 15.2929L15.2929 16.7071L12 13.4142Z" fill="#E63946"/>
        </svg>
      </Button>
    </li>
  );
};

export default PointItem;