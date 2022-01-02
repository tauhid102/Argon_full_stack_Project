import { Button, TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useStyles } from "../../styles/Styles";

const CartModalForm = () => {
  const { outlineButton } = useStyles();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div style={{padding: '20px 0'}}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          sx={{ marginBottom: 1 }}
          id="filled-basic"
          {...register("name", { required: true })}
          label="Full Name"
          variant="filled"
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 1 }}
          id="filled-basic"
          {...register("email", { required: true })}
          label="E-mail"
          variant="filled"
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 1 }}
          id="filled-basic"
          {...register("country", { required: true })}
          label="Country"
          variant="filled"
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 1 }}
          id="filled-basic"
          {...register("city", { required: true })}
          label="City"
          variant="filled"
        />
        <Button
          className={outlineButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default CartModalForm;
