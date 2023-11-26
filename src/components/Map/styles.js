import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // APP BAR STYLES
  appBar: {
    boxShadow: 'none',
    background: 'none',
  },

  // TOOLBAR STYLES
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // TITLE STYLES
  title: {
    display: 'flex',
    alignItems: 'center',
    color: '#FFF',
    fontWeight: 600,
    letterSpacing: '1px',
    fontSize: '1.5rem',
  },

  // LOGO STYLES
  logo: {
    marginRight: theme.spacing(1),
    fontWeight: 'bold',
    background: 'white',
    padding: '5px 10px',
    borderRadius: '8px',
    color: '#3A8DFF',
    fontSize: '1.2rem',
  },

  // MAP CONTAINER STYLES
  mapContainer: {
    height: '85vh',
    width: '100%',
    position: 'relative',
  },

  // SEARCH INPUT STYLES
  searchInput: {
    position: 'absolute',
    top: theme.spacing(2),
    left: '50%',
    transform: 'translateX(-50%)',
    width: 'calc(100% - 40px)',
    maxWidth: '400px',
    zIndex: 5,
    margin: theme.spacing(1),
    backgroundColor: alpha(theme.palette.common.white, 0.95),
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    boxShadow: theme.shadows[3],
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 1),
      boxShadow: theme.shadows[4],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderWidth: '1px',
        borderColor: alpha(theme.palette.primary.main, 0.5),
      },
      '&:hover fieldset': {
        borderColor: theme.palette.primary.main,
      },
      '&.Mui-focused fieldset': {
        borderColor: theme.palette.primary.main,
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: theme.spacing(1),
    },
    '& .MuiInputAdornment-root:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
  },

  // MARKER CONTAINER STYLES
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '& > img': {
      height: '50px',
      width: '50px',
    },
  },

  // PAPER STYLES
  paper: {
    padding: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100px',
  },

  // POINTER STYLES
  pointer: {
    cursor: 'pointer',
  },

  // TYPOGRAPHY STYLES
  typography: {
    textAlign: 'center',
  },
}));


