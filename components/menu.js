import React from 'react'
import { LOGO, colors } from '../config'
import { Container, Menu, Icon, Image } from 'semantic-ui-react'

export default ({ userName, pathName }) => {
  return (
    <Menu style={{ background: colors.color1 }} fixed='top' borderless stackable>
      <Container>
        <Menu.Item as='a' href='/'>
          <Image size='mini' src={LOGO} style={{ marginRight: '1.5em' }} />
          <div>
            <span style={{ fontSize: '20px', marginRight: '20px' }}>MinElev</span>
            <span>{userName}</span>
          </div>
        </Menu.Item>
        <Menu.Menu position='right' icon='labled'>
          <Menu.Item name='home' as='a' href='/' active={pathName === '/'}>
            <Icon name='home' size='large' />
            Hjem
          </Menu.Item>
          <Menu.Item as='a' href='/activity' active={pathName === '/activity'}>
            <Icon name='list' size='large' />
            Aktivitet
            </Menu.Item>
          <Menu.Item name='stats' as='a' href='/stats' active={pathName === '/stats'}>
            <Icon name='bar graph' size='large' />
            Statistikk
          </Menu.Item>
          <Menu.Item name='help' as='a' href='/help' active={pathName === '/help'}>
            <Icon name='help circle outline' size='large' />
            Hjelp
          </Menu.Item>
          <Menu.Item name='logout' as='a' href='/logout' active={pathName === '/logout'}>
            <Icon name='shutdown' size='large' />
            Logg av
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}
