import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../../styles/Styles";
const Category = ({ category }) => {
  const { outlineButton,categoryCartOverlay,categoryCard } = useStyles();
  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <Paper className={categoryCard}>
          <img src={category.img} alt={category.title} />
          <Box className={categoryCartOverlay}>
            <Typography variant="h5">{category.title}</Typography>
            <Button className={outlineButton}>More Products</Button>
          </Box>
        </Paper>
      </Grid>
    </>
  );
};

export default Category;
