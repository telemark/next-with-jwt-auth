import React from 'react'
import Page from '../components/page'
import Search from '../components/search'
import getData from '../lib/get-data'
import { Button } from 'semantic-ui-react'
import { colors, TEST_URL } from '../config'

class Index extends React.Component {
   constructor (props) {
      super(props)
      this.state = {}
    }

  render () {
    const { userName, userId } = this.props
    const { someData, dataLoading } = this.state
    return (
      <div>
        <div>
          <Search/>
          <Button loading={dataLoading} primary onClick={this.handleClick} style={{background: colors.color3}}>
            Get Data
          </Button>
        </div>
        {someData ? <div>Data received with jwt: {someData.asd}</div> : false}
      </div>
    )
  }

  handleClick = async () => {
    this.setState({ dataLoading: true })
    const data = await getData(TEST_URL, this.props.token)
    this.setState({ someData: data, dataLoading: false })
  }
}

export default Page(Index)
