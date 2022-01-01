import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, Grid } from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { product } from "../../fakeData/fakeData";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from "../../styles/Styles";
import AllProduct from "./AllProduct";



const AllProducts = () => {

  return (
    <Box>
      <Header />
      <Container sx={{mt: '30px', py: '20px'}}>
        <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="I'm shopping for…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        <Grid container spacing={3} sx={{marginTop: '30px'}}>
          {product.map((pro) => (
            <AllProduct key={pro._id} product={pro} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllProducts;
