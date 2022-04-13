import React, {
  createContext,
  useContext,
  useState,
} from 'react';

const TracksContext = createContext();

export function TracksContextProvider({ children }) {
  const [tracks, setTracks] = useState([]);
  const [name, setName] = useState('')

  return (
    <TracksContext.Provider value={{ tracks, setTracks, setName, name }}>
      {children}
    </TracksContext.Provider>
  );
}
export function useTracks() {
  const context = useContext(TracksContext);
  if (context === undefined) {
    throw new Error('Context must be within provider');
  }
  return context;
}
export default TracksContext;
