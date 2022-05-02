const darkTheme = {
  typography: {
    fontFamily: `"Londrina Solid", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  palette: {
    type: 'dark',
    primary: {
      main: 'rgb(100, 116, 139)',
    },
    secondary: {
      main: '#4b6197',
    },
    text: {
      primary: '#000000',
      secondary: '#000000',
    },
    background: {
      paper: '#252525',
      default: '#303030',
    },
  },
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          fontWeight: 300,
        },
      },
    },
    // Button
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            color: '#545454',
          },
          '&.MuiButton-outlined': {
            background: 'none',
            '&:hover': {
              border: '1px solid rgb(100, 116, 139)',
              color: 'rgb(100, 116, 139)',
            },
            '&.Mui-disabled': {
              borderColor: '#545454',
              color: '#545454',
            },
          },
        },
      },
    },
    // Table
    MuiTableContainer: {
      styleOverrides: {
        root: {
          background: 'transparent',
          boxShadow: 'none',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          tableLayout: 'fixed',
        },
      },
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          overflow: 'auto',
          height: '450px',
          display: 'block',
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          display: 'table',
          width: '100%',
          tableLayout: 'fixed',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: '1px solid #88888824',
          fontWeight: 200,
        },
        head: {
          background: 'transparent',
          color: '#000000',
          fontWeight: 400,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontWeight: 200,
          background: '#000000',
          fontSize: '0.8rem',
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          color: '#000000',
        },
        valueLabel: {
          background: '#000000',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: 'rgb(218 216 203)',
        },
      },
    },
  },
};

export default darkTheme;
