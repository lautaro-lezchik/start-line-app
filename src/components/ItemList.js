import { Grid } from '@mui/material'
import React from 'react'
import Item from './Item'

const ItemList = ({products}) => {
    return (
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='productsGrid'>
            {products.map ((product) => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                <Item key={product.id} {...product} />
                </Grid>
            ))}
        </Grid>
    )
}

export default ItemList