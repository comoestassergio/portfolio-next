import Head from 'next/head'
import Hero from '../components/Hero'
import authorInfo from '../data/authorInfo'
import siteMetadata from '../data/siteMetadata'

export default function Home() {

  return (
    <>
      <Head>
        <title>{siteMetadata.name}</title>
      </Head>

      <Hero
        firstName={authorInfo.firstName}
        lastName={authorInfo.lastName}
        title={authorInfo.title}
        text={authorInfo.description}
      />
    </>
  )
}
