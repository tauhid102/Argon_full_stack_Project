import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Typography
} from "@mui/material";
import React from "react";
import Header from "../../components/Header";
import { useStyles } from "../../styles/Styles";
import CartModal from "./CartModal";
const singleProduct = {
  id: 1,
  name: "Product 1",
  price: 3.5,
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  image:
    "https://i.ibb.co/bbj4817/Front-of-a-clean-Black-T-Shirt-just-waiting-for-you-to-add-your-own-logo-Graphics-or-words-Clipping.jpg",
  rating: 4.5,
  category: "children",
};
const DetailProduct = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { outlineButton } = useStyles();
  return (
    <Box>
      <Header />
      <Box sx={{ py: "40px" }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={5}>
              <img style={{ width: "100%" }} src={singleProduct.image} alt="" />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography color="#444" fontWeight="700" variant="h4">
                {singleProduct.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 2,
                }}
              >
                <Typography color="#444" variant="h5">
                  ${singleProduct.price}
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={singleProduct?.rating}
                  precision={0.5}
                  readOnly
                />
              </Box>
              <Typography
                sx={{ textAlign: "justify" }}
                color="#555"
                variant="body2"
              >
                {singleProduct.description}
              </Typography>
              <br />
              <Typography
                sx={{ textAlign: "justify" }}
                color="#555"
                variant="body2"
              >
                {singleProduct.description}
              </Typography>
              <Button
                onClick={handleOpen}
                variant="contained"
                color="primary"
                className={outlineButton}
                sx={{ mt: 2 }}
              >
                <ShoppingCartCheckoutIcon sx={{ mr: 1 }} />
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Container>
        <CartModal
          singleProduct={singleProduct}
          handleClose={handleClose}
          handleOpen={handleOpen}
          setOpen={setOpen}
          open={open}
        />
      </Box>
    </Box>
  );
};

export default DetailProduct;
