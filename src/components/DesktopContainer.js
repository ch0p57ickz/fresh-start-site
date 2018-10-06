import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Icon,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react'
import HomepageHeading from './HomepageHeading'
import CurrentProject from './CurrentProject'
import Summary from './Summary'
import PastProjects from './PastProjects'
import Footer from './Footer'

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            textAlign='center'
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' href="/" active>
                  Home
                </Menu.Item>
                <Menu.Item as='a' href="#currentProjects">Current Projects</Menu.Item>
                <Menu.Item as='a' href="#pastProjects">Past Projects</Menu.Item>
                <Menu.Item position='right'>
                  <Button color='facebook' as='a' href='https://facebook.com/ch0p57ickz'>
                    <Icon name='facebook' /> Facebook
                  </Button>
                  <Button color='linkedin' style={{ marginLeft: '0.5em' }} as='a' href="https://www.linkedin.com/in/james-prompanya-a0241913">
                    <Icon name='linkedin' /> LinkedIn
                  </Button>
                  <Button color='twitter' style={{ marginLeft: '0.5em' }} as='a' href='https://twitter.com/jamespromp'>
                    <Icon name='twitter' /> Twitter
                  </Button>
                  <Button style={{ marginLeft: '0.5em' }} as='a' href='https://github.com/ch0p57ickz'>
                    <Icon name='github' /> GitHub
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>
    <CurrentProject />
    <Summary />
    <PastProjects />
    <Footer />
        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer;