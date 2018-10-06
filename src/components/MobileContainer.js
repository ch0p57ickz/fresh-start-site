import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react'
import HomepageHeading from './HomepageHeading'
import CurrentProject from './CurrentProject'
import Summary from './Summary'
import PastProjects from './PastProjects'
import Footer from './Footer'

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state

    if (sidebarOpened) this.setState({ sidebarOpened: false })
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        <Sidebar.Pushable>
          <Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
            <Menu.Item as='a' href='/' active>
              Home
            </Menu.Item>
            <Menu.Item as='a' href='#currentProjects' onClick={this.handlePusherClick}>Current Projects</Menu.Item>
            <Menu.Item as='a' href='#pastProjects' onClick={this.handlePusherClick}>Past Projects</Menu.Item>
            <Menu.Item>
              <Button color='facebook' as='a' href='https://facebook.com/ch0p57ickz' style={{ width: '100%' }}>
                <Icon name='facebook' /> Facebook
              </Button>
              <Button color='linkedin' as='a' href='https://www.linkedin.com/in/james-prompanya-a0241913' style={{ marginTop: '0.5em', width: '100%'}}>
                <Icon name='linkedin' /> LinkedIn
              </Button>
              <Button color='twitter' as='a' href='https://twitter.com/jamespromp' style={{ marginTop: '0.5em', width: '100%' }}>
                <Icon name='twitter' /> Twitter
              </Button>
              <Button as='a' href='https://github.com/ch0p57ickz' style={{ marginTop: '0.5em', width: '100%' }}>
                <Icon name='github' /> GitHub
              </Button>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher
            dimmed={sidebarOpened}
            onClick={this.handlePusherClick}
            style={{ minHeight: '100vh' }}
          >
            <Segment
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em', borderBottom: 'none' }}
              vertical
            >
              <Container>
                <Menu pointing secondary size='large'>
                  <Menu.Item onClick={this.handleToggle}>
                    <Icon name='sidebar' />
                  </Menu.Item>
                </Menu>
              </Container>
              <HomepageHeading mobile />
            </Segment>
    <CurrentProject mobile />
    <Summary mobile />
    <PastProjects mobile />
    <Footer mobile />
            {children}
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

export default MobileContainer;