import React from 'react'
import Router from 'next/router'
import { AUTH_URL } from '../config'
import jwt from 'jsonwebtoken'

const session = Page => {
  return class extends React.Component {
    constructor (props) {
      super(props)
      this.state = {}
    }

    static async getInitialProps ({ query, pathname }) {
      return {
        query,
        pathname
      }
    }

    componentDidMount () {
      const token = window.localStorage.getItem('token')
      const queryToken = this.props.query.jwt || false
      const pathName = this.props.pathname
      const nextUrl = this.props.url.query.next

      this.setState({ token: token })
      if (!queryToken && !token) {
        const redir = nextUrl ? `${AUTH_URL}&next=${nextUrl}` : AUTH_URL
        Router.push(redir)
      } else if (queryToken) {
        const { data } = jwt.decode(this.props.query.jwt)
        const { userName, userId } = data

        window.localStorage.setItem('token', this.props.query.jwt)
        window.localStorage.setItem('userName', userName)
        window.localStorage.setItem('userId', userId)
        Router.push('/')
      } else {
        const userName = window.localStorage.getItem('userName')
        const userId = window.localStorage.getItem('userId')
        this.setState({ token, userName, userId, pathName })
      }
    }

    render () {
      return <Page {...this.state} />
    }
  }
}

export default session
