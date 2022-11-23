import React from 'react'
import styled from 'styled-components'

import Navbar from '../Navbar'
import ActionBlock from './ActionBlock'
import Footer from './Footer'
import AssetBlock from './AssetBlock'
import { Container } from '../../components'
import { ASSET_SELECTED_LIST } from '../../shared/constants'

const Home = ({ className }: { className?: string }) => {

  return (
    <Container className={className}>
      <Navbar />
      <ActionBlock />
      <AssetBlock assets={ASSET_SELECTED_LIST} />
      <Footer />

    </Container>
  )
}

export default styled(Home)`
position: relative;
`