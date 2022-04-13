const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#0856EE',
    },
    secondary: {
      main: '#f72585',
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
          },
          '&.MuiButton-outlined': {
            background: 'none',
            border: '1px solid white',
            color: 'white',
            '&:hover': {
              border: '1px solid #0856EE',
              color: '#0856EE',
            },
            '&.Mui-disabled': {
              borderColor: 'gray',
              color:'gray'
            },
          },
        },
      },
    },
    // Table
    MuiTableContainer: {
      styleOverrides: {
        root: {
          background: '#88888824',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid white',
        },
        head: {
          background: 'rgb(0, 9, 54)',
          color: 'white',
          borderBottom: '1px solid white',
          borderTop: '1px solid white',
          fontWeight: 600,
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
