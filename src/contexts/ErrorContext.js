import { Snackbar } from '@mui/material';
import React, {
  createContext,
  useContext,
  useState,
} from 'react';

const ErrorContext = createContext();

export function ErrorContextProvider({ children }) {
  const [snack, setSnack] = useState({
    open: false,
    message: '',
  });


  const showSnack = (msg) => {
    setSnack({ open: true, message: msg });
  };

  const handleClose = () => {
    setSnack({ open: false, message: '' });
  };
  return (
    <ErrorContext.Provider
      value={{ snack, showSnack }}
    >
      {children}
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={snack.open}
        message={snack.message}
        autoHideDuration={4000}
        onClose={handleClose}
      />
    </ErrorContext.Provider>
  );
}
export function useErrorSnack() {
  const context = useContext(ErrorContext);
  if (context === undefined) {
    throw new Error('Context must be within provider');
  }
  return context;
}
export default ErrorContext;
