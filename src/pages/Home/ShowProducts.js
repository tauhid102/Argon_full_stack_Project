import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "../../styles/Styles";
import ShowProduct from "../Home/ShowProduct";
const ShowProducts = () => {
  const { outlineButton, featuresButtons } = useStyles();
  const [selectProduct, setSelectProduct] = useState("Women's clothes");
  const [products,setProducts]=useState();
  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res=>res.json())
    .then(data=>setProducts(data));
  },[]);
  console.log(products)
  // const filerProducts = product.filter()
  const filteringProduct = products?.filter(
    (pro) => pro.category === selectProduct
  );

  return (
    <Box sx={{ py: "20px" }}>
      <Container sx={{borderBottom: '2px solid #e83a3b', py: '10px'}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Show Product</Typography>
          </Grid>
          <Grid item xs={12} md={6} className={featuresButtons}>
            <Box>
              <Button
                onClick={() => setSelectProduct("Man")}
                variant="contained"
                className={outlineButton}
              >
                Man
              </Button>

              <Button
                onClick={() => setSelectProduct("Women's clothes")}
                sx={{ ml: "8px" }}
                variant="contained"
                className={outlineButton}
              >
                Woman
              </Button>

              <Button
                onClick={() => setSelectProduct("camera")}
                variant="contained"
                sx={{ ml: "8px" }}
                className={outlineButton}
              >
                Camera
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container  sx={{py: '10px'}}>
        <Grid container spacing={3}>
          {filteringProduct?.map((pro) => (
            <ShowProduct key={pro._id} product={pro} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ShowProducts;
