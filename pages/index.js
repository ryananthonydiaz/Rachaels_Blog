import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import { v4 as uuidv4 } from 'uuid';
import Card from '../components/card';
import Grid from '@material-ui/core/Grid';
import utilStyles from '../styles/utils.module.css'


export default function Home({ allPostsData }) {
  console.log(allPostsData)
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>I love to fuck shit up!</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>

        <Grid container justify="center" spacing={4}>
          <Grid item>
            {allPostsData.map(data => <Card key={uuidv4()} data={data} />)}
          </Grid>
        </Grid>
        </ul>
      </section>
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
