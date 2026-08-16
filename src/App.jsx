import { useState, useEffect } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import PetsIcon from '@mui/icons-material/Pets'
import ProductList from './components/ProductList.jsx'

const theme = createTheme({
  palette: {
    primary: { main: '#2a7d4f' },
  },
})

export default function App() {
  const [hotels, setHotels] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const petHotelApiUrl = import.meta.env.VITE_PET_HOTEL_BACKEND || 'http://localhost:8088/pet_hotel'

  useEffect(() => {
    fetch(`${petHotelApiUrl}` + '/api/hotels')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => setHotels(data.hotels))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <PetsIcon sx={{ mr: 1 }} />
          <Typography variant="h6">Pet Hotel</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Box py={5}>
          <Typography variant="h5" gutterBottom>
            Hotels
          </Typography>
          {loading && <CircularProgress />}
          {error && <Alert severity="error">Failed to load hotels: {error}</Alert>}
          {!loading && !error && <ProductList products={hotels} />}
        </Box>
      </Container>
    </ThemeProvider>
  )
}
