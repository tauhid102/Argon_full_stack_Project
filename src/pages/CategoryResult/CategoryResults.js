import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import { product } from "../../fakeData/fakeData";
import CategoryResult from "./CategoryResult";
const CategoryResults = () => {
  const location = useLocation();
  const categoriesPage = location.pathname.split("/")[2];
  const filterProducts = product.filter(
    (product) => product.category === categoriesPage
  );
  return (
    <Box>
      <Header />
      <Container sx={{py: '20px'}}>
           <Typography sx={{textAlign: 'center'}} fontWeight="600" color="#f5841a" variant="h4">{categoriesPage} Product Collection</Typography>
      </Container>
      <Container sx={{ py: "20px" }}>
        <Grid container spacing={3} sx={{ marginTop: "30px" }}>
          {filterProducts.map((product) => (
            <CategoryResult key={product._id} product={product} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoryResults;
