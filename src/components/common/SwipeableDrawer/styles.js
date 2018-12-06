import logo from '../../../shared/images/ipact-logo.svg';

const styles = theme => ({
  header: {
    // height: 150,
  },
  headerLogo: {
    width: '100%',
    height: 60,
    marginTop: theme.spacing.unit * 2,
    backgroundImage: `url(${logo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain'
  },
  headerDetail: {
    marginTop: theme.spacing.unit
  },
  list: {
    width: 250
  },
  link: {
    textDecoration: 'none'
  },
  fullList: {
    width: 'auto'
  }
});

export default styles;
