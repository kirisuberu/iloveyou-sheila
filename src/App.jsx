import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './theme'
import { GlobalStyle } from './globalStyles'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import Home from './pages/Home'
import PickUpLines from './pages/PickUpLines'
import Facts from './pages/Facts'
import Author from './pages/Author'
import FavePics from './pages/FavePics'
import Login from './pages/Login'

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
`

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`

const Main = styled.main`
  flex: 1;
`

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <AppContainer>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <MainContent>
                  <Navbar onMenuClick={toggleSidebar} />
                  <Main>
                    <Routes>
                      <Route path="/home" element={<Home />} />
                      <Route path="/pickup-lines" element={<PickUpLines />} />
                      <Route path="/facts" element={<Facts />} />
                      <Route path="/author" element={<Author />} />
                      <Route path="/favepics" element={<FavePics />} />
                      <Route path="/" element={<Navigate to="/login" replace />} />
                    </Routes>
                  </Main>
                  <Footer />
                </MainContent>
              }
            />
          </Routes>
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        </AppContainer>
      </Router>
    </ThemeProvider>
  )
}

export default App
