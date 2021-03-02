import React from 'react'
import { useStyles } from './style'

export const NextJsTraining: React.FC = () => {
  const classes = useStyles()
  return (
    <div
      id="about-training"
      className={classes.wrapper}
    >
      <div className={classes.container}>
        <div className={classes.caresection}>
            <h1>My Awesome shopping site</h1>
            <h2>Men's t-shirt, Sweatshirt</h2>
        </div>
      </div>
    </div>
  )
}
