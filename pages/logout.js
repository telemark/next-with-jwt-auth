import React from 'react'
import Router from 'next/router'
import Page from '../components/page'

class SignOut extends React.Component {
  componentDidMount () {
    if (process.browser) {
      window.localStorage.removeItem('token')
      Router.push('/')
    }
  }

  render () {
    return (
      <div>signing out...</div>
    )
  }
}

export default Page(SignOut)
