import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Category from "./pages/Category"
import NewsPage from "./Components/Home/NewsPage"

function App() {


  return (
    <div className="App">
      <Header />
      <div className="container">
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/category/:name'} element={<Category />} />
          <Route path={'/category/:name/:arsicle'} element={<NewsPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
