import logo from '../../../shared/images/logo-white.svg';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1
  },
  menu: {
    color: '#ffffff !important',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    backgroundImage: `url(${logo})`,
    height: 40,
    width: 110,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  inputRoot: {
    color: 'inherit',
    width: '100%'
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

export default styles;
