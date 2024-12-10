import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserProfile from './App.jsx'
import MoviesList from './FunctionalComponents.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProfile />
    <MoviesList />
  </StrictMode>,
)
