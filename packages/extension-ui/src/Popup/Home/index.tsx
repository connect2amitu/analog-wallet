import React from 'react'

import Navbar from '../Navbar'
import { Container } from '../../components'
import ActionBlock from './ActionBlock'
import Footer from './Footer'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
      <Navbar />
      <ActionBlock />

      <Footer />

    </Container>
  )
}

export default styled(Home)`
  
`