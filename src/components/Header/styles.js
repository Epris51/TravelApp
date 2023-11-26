// styles.js
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.2)',
    background: 'linear-gradient(45deg, #3A8DFF, #86B9FF)',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    color: '#FFF',
    fontWeight: 600,
    letterSpacing: '1px',
    fontSize: '1.5rem',
  },
  logo: {
    marginRight: theme.spacing(1),
    fontWeight: 'bold',
    background: 'white',
    padding: '5px 10px',
    borderRadius: '8px',
    color: '#3A8DFF',
    fontSize: '1.2rem',
  },
  // Other styles that may be specific to your application can go here
}));

