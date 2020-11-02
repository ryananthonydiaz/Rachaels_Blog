import { getAllPostIds, getPostData, getSortedPostsData } from '../../lib/posts'
import Layout from '../../components/layout'
import Head from 'next/head'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  gridItem: {
    maxWidth: 500,
    marginBottom: 20,
  },
  paper: {
    maxWidth: 500,
    padding: theme.spacing(2)
  }
}));

export default function Post({ postData, allPostsData }) {
  const classes = useStyles();

  return (
    <Layout allPostsData={allPostsData}>
      <Head>
        <title>{postData.title}</title>
      </Head>
        <Grid direction="column" alignItems="center" justify="space-evenly" container className={classes.root}>
          <Grid className={classes.gridItem} item>
            <Paper className={classes.paper} elevation={3}>
              <Typography variant="h4" align="center" gutterBottom>
                {postData.title}
              </Typography>
              <Typography variant="subtitle1" align="center">
                <Date dateString={postData.date} />
              </Typography>
            </Paper>
          </Grid>
          <Grid className={classes.gridItem} item>
            <Paper className={classes.paper} elevation={3}>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </Paper>
          </Grid>
        </Grid>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  const allPostsData = getSortedPostsData() // TODO: only get the IDs not all the posts but for now this will work
  return {
    props: {
      postData,
      allPostsData,
    }
  }
}