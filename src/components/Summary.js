import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Header,
} from 'semantic-ui-react'
import { Image, Transformation } from 'cloudinary-react';

const Summary = ({ mobile }) => (
    <Grid container celled='internally' columns='equal' stackable style={{ paddingTop: '1em' }}>      
      <Grid.Row>
        <Grid.Column floated="right" style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Grid>
            <Grid.Row>
              <Grid.Column floated='right' width={12}
                style={{ marginLeft: 'auto', marginRight: mobile ? 'auto' : 0}}
              >
                <Image publicId="UCLA_Logo_xw8drl.svg" />
                <p style={{ fontSize: '1.33em', textAlign: 'center' }}>B.S. Computer Science & Engineering, 2005-2009</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <p style={{ fontSize: '1.33em' }}>
            "If you're not making mistakes, then you're not doing anything. I'm positive that a doer makes mistakes."
            </p>
          <Header as='h3' floated={mobile ? 'right' : 'left'} style={{ fontSize: '2em' }}>
            John Wooden
            </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
)

Summary.propTypes = {
  mobile: PropTypes.bool,
}

export default Summary;