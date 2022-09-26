import { useState } from 'react';

export const useInitInputSuggest = () => {
  const [geoData, setGeoData] = useState({})
  const loadSuggest = (ymaps, suggestElement) => {
    const searchControl = new ymaps.control.SearchControl({
      options: {
        float: 'left',
        provider: 'yandex#map',        
    }
    });

 
    const suggestView = new ymaps.SuggestView(suggestElement,{
    });
    
    suggestView.events.add("select", async (e) => {  
      await searchControl
        .search(e.get("item").value)
        .then((data) => {

          setGeoData({
            name: data.metaData.geocoder.request, 
            coord: data.geoObjects.get(0).geometry.getCoordinates()
          })
        })
        .catch((e) => console.log(e))
    });
  };
  return [loadSuggest, geoData]
}

