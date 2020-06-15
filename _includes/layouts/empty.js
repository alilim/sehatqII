import Head from 'next/head'

import { EmptyLayoutContainer,  EmptyLayoutBody, EmptyLayoutBodyContainer } from './layout.styles'

const EmptyLayouts = ({ children, ...props }) => {
  return (
    <EmptyLayoutContainer>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <link rel='canonical' href='http://localhost:3000/' />
        <title key='title'>SehatQ</title>
        <meta property='fb:app_id' content='xxx' />
        <meta name='description' key='description' content='xxx' />
        <meta name='keywords' content=' xxx' />
        <meta property='og:locale' content='Id_ID' />
        <meta property='og:title' key='og:title' content='xxx' />
        <meta property='og:description' key='og:description' content='xxx' />
        <meta property='og:type' content='website' />
        <meta property='og:site_name' content='xxx' />
        <meta property='og:url' key='og:url' content='http://localhost:3000/' />
        <meta property='og:image' key='og:image' content='http://localhost:3000/' />
        <meta property='og:image:url' key='og:image:url' content='http://localhost:3000/' />
        <meta property='og:image:type' content='jpg' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='628' />
        <meta property='og:image:alt' content='xxx' />
        <meta property='og:twitter:card' content='Summary' />
        <meta property='og:twitter:title' key='og:twitter:title' content='xxx' />
        <meta property='og:twitter:desc' key='og:twitter:desc' content='xxx' />
        <meta property='og:twitter:site' content='@xxx' />
      </Head>
      <EmptyLayoutBody>
        <EmptyLayoutBodyContainer>{children}</EmptyLayoutBodyContainer>
      </EmptyLayoutBody>
    </EmptyLayoutContainer>
  )
}

export default EmptyLayouts