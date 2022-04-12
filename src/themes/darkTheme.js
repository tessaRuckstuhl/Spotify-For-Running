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
      },
    },
    // Button
    MuiButton: {
      styleOverrides: {
        root: {
          background: '#0856EE',
          '&.Mui-disabled': {
            background: '#072270',

          }
        },
      },
    },
    // Table
    MuiTableContainer: {
      styleOverrides: {
        root: {
          background: '#04021E',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: '#04021E',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #070424',
        },
        head: {
          background: '#04021E',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#04021E',
        },
      },
    },
  },
};

export default darkTheme;
