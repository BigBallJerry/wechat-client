import * as React from 'react'
import Layout from '../components/Layout'
import { NextPage } from 'next'

const IndexPage: NextPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Starter">
      <h1 className="bg-blue-400">Hello Next.js with Typescript 👋</h1>
    </Layout>
  )
}

export default IndexPage
