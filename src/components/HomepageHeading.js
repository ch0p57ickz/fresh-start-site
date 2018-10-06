import PropTypes from 'prop-types'
import React from 'react'
import { 
  Container, 
  Grid,
  Header,
  Segment
} from 'semantic-ui-react'
import { Image, Transformation } from 'cloudinary-react';

const HomepageHeading = ({ mobile }) => (
  <Grid container stackable verticalAlign='middle'>
    <Grid.Row>
      <Grid.Column width={8} verticalAlign='middle'>
        <Container>
          <a name="home"></a>
          <Header
            as='h1'
            content='James Prompanya'
            style={{
              fontSize: '4em',
              fontWeight: 'normal',
              marginBottom: 0,
            }}
          />
          <Header
            as='h2'
            content='Senior Software Engineer - Server Infrastructure'
            style={{
              fontSize: mobile ? '1.5em' : '1.7em',
              fontWeight: 'normal',
            }}
          />
          <Header
            as='h4'
            content='San Jose, CA'
            style={{
              fontSize: mobile ? '1.5em' : '1.7em',
              fontWeight: 'normal',
            }}
          />
          <Segment secondary padded>
            <Image publicId="niantic_logo_edited_gxkhee.png" />
          </Segment>
        </Container>
      </Grid.Column>
      <Grid.Column width={8}>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={mobile ? 8 : 12}>
        <Image publicId="37071391_10108082360217238_7059024023673372672_n_crooox.jpg" >
          <Transformation aspectRatio="1" gravity="faces" radius="max" crop="thumb" />
        </Image>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading