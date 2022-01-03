import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import React from "react";

const ShowProduct = ({ product }) => {
  const {img,name,price,star,stock}=product;
  console.log(product);
  return (
    <Grid item sx={12} sm={6} md={4} lg={3}>
      <Paper sx={{ p: "20px" }}>
        <img style={{width: '100%'}} src={img} alt={product?.title} />
        <Box sx={{ p: "10px" }}>
          <Box>
            <Typography variant="h6">{name}</Typography>
            <Box>
            <Typography variant="body1">{price}</Typography>
            <Rating name="half-rating-read" defaultValue={star} precision={0.5} readOnly />
            </Box>
          </Box>
          {/* <Typography variant="body1">{product?.info.slice(0, 100)}...</Typography>  */}
        </Box>
      </Paper>
    </Grid>
  );
};

export default ShowProduct;
