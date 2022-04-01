const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#0856EE',
    },
    secondary: {
      main: '#8e438e',
    },
    text: {
      primary: 'rgba(255,255,255,0.87)',
      secondary: '#fff',
    },
    background: {
      paper: '#252525',
      default: '#303030',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: { color: 'white' },
        input: {
          color: 'white',
        },
      },
    },
  },
};

export default darkTheme;
