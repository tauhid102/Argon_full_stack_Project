import CloseIcon from "@mui/icons-material/Close";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import React, { useEffect, useState } from "react";
import { useStyles } from "../../styles/Styles";
import CartModalForm from "./CartModalForm";
import CounterPrice from "./CounterPrice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80% !important",
  maxWidth: "500px !important",
  padding: '0 100px',
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function CartModal({
  open,
  handleClose,
  handleOpen,
  setOpen,
  singleProduct,
}) {
  const { modalFad, modalParenMain, modalCloseButton } = useStyles();
  const [count, setCount] = useState(1);
  const [disabledButton, setDisabledButton] = useState(false);
  useEffect(() => {
    if (count === 1) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [count]);
  const totalPrice = count * singleProduct.price;
  return (
    <div>
      <Modal
        className={modalParenMain}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade className={modalFad} in={open}>
          <Box sx={style}>
            <Box className={modalCloseButton}>
              <CloseIcon onClick={handleClose} />
            </Box>
            <Box>
              <CounterPrice
                disabledButton={disabledButton}
                totalPrice={totalPrice}
                count={count}
                setCount={setCount}
              />
            </Box>
            <Box>
              <CartModalForm />
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
