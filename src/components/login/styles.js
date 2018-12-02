const styles = theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing.unit * 3,
    minHeight: '100vh'
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    textAlign: 'center',
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 340,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  logo: {
    height: 100,
    width: '100%',
    backgroundSize: 'auto'
  },
  message: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  paper: {
    marginTop: theme.spacing.unit * 6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`
  },
  submit: {
    marginTop: theme.spacing.unit * 4
  },
  buttonProgress: {
    position: 'absolute',
    left: '50%',
    marginTop: 40,
    marginLeft: -12
  },
  footer: {
    margin: theme.spacing.unit * 3
  }
});

export default styles;
