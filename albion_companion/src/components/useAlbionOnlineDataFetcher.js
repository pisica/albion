import React, {useState, useEffect} from 'react';
import { useCache } from '../context/CacheContext';


// Data fetcher for albion-online-data.com
// https://www.albion-online-data.com/api-info/api-info.html
// https://west.albion-online-data.com/api/v2/stats/prices/T4_BAG,T5_BAG.json?locations=Caerleon,Bridgewatch&qualities=2


const useAlbionOnlineDataFetcher = (inputValue) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getCacheData, setCacheData } = useCache();

  {/*console.info(inputValue)*/}
  const ITEM_API_URL = `https://west.albion-online-data.com/api/v2/stats/prices/T${inputValue[1]}_${inputValue[0]}?locations=Lymhurst`;
  const RUNE_API_URL = `https://west.albion-online-data.com/api/v2/stats/prices/T4_Rune,T5_Rune,T6_Rune,T7_Rune,T8_Rune?locations=Lymhurst`;
  const API_URL = inputValue[0] === 'runes' ? RUNE_API_URL : ITEM_API_URL

  useEffect(() => {
    if (!inputValue[0]) {
      setLoading(false);
      return
    }

    const queryKey = inputValue ? `${inputValue[0]}_T${inputValue[1]}` : null;
    console.log(queryKey)

    const cachedData = getCacheData(queryKey);
    if (cachedData) {
      console.log(`Cache Hit for: ${queryKey}`)
      setData(cachedData)
      return
    }

    const fetchData = async () => {
      try {
        console.info(API_URL)
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setData(json);
        setCacheData(queryKey, json);
        setError(null);

      } catch (e) {
        console.error(e);
        setError(e.message);
        setData(null);

      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [inputValue]);

  return { data, loading, error };

}
export default useAlbionOnlineDataFetcher
