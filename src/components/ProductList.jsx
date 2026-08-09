import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import ProductCard from './ProductCard.jsx'

export default function ProductList({ products }) {
  if (!products.length) {
    return (
      <Typography color="text.secondary" align="center" mt={6}>
        No products available.
      </Typography>
    )
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} size={{ xs: 12, sm: 6, md: 4 }}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  )
}
