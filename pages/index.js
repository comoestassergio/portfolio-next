import Head from 'next/head'
import Hero from '../components/Hero'

export default function Home() {

  const info = {
    firstName: 'Sergey',
    lastName: 'Chernyavskiy',
    title: 'Front-end Developer',
    text: "I'm a web dev based in Russia. Wanna make a cool web app or create a stunning design? Hit me up, I'd love to connect."
  }
  

  return (
    <>
      <Head>
        <title>comoestassergio</title>
      </Head>

      <Hero
        firstName={info.firstName}
        lastName={info.lastName}
        title={info.title}
        text={info.text}
      />
    </>
  )
}
