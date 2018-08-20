import React from 'react'
import {
  Divider,
  Grid,
  Header,
  Label,
  Segment
} from 'semantic-ui-react'
import { Image } from 'cloudinary-react';

const CurrentProject = ({ mobile }) => (
  <Segment vertical>
    <Divider
      as='h4'
      className='header'
      horizontal
      style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
      <a href='#'>Current Projects</a>
    </Divider>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column floated='left' width={6}>
          <Image publicId="30530462_1412349548911599_6584595369152217088_o_ssny9x.jpg" />
        </Grid.Column>
        <Grid.Column width={10}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            Pokémon GO - Android, iOS (2017 - Present)
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            Leading a small team of server engineers in a feature pod, focused currently on server performance and stability
            and soon, new gameplay functionality.
          </p>
          <p style={{ fontSize: '1.33em' }}>
            Intentionally vague due to the game's profilic fan-base and popularity. Contact me for more information about past and present projects I've worked on with Niantic and Pokémon GO!
          </p>
          <Label>
            Years <Label.Detail>1</Label.Detail>
          </Label>
          <Label color="green">
            Server 
            <Label.Detail>Java</Label.Detail>
            <Label.Detail>Google Kubernetes Engine</Label.Detail>
            <Label.Detail>Docker</Label.Detail>
          </Label>
          <Label color="blue">
            Client 
            <Label.Detail>C#</Label.Detail>
            <Label.Detail>Unity</Label.Detail>
          </Label>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column width={8}>
        <Image publicId="meNiantic_r7vpus.png" >
          </Image>
        <Label color='red' pointing='above' icon="play" content="Hear why Niantic is a great place to work from me and my fellow coworkers!">
      </Label>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
)

export default CurrentProject;