import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(2)
  }
}));

export default function Home({ allPostsData }) {
  const classes = useStyles();

  return (
    <Layout allPostsData={allPostsData}>
      <Grid item container alignItems="center" justify="center" className={classes.root}>
        {allPostsData.map(data => <Card key={uuidv4()} data={data} />)}
      </Grid>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
