import React, { useState, useEffect } from 'react';
import { useCache } from '../context/CacheContext';

// ... other imports ...

const useAlbionOnlineDataFetcher = (inputValue) => {
  const { getCacheData, setCacheData } = useCache();

  // 1. **ADD STATE HERE** to hold the data, loading status, and error
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const PRICE_API_URL = `https://west.albion-online-data.com/api/v2/stats/prices/${inputValue},${inputValue}@1,${inputValue}@2,${inputValue}@3,${inputValue}@4?locations=Lymhurst&qualities=1`;
  const ITEM_DATA_API_URL = `https://corsproxy.io/https://gameinfo.albiononline.com/api/gameinfo/items/${inputValue}/data`;

  useEffect(() => {
    if (!inputValue) {
      setData(null);
      return;
    }

    const queryKey = inputValue;
    console.log(queryKey);

    const cachedData = getCacheData(queryKey);
    if (cachedData) {
      console.log(`Cache Hit for: ${queryKey}`);
      // Set the cached data to state
      setData(cachedData); 
      return;
    }

    const fetchData = async () => {
      setIsLoading(true); // Start loading
      setError(null);     // Clear previous errors

      try {
        console.info(PRICE_API_URL);
        const [priceResponse, itemResponse] = await Promise.all([
          fetch(PRICE_API_URL),
          fetch(ITEM_DATA_API_URL)
        ]);

        if (!priceResponse.ok || !itemResponse.ok) {
          throw new Error(`HTTP error! One or more API calls failed.`);
        }

        const priceJson = await priceResponse.json();
        const itemJson = await itemResponse.json();

        const combinedData = [itemJson, priceJson];

        // Store and set the new data
        setCacheData(queryKey, combinedData);
        setData(combinedData); 

      } catch (e) {
        console.error("Fetch Error:", e);
        setError(e.message); // Set the error state
        setData(null);       // Clear data on error
      } finally {
        setIsLoading(false); // Stop loading regardless of success/fail
      }
    };

    fetchData();
  }, [inputValue, getCacheData, setCacheData]); // Include cache functions in dependencies

  // 2. **RETURN THE STATE** so components can use the data
  return { data, isLoading, error }; 
};

export default useAlbionOnlineDataFetcher;
{/*import React, {useState, useEffect} from 'react';
import { useCache } from '../context/CacheContext';


// Data fetcher for albion-online-data.com
// https://www.albion-online-data.com/api-info/api-info.html
// https://west.albion-online-data.com/api/v2/stats/prices/T4_BAG,T5_BAG.json?locations=Caerleon,Bridgewatch&qualities=2


const useAlbionOnlineDataFetcher = (inputValue) => {
  const [data, setData] = useState(null);
  const { getCacheData, setCacheData } = useCache();

  const PRICE_API_URL = `https://west.albion-online-data.com/api/v2/stats/prices/${inputValue}?locations=Lymhurst`;
  const ITEM_DATA_API_URL = `https://gameinfo.albiononline.com/api/gameinfo/items/${inputValue}/data`;

  useEffect(() => {
    if (!inputValue) {
      return
    }

    const queryKey = inputValue;
    console.log(queryKey)

    const cachedData = getCacheData(queryKey);
    if (cachedData) {
      console.log(`Cache Hit for: ${queryKey}`)
      return
    }

    const fetchData = async () => {
      try {
        console.info(PRICE_API_URL)
        const [priceResponse, itemResponse] = await Promise.all([
          fetch(PRICE_API_URL),
          fetch(ITEM_DATA_API_URL)
        ]);

        if (!priceResponse.ok || !itemResponse.ok) {
          throw new Error(`HTTP error!`);
        }

        const priceJson = await priceResponse.json();
        const itemJson = await itemResponse.json();
        setData(priceJson)

        setCacheData(queryKey, [itemJson, priceJson])

      } catch (e) {
        console.error(e);
    }

    fetchData();
  }, [inputValue]);

  return [data];
};
export default useAlbionOnlineDataFetcher
    */}
