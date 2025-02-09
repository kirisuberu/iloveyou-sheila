import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import { theme } from './theme'
import { GlobalStyle } from './globalStyles'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Main = styled.main`
  flex: 1;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Sidebar />
          <MainContent>
            <Navbar />
            <Main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Main>
            <Footer />
          </MainContent>
        </AppContainer>
      </Router>
    </ThemeProvider>
  )
}

export default App
