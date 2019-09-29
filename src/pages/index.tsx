import React from 'react'

import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Image from '../components/Image'
import SEO from '../components/SEO'

const Title = styled.h1`
  color: red;
`

const green = css({ color: 'green' })

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Title>Hi people</Title>
    <p css={green}>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
