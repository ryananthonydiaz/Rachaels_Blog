import Head from 'next/head'
import Link from 'next/link'
import BlogAppBar from './BlogAppBar';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    overflowX: 'hidden',
    marginTop: theme.mixins.toolbar.minHeight,
    marginBottom: theme.mixins.toolbar.minHeight,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.mixins.toolbar['@media (min-width:600px)'].minHeight,
      marginBottom: theme.mixins.toolbar['@media (min-width:600px)'].minHeight,
    }
  },
}));

export const siteTitle = 'RVCH.DIVZ'

export default function Layout({ allPostsData, children, home }) {
  const classes = useStyles();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />

      </Head>
      <header>
        <BlogAppBar allPostsData={allPostsData} />
      </header>
      <main className={classes.root}>
        <Grid justify="center" alignItems="center" container>
          {children}
        </Grid>
      </main>
      {!home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </>
  )
}