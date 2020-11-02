import { getAllPostIds, getPostData } from '../../lib/posts'
import Layout from '../../components/layout'
import Head from 'next/head'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    maxWidth: 500,
    padding: theme.spacing(2)
  }
}));

export default function Post({ postData }) {
  const classes = useStyles();

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
        <Grid justify="center" container>
          <Grid item>
            <h1>{postData.title}</h1>
            <div>
              <Date dateString={postData.date} />
            </div>
          </Grid>
          <Grid item>
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
  return {
    props: {
      postData
    }
  }
}