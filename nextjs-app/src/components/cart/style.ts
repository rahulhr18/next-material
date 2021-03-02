import { makeStyles, createStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(({ breakpoints }) => {
  return createStyles({
    wrapper: {
      margin: '0 auto',
      maxWidth: '1200px',
      width: '100%',
    },
    cart: {
       margin: '0',
       left: '74%',
       top: '66%',
       position: 'absolute',
    },
    table: {
      width: '100%',
      borderSpacing: '0',
    },
    td: {
      padding: '1em',
      borderBottom: 'solid 1px #cfd7de',
    },
  })
})
