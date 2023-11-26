import { alpha, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

  // APP BAR STYLES
  appBar: {
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
    background: 'linear-gradient(45deg, #3A8DFF, #86B9FF)',
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
    position: 'relative'
  },

  // SEARCH INPUT STYLES
  searchInput: {
    marginBottom: theme.spacing(1),
    backgroundColor: alpha(theme.palette.common.white, 0.9),
    borderRadius: '25px',
    transition: '0.3s',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 1),
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.2)',
    },
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: '#3A8DFF',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#3A8DFF',
        borderWidth: '2px',
      },
    },
    '& .MuiOutlinedInput-input': {
      padding: '12px 15px',
    },
    '& .MuiInputAdornment-root:hover': {
      cursor: 'pointer',
      color: '#3A8DFF',
    }
  },

  // MARKER CONTAINER STYLES
  markerContainer: {
    position: 'absolute',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
    '& > img': {
      height: '50px',
      width: '50px'
    }
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
    textAlign: 'center'
  }
}));

