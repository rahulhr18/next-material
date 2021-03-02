import { makeStyles, Paper, Typography } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Badge from '@material-ui/core/Badge';
import Button from "@material-ui/core/Button";
import {useState} from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        width: '95%',
        padding: '10px',
        flexDirection: 'column'
    },
    cartColumn: {
        display: 'flex',
        margin: '5px 10px',
        justifyContent: 'space-evenly',
        borderBottom: '2px solid black'
    },
    cartRow: {
        display: 'flex',
        borderBottom: '2px solid black',
        margin: '5px 0'
    },
    cartItem: {
        display: 'flex',
        flexDirection: 'column'
    },
    cartTotal: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '5px 10px',
        backgroundColor: 'green'
    }
}));

export const Cart: React.FC = ({cart, increment, decrement, remove}) => {
    const classes = useStyles();
    return ( <Paper className={classes.root}>
        <Typography variant='h5'>
            Cart Items
            <IconButton aria-label="cart">
                {cart.length}
            </IconButton>
        </Typography>
        <div className={classes.cartColumn} >
            <Typography variant='button' >
                item
            </Typography>
            <Typography variant='button' >
                price
            </Typography>
            <Typography variant='button' >
                quantity
            </Typography>
        </div>
        {cart.map((item) => <div className={classes.cartRow} key={item.id}>
            <div className={classes.cartItem} style={{flex: '1 0 auto'}}>
                <img src={item.image} alt="tshits-cart" style={{width: '60px', height: '60px', alignSelf: 'center'}} />
                <p style={{width: '80px', fontSize: '12px', textAlign: 'center', alignSelf: 'center',
                wordBreak: 'break-word'}}>{item.title}</p>
            </div>
            <b style={{flex: '1 0 auto'}}>{item.price}</b>
            <div style={{display:'flex', flexDirection:'column', flex: '1 0 auto'}}>
            <p style={{textAlign: 'center'}}>{item.quantity}</p>  
            <ButtonGroup size="small" color="primary">
              <Button key={item.id+"inc"} style={{minWidth:"30px"}} onClick={() => increment(item.id)}>+</Button>
              <Button key={item.id-"inc"} style={{minWidth:"30px"}} onClick={() => decrement(item.id)}>-</Button>
            </ButtonGroup>   
            <Button variant="contained" size="small"
              style={{fontSize: '8px', backgroundColor:'#007bff', width:'70%', marginTop:'20px', marginBottom:'10px'}} onClick={() => remove(item.id)}>Remove</Button>
           <div>
          </div>      
        </div>
        </div> )}
        <div className={classes.cartTotal}>
            <Typography variant='h5'>
                Cart Total
            </Typography>
            <Typography variant='h5'>
                {cart.reduce((a, b) => a + (b.price * b.quantity), 0).toFixed(2)}
            </Typography>
        </div>
    </Paper> );
}
