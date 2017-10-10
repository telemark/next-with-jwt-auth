import React from 'react'
import Head from 'next/head'
import { Segment, Container } from 'semantic-ui-react'
import Menu from './menu'
import { version } from '../package.json'

const layout = Page => {
  return class WrapWithLayout extends React.Component {
    static getInitialProps (context) {
      return Page.getInitialProps
        ? Page.getInitialProps(context)
        : {}
    }
    render () {
      const { userName, pathName } = this.props
      return (
        <div>
          <Head>
            <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.13/semantic.min.css' />
            <link rel='icon' sizes='192x192' href='/static/icons/chrome-touch-icon-192x192.png' />
            <link rel='apple-touch-icon' href='/static/icons/apple-touch-icon-precomposed.png' />
            <link rel='shortcut icon' href='/static/icons/favicon.ico' />
            <title>MinElev {version}</title>
          </Head>
          <style jsx global>
            {`
              body {
                font-family: 'Helvetica','Arial','sans-serif' !important;
              }
              input[type=text] {
                width: 300px;
                font-size: 16px;
                border: 0px !important;
                border-radius: unset !important;
                border-bottom: 1px solid #eee !important;
              }
              input[type=text]:focus {
                border-color: #000 !important;
              }
            `}
          </style>
          <Menu userName={userName} pathName={pathName} />
          <Segment textAlign='center' style={{ minHeight: 700, padding: '1em 0em' }} vertical>
            <Container text style={{ marginTop: '7em' }} />
            <Page {...this.props} />
          </Segment>
        </div>
      )
    }
  }
}

export default layout
