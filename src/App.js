import { useEffect, useRef, useState } from "react";
import InputField from "./components/UI/InputField/InputField";
import PointsList from './components/PointsList/PointsList';
import { YMaps, Map, Placemark, Polyline } from "react-yandex-maps";
import { useInitInputSuggest } from './hooks/useInitInputSuggest';


function App() {
  const [points, setPoints] = useState([])
  const [lineItems, setLineItems] = useState([])
  const [placemarkDraggin , setPlacemarkDraggin] = useState({})
  const [centerOfMap, setCenterOfMap] = useState([53.13, 107.45]);
  const mapRef = useRef(null); 

  const [initSuggest,suggestGeoData] = useInitInputSuggest(mapRef)

  useEffect (()=> {
    if( Object.keys(suggestGeoData).length > 0) {
      const newPoint = {
        id: Date.now(),
        name: suggestGeoData.name,
        coord: suggestGeoData.coord,
        order: Date.now()
    }
    setPoints([...points, newPoint])
    setCenterOfMap (suggestGeoData.coord)
    }
  }, [suggestGeoData])


  useEffect(()=> {
    if (points.length>0) {
      setLineItems([...points.map((item)=>item.coord)])
    }
  }, [points])

  const removePoints = (point) => {
    setPoints(points.filter(p=> p.id !== point.id))
  }

  return (
    <div className="page__wraper">
      <aside className='sidebar'>
        <InputField
            id="suggestElement" 
            placeholder="Адрес или объект"
        />
        <PointsList
            setPoints={setPoints} 
            remove={removePoints} 
            points={points} 
        />
      </aside>
     <YMaps
        query={{ 
          load: "package.full",
          apikey: "ac684a05-e3c8-4777-a071-fcc67be621b8",
        }}
      >
        <Map className="map"
          onLoad={(ymaps) => {
            initSuggest(ymaps, "suggestElement")
            mapRef.current = ymaps
            }
          }
          state={{
            center: centerOfMap,
            zoom: 3,
            controls: []
          }}
          // width="100vw"
          // height="100vh"
          modules={[]}
        >
          <Polyline
          geometry={lineItems}
          options={{
            balloonCloseButton: false,
            strokeStyle: 'dot',
            strokeColor: '#000',
            strokeWidth: 4,
            strokeOpacity: 0.5,
          }}
          />
          {points.map((item,index) => (
            <Placemark
              key={item.id}
              geometry={item.coord}
              properties= {{
                balloonContent: item.name,
                iconContent: index+1,
              }}
              options={{
                preset: 'islands#blueCircleIcon',
                iconColor: '#3b5998',
                draggable: true,
                cursor: 'pointer',
                hasBalloon: true,
                hideIconOnBalloonOpen: false,
                hasHint: true,
                openBalloonOnClick: true, 
              }}  
            /> 
          ))}
        </Map>
      </YMaps>
    </div>
  );
}

export default App;
