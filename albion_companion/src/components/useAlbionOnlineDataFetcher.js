import React, {useState, useEffect} from 'react';


// Data fetcher for albion-online-data.com
// https://www.albion-online-data.com/api-info/api-info.html
// https://west.albion-online-data.com/api/v2/stats/prices/T4_BAG,T5_BAG.json?locations=Caerleon,Bridgewatch&qualities=2


const useAlbionOnlineDataFetcher = (inputValue) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const nameToAPI={
    "Holy Staff": "MAIN_HOLYSTAFF",
    "Great Holy Staff": "2H_HOLYSTAFF",
  }
  {/*console.info(inputValue)*/}
  const API_URL = `https://west.albion-online-data.com/api/v2/stats/prices/T${inputValue[1]}_${nameToAPI[inputValue[0]]}?locations=Lymhurst`;

  useEffect(() => {
    if (!inputValue) {
      setLoading(false);
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
