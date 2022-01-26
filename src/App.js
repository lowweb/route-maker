import { useRef, useState } from "react";
import InputField from "./components/UI/InputField/InputField";


function App() {
  const [points, setPoints] = useState([])
  const [lineItems, setLineItems] = useState([])
  const [placemarkDraggin , setPlacemarkDraggin] = useState({})
  const [centerOfMap, setCenterOfMap] = useState([53.13, 107.45]);
  const mapRef = useRef(null); 

  
  return (
    <div className="page__wraper">
      <aside className='sidebar'>
      <InputField
          id="suggestElement" 
          placeholder="Адрес или объект"
        />
      </aside>
     
    </div>
  );
}

export default App;
