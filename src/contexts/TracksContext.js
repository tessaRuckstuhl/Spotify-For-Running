import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import decodeHashParams from '../utils/decodeHashParams';

const TracksContext = createContext();

export function TracksContextProvider({ children }) {
  const [tracks, setTracks] = useState([]);

  return (
    <TracksContext.Provider value={{ tracks, setTracks }}>
      {children}
    </TracksContext.Provider>
  );
}
export function useTracks() {
  const context = useContext(TracksContext);
  console.log(context);
  if (context === undefined) {
    throw new Error('Context must be within provider');
  }
  return context;
}
export default TracksContext;
