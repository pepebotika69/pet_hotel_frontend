import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import PetsIcon from '@mui/icons-material/Pets'

export default function ProductCard({ product }) {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box
        sx={{
          height: 160,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'grey.100',
        }}
      >
        <PetsIcon sx={{ fontSize: 64, color: 'primary.main' }} />
      </Box>
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
      </CardContent>
    </Card>
  )
}
