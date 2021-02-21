import Head from 'next/head'

export default function PageHead(props) {
  return (
    <Head>
        <title>{props.pageName} | Zenport</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}