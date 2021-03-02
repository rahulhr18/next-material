import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link'

const useStyles = makeStyles({
  root: {
    width: 250,
    display: 'inline-table',
  },
  media: {
    height: 140,
    backgroundSize:'contain',
  },
  text: {
    fontSize: 12,
  }
});

export const ProductCard = (props) => {
  const classes = useStyles();
  const { product, children } = props;
  const price = props.product.prod_price;
  const handle = props.product.handle;
  return (
    <Card className={classes.root}>
      <CardActionArea>
      <Link href={`/products/${props.product.handle}`}>
          <a>
        <CardMedia
          className={classes.media}
          key={props.product.id}
          image={props.product.img}
          alt="img"
          title="product img"
        />
        </a>
        </Link>
        <CardContent>
          <Typography className={classes.text} variant="h4" color="textSecondary" component="h3">
            {props.product.title}
          </Typography>
          <Typography variant="h5" color="textSecondary" component="h4">
            <b>$</b>{props.product.prod_price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {children}
      </CardActions>
    </Card>
  );
}
