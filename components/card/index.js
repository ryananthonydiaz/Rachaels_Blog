import React from 'react';
import Link from 'next/link'
import Date from '../date'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({ data: { id, date, title } }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="h2">
          {date}
        </Typography>
      </CardContent>
      <CardActions>
      <Link href={`/posts/${id}`}>
          <a>lkajsdlkjasdlkfj</a>
      </Link>
      </CardActions>
    </Card>
  );
}