import React, { createContext, useContext, useState } from 'react';

const CacheContext = createContext();

export const useCache = () => {
  return useContext(CacheContext);
}

export function CacheProvider({ children }) {
  const [cache, setCache] = useState(new Map());

  const getCacheData = (queryKey) => {
    return cache.get(queryKey);
  };

  const setCacheData = (queryKey, data) => {
    setCache(prevCache => {
      const newCache = new Map(prevCache);
      newCache.set(queryKey, data);
      return newCache;
    });
  }

  const contextValue = {
    getCacheData,
    setCacheData,
  };

  return (
    <CacheContext.Provider value={contextValue}>
      {children}
    </CacheContext.Provider>
  )
}

