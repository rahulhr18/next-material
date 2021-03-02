import { makeStyles, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(({ breakpoints }) => {
  return createStyles({
    root: {
    marginLeft: '20px',
    padding: '0 16px',
    display: 'flex',
    maxWidth: '1440px',
  },
  content: {
    flexBasis: '100%',
  },
    cart: {
    display: 'flex',
    margin: '0 0 0 -15%',
    alignSelf: 'flex-start'
    },
    button: {
      color: 'white',
      fontFamily: 'inherit',
      fontSize: '.9em',
      fontWeight: '700',
      backgroundColor: 'blueviolet',
      padding: '.8em 1.4em',
      borderRadius: '.2em',
      border: '0',
      boxShadow: '0 2px 6px rgba(0, 0, 0, .4)',
      cursor: 'pointer',
    },
    container: {
      margin: '10px 40px',
      width: '20%',
      display: 'inline-block',
    },
    cardimage: {
      width: '60%',
    },
    imgnew: {
      width: '150%',
      margin: '10px 5px',
    },
    proddet: {
      left: '47%',
      top: '30%',
      position: 'absolute',
    },
    cardtitle: {
      width: '60%',
      fontSize:'10px',
      marginTop:'24px',
    },
    cardprice: {
      position: 'relative',
      fontSize:'10px',
      bottom:'21px',
      left:'34%',
    },
    caresection: {
      backgroundColor: '#eee',
      width: '100%',
      margin: '0',
      padding: '10px',
      textAlign: 'center',
      [breakpoints.down('lg')]: {
        position: 'relative',
        top: '0px',
        left: '0',
        // 'width': '95%'
      },
    },
    caresubsection: {
      backgroundColor: '#eee',
      width: '100%',
      margin: '0',
      padding: '10px',
      textAlign: 'left',
      [breakpoints.down('lg')]: {
        position: 'relative',
        top: '0px',
        left: '0',
        // 'width': '95%'
      },
    },
  })
})
