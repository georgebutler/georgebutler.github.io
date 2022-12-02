import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <h1 className="text-3xl font-bold">
      404: Not Found
    </h1>
    <p>
      Nothing here...
    </p>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
