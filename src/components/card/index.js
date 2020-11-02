import React from 'react';
import Link from 'next/link'
import Date from '../date'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 14,
  },
}));

export default function SimpleCard({ data: { id, date, title } }) {
  const classes = useStyles();

  return (
    <Grid item container justify="center">
      <Grid>
      <Card className={classes.root} raised>
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {title}
          </Typography>
          <Typography variant="h5" component="h2">
            <Date dateString={date} />
          </Typography>
        </CardContent>
        <CardActions>
        <Link href={`/posts/${id}`}>
            <a>lkajsdlkjasdlkfj</a>
        </Link>
        </CardActions>
      </Card>
      </Grid>
    </Grid>
  );
}