import React, { useState, useEffect } from 'react';
import { useCache } from '../context/CacheContext';

// ... other imports ...

const useAlbionOnlineDataFetcher = (inputValue) => {
  const { getCacheData, setCacheData } = useCache();

  // 1. **ADD STATE HERE** to hold the data, loading status, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const PRICE_API_URL = `https://west.albion-online-data.com/api/v2/stats/prices/${inputValue},${inputValue}@1,${inputValue}@2,${inputValue}@3,${inputValue}@4?locations=Lymhurst&qualities=1`;
  const ITEM_DATA_API_URL = `https://corsproxy.io/https://gameinfo.albiononline.com/api/gameinfo/items/${inputValue}/data`;

  useEffect(() => {
    if (!inputValue) {
      setData(null);
      return;
    }

    const queryKey = inputValue;

    const cachedData = getCacheData(queryKey);
    if (cachedData) {
      console.log(`Cache Hit for: ${queryKey}`);
      // Set the cached data to state
      setData(cachedData); 
      return;
    }

    const fetchData = async () => {
      setLoading(true); // Start loading
      setError(null);     // Clear previous errors

      try {
        console.info(PRICE_API_URL);
        console.info(ITEM_DATA_API_URL);
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
        setLoading(false); // Stop loading regardless of success/fail
      }
    };

    fetchData();
  }, [inputValue, getCacheData, setCacheData]); // Include cache functions in dependencies

  return { data, loading, error }; 
};

export default useAlbionOnlineDataFetcher;

