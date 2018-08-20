import React from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Label,
  List,
  Segment,
  Table
} from 'semantic-ui-react'
import { Image, Transformation } from 'cloudinary-react'

const PastProjects = ({ mobile }) => (
  <Segment vertical>
    <Divider
      as='h4'
      className='header'
      horizontal
      style={{ margin: '3em 0em', textTransform: 'uppercase' }}
    >
      <a href='#'>Past Projects</a>
    </Divider>

    <Container text>

      <Segment>
        <Label as='a' color='blue' ribbon>
          Video Game Credits
        </Label>
        <Table celled>
          <Table.Body>
          <Table.Row>
            <Table.Cell textAlign="center">Galactic Reign <br/>(Windows 8 / Windows Phone 7)</Table.Cell>
            <Table.Cell textAlign="center">Microsoft Bingo <br/>(Windows 8 / Windows Phone 8)</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign="center">World Series of Poker <br/>(Xbox 360 Arcade)</Table.Cell>
            <Table.Cell textAlign="center">Ascend: Hand of Kul <br/>(Xbox 360 Arcade)</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign="center">Launchworks titles <br/>(Xbox One)</Table.Cell>
            <Table.Cell textAlign="center"></Table.Cell>
          </Table.Row>
          </Table.Body>
        </Table>
      </Segment>

      <Segment>
        <Label as='a' color='red' ribbon>
          Microsoft Ship-it Awards
        </Label>
        <span>Awarded for contribution towards key software releases at Microsoft</span>
        <Table celled>
          <Table.Body>
          <Table.Row>
            <Table.Cell textAlign="center">HPC Pack 2008 R2</Table.Cell>
            <Table.Cell textAlign="center">Launchworks</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign="center">HPC Pack 2012</Table.Cell>
            <Table.Cell textAlign="center">Age of Empires: Castles</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign="center">Galactic Reign</Table.Cell>
            <Table.Cell textAlign="center">Windows 10</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign="center">Xbox One</Table.Cell>
            <Table.Cell textAlign="center"></Table.Cell>
          </Table.Row>
          </Table.Body>
        </Table>
      </Segment>

      <Header as='h3' style={{ fontSize: '2em' }}>
        MSN.com
        </Header>
      <Header as='h2' style={{ fontSize: '1em' }}>
        Senior Software Engineer, Personalization Team (2014-2017)
        </Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <List>
              <List.Item>
                <Icon name="user circle" />
                <List.Content>
                  <List.Description>Server Infrastructure for implicit personalization based on user activity</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="cloud" />
                <List.Content>
                  <List.Description>Moved machine learning algorithm to the cloud</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="facebook official" />
                <List.Content>
                  <List.Description>Created a plugin for integration with Facebook and other social media apis as part of the relaunched MSN.com</List.Description>
                </List.Content>
              </List.Item>
            </List>

          </Grid.Column>
          <Grid.Column width={6}>
            <Image publicId="MSN-logo-2014-blue_cjxjcf.png" >
              <Transformation effect="trim:0" />
            </Image>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Label>
        Years <Label.Detail>3</Label.Detail>
      </Label>
      <Label color="green">
        Server
            <Label.Detail>C#</Label.Detail>
        <Label.Detail>Azure Cloud Services</Label.Detail>
        <Label.Detail>Service Fabric</Label.Detail>
        <Label.Detail>High Performance Computing</Label.Detail>
      </Label>
      <Label color="blue">
        Client
            <Label.Detail>C#</Label.Detail>
        <Label.Detail>ASP.Net</Label.Detail>
      </Label>

      <Header as='h3' style={{ fontSize: '2em' }}>
        Microsoft Studios
        </Header>
      <Header as='h2' style={{ fontSize: '1em' }}>
        Software Engineer in Test II, Game Test Organization (2013-2014)
        </Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <List>
              <List.Item>
                <Icon name="lab" />
                <List.Content>
                  <List.Description>Founding member of team dedicated to testing/verifying Games-as-a-Service at scale</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="group" />
                <List.Content>
                  <List.Description>Led a group of technically-skilled vendors to build tools, test infrastructure</List.Description>
                </List.Content>
              </List.Item>
              <List.Item>
                <Icon name="xbox" />
                <List.Content>
                  <List.Description>Member of a handful of sign-off, due-diligence teams for game launches, partnerships</List.Description>
                </List.Content>
              </List.Item>
            </List>

          </Grid.Column>
          <Grid.Column width={6}>
            <Image publicId="Microsoft_Studios_logo.svg_qsmyuc.png" >
            </Image>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Label>
        Years <Label.Detail>1</Label.Detail>
      </Label>
      <Label color="green">
        Server
            <Label.Detail>C#</Label.Detail>
        <Label.Detail>Azure Cloud Services</Label.Detail>
        <Label.Detail>Cloud Load Test</Label.Detail>
      </Label>
    </Container>
  </Segment>
)

export default PastProjects