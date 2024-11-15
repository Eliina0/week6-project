import { BrowserRouter } from "react-router-dom"
import Routes from "./routes/Routes"
import Layout from "./components/Layout"

const App = () => {
  return (
    <BrowserRouter>
    <Layout>
      <Routes />
      </Layout>
    </BrowserRouter>
  )
}

export default App