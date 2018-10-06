import React from 'react'
import ReactDOM from 'react-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  List,
  Segment,
} from 'semantic-ui-react'
import ResponsiveContainer from './components/ResponsiveContainer'
import CurrentProject from './components/CurrentProject'
import Summary from './components/Summary'
import PastProjects from './components/PastProjects'
import Footer from './components/Footer'
import '../semantic/dist/semantic.chubby.min.css';
import { CloudinaryContext } from 'cloudinary-react';

const App = () => (
  <CloudinaryContext cloudName='ch0p57ickz'>
  <ResponsiveContainer>
    <CurrentProject />
    <Summary />
    <PastProjects />
    <Footer />
  </ResponsiveContainer>
  </CloudinaryContext>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);