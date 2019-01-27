const cardContent = {
  flexGrow: 1
}

const blackBackGround = {
  backgroundColor: 'black'
}

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  buttons: {
    marginTop: 16
  },
  blackCardTitle: {
    color: 'white'
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  blackBackGround,
  blackCardContent: {
    ...cardContent,
    ...blackBackGround
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6
  },
  heroUnit: {
    backgroundColor: theme.palette.background.paper
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
  whiteTextField: {
    backgroundColor: 'white',
    width: '100%'
  }
})

export default styles
