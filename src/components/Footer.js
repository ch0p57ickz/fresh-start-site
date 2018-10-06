import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react'

const Footer = (mobile) => (
  <Segment inverted vertical style={{ padding: mobile ? '2em 0em' : '5em 0em' }}>
    <Container>
      <Grid divided inverted>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='About' />
            <List link inverted>
              <List.Item as='a' href="#home">Home</List.Item>
              <List.Item as='a' href="#currentProjects">Current Projects</List.Item>
              <List.Item as='a' href="#pastProjects">Past Projects</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={3}>
            <Header inverted as='h4' content='Social Media' />
            <List link inverted>
              <List.Item as='a' href="https://facebook.com/ch0p57ickz">Facebook</List.Item>
              <List.Item as='a'>LinkedIn</List.Item>
              <List.Item as='a'>Twitter</List.Item>
              <List.Item as='a'>Github</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as='h4' inverted>
              Hello World!
            </Header>
            <p>
              Built on Semantic UI React - October 2018
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>)

Footer.propTypes = {
  mobile: PropTypes.bool,
}
  
export default Footer;