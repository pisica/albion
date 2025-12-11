import React, {useState, useEffect} from 'react';
import { useCache } from '../context/CacheContext';


// Data fetcher for albion-online-data.com
// https://www.albion-online-data.com/api-info/api-info.html
// https://west.albion-online-data.com/api/v2/stats/prices/T4_BAG,T5_BAG.json?locations=Caerleon,Bridgewatch&qualities=2


const useFragmentPriceFetcher = (inputValue) => {
  const [fragData, setFragData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { getCacheData, setCacheData } = useCache();

  const fragments = {
    'runes':'T4_RUNE,T5_RUNE,T6_RUNE,T7_RUNE,T8_RUNE',
    'souls':'T4_SOUL,T5_SOUL,T6_SOUL,T7_SOUL,T8_SOUL',
    'relics':'T4_RELIC,T5_RELIC,T6_RELIC,T7_RELIC,T8_RELIC',
  }
  function getURL(fragment){
    return `https://west.albion-online-data.com/api/v2/stats/prices/${fragments[fragment]}?locations=Lymhurst&qualities=1`;
  }

  useEffect(() => {
    console.log(`inputValue: ${inputValue}`);
    if (!inputValue) {
      setLoading(false);
      return
    }
    console.log(`running fragment useEffect ${inputValue}`)

    const fetchData = async () => {
      const resultsMap = new Map();
      const fragmentsToFetch = [];
      const finalData = {};

      for (const fragment of inputValue) {
        const cachedItem = getCacheData(fragment);
        if (cachedItem) {
          console.log(`Cache Hit for: ${fragment}`);
          resultsMap.set(fragment, cachedItem)
        } else {
          fragmentsToFetch.push(fragment)
        }
      }

      if (fragmentsToFetch.length === 0) {
        inputValue.forEach(fragment => {
          finalData[fragment] = resultsMap.get(fragment);
        });
        setFragData(finalData);
        setLoading(false);
        return;
      }

      console.log(`Fetching ${fragmentsToFetch} prices out of ${inputValue}`);

      try {
        const promises = fragmentsToFetch.map(fragment => {
          const URL = getURL(fragment);
          console.info(URL);
          return fetch(URL)
            .then(res => {
              if (!res.ok) {
                throw new Error(`Failed to fetch price for ${fragment}: Status ${res.status}`);
              }
              console.info(res.json)
              return res.json();
            })
            .then(priceData => ({fragment, data: priceData}));
        });

        const newResults = await Promise.all(promises);
        console.info(newResults);

        newResults.forEach(({ fragment, data: priceData }) => {
          setCacheData(fragment, priceData);
          resultsMap.set(fragment, priceData);
        });

        inputValue.forEach(fragment => {
          finalData[fragment] = resultsMap.get(fragment);
        });
        console.info(finalData);

        setFragData(finalData);
      } catch (e) {
        console.error(e);
        setError(e.message);
        setFragData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [inputValue]);

  console.info(fragData);
  return { fragData, loading, error };

}
export default useFragmentPriceFetcher
