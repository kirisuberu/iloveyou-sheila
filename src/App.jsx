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
import Author from './pages/Author'
import FavePics from './pages/FavePics'
import SongCovers from './pages/SongCovers'
import Login from './pages/Login'
import { AuthProvider, useAuth } from './context/AuthContext'
import { useLocation } from 'react-router-dom'

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

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { checkLoginStatus } = useAuth();
  const location = useLocation();
  
  if (!checkLoginStatus()) {
    return <Navigate to="/login" state={{ from: location.pathname }} />;
  }
  
  return children;
};

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
        <AuthProvider>
          <AppContainer>
            <MainContent>
              <Navbar onMenuClick={toggleSidebar} />
              <Main>
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/home" element={
                    <ProtectedRoute>
                      <Home />
                    </ProtectedRoute>
                  } />
                  <Route path="/pickup-lines" element={
                    <ProtectedRoute>
                      <PickUpLines />
                    </ProtectedRoute>
                  } />
                  <Route path="/song-covers" element={
                    <ProtectedRoute>
                      <SongCovers />
                    </ProtectedRoute>
                  } />
                  <Route path="/favepics" element={
                    <ProtectedRoute>
                      <FavePics />
                    </ProtectedRoute>
                  } />
                  <Route path="/author" element={
                    <ProtectedRoute>
                      <Author />
                    </ProtectedRoute>
                  } />
                  <Route path="/" element={<Navigate to="/login" replace />} />
                </Routes>
              </Main>
              <Footer />
            </MainContent>
            <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
          </AppContainer>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
