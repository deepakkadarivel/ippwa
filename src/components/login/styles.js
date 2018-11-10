const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    textAlign: 'center',
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 340,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  logo: {
    height: 100,
    width: '100%',
    backgroundSize: 'auto',
  },
  paper: {
    marginTop: theme.spacing.unit * 6,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 4,
  },
  spinner: {
    marginTop: theme.spacing.unit * 4,
  },
  footer: {
    margin: theme.spacing.unit * 3,
  }
});

export default styles;