import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  card: {
    borderRadius: '15px',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)', // subtle shadow added
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.22)', // more pronounced shadow on hover
    },
    //backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
  media: {
    height: 300,
    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
    '@media (max-width:600px)': {
      height: 200,
    },
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.6rem',
    color: theme.palette.text.secondary,
  },
  chip: {
    margin: '5px 5px 5px 0',
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.secondary.main} 90%)`,
    color: 'white',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    },
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: theme.palette.text.secondary,
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: '8px',
  },
  spacing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  cardActions: {
    justifyContent: 'space-between',
  },
}));
