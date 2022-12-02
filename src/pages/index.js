import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div class="container max-w-screen-md mx-auto px-5">
      <div class="pt-3">
        <h1 className="text-3xl font-bold">
          George Butler
        </h1>

        <h2 className="text-2xl">
          I write quality code
        </h2>
      </div>

      <div class="flex flex-col md:flex-row pt-3">
        <Link href="/" className="pt-3 underline md:pt-0 md:pr-3">Home</Link>
        <Link href="https://github.com" className="pt-3 underline md:pt-0 md:pr-3">Github</Link>
      </div>

      <div class="pt-3">
        <h3 className="text-xl font-bold">
          About
        </h3>
        <p>
          I am a passionate and hard-working developer who can communicate
          effectively with various cross-discipline teams, and work in a
          fast-paced, autonomous and ambiguous environment. My goal is to
          learn and grow while helping others improve.
        </p>
      </div>

      <div class="pt-3">
        <h3 className="text-xl font-bold">
          Work
        </h3>
        <p>
          I am a passionate and hard-working full-stack developer who can communicate
          effectively with various cross-discipline teams, and work in a
          fast-paced, autonomous and ambiguous environment. My goal is to
          learn and grow while helping others improve.
        </p>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
