import { makeStyles, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(({ breakpoints }) => {
  return createStyles({
    wrapper: {
      margin: '0 auto',
      maxWidth: '1200px',
      width: '100%',
    },
    container: {
      margin: '10px 0',
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
