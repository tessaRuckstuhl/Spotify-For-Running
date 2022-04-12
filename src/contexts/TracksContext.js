import React, {
  createContext,
  useContext,
  useState,
} from 'react';

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
