import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {
  TextField,
  Box,
  MenuItem,
  Menu,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        // backgroundColor: alpha(
        //   theme.palette.primary.main,
        //   theme.palette.action.selectedOpacity
        // ),
      },
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    background: "rgba(255, 255, 255, 0.04)",
    justifyContent: "center",
  },
  lightContainer: {
    background: "#F6F8FD",
  },
  menuButton: {
    borderTopLeftRadius: "unset",
    borderBottomLeftRadius: "unset",
  },
  priceField: {
    flex: 1,
    marginLeft: theme.spacing(2),
    "& .MuiOutlinedInput-root": {
      borderTopRightRadius: "unset",
      borderBottomRightRadius: "unset",
    },
  },
  currentPrice: {
    color: (props) => (props.themeMode === "light" ? "#6A7295" : "#70737A"),
  },
  optionCard: {
    background: theme.customCardColor,
    borderRadius: "10px",
    padding: theme.spacing(0, 1),
  },
  exchangeContainer: {
    backgroundColor: "#E801012A",
    borderRadius: "50%",
    width: "50px",
    minWidth: "50px",
    height: "50px",
    boxShadow: (props) =>
      props.isRed ? "4px 4px 36px #E80101" : "4px 4px 36px #2CF0A1",
  },
}));

const CircularShadowBox = ({ label, isRed }) => {
  const classes = useStyles({ isRed });
  return (
    <Box
      className={classes.exchangeContainer}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {label}
    </Box>
  );
};

function CustomizedMenus() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls="demo-customized-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        color="info"
        className={classes.menuButton}
      >
        USD
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} disableRipple>
          USD
        </MenuItem>
      </StyledMenu>
    </div>
  );
}

export default function CoinPriceModal({ isOpen, handleClose, handleShow }) {
  const classes = useStyles();

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={isOpen}
        maxWidth="sm"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Add Price Alert
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography variant="body1">
            When the price hits the target price, an alert will be sent to you
            via browser notification. To receive alerts, please allow web
            browser notification permission.
          </Typography>
          <Box display="flex" sx={{ mt: 2 }} alignItems="center">
            <Box sx={{ mr: 2 }}>
              <CircularShadowBox label={"+5%"} isRed />
            </Box>
            <Box sx={{ mr: 2 }}>
              <CircularShadowBox label={"+5%"} isRed />
            </Box>
            <Box>
              <CircularShadowBox label={"+5%"} isRed />
            </Box>
            <Box flex={1} sx={{ mx: 3}}>
              <TextField
                id="outlined-textarea"
                placeholder="Placeholder"
                fullWidth
              />
            </Box>
            <Box sx={{ mr: 2 }}>
              <CircularShadowBox label={"+20%"} />
            </Box>
            <Box sx={{ mr: 2 }}>
              <CircularShadowBox label={"+10%"} />
            </Box>
            <Box>
              <CircularShadowBox label={"+5%"} />
            </Box>
          </Box>
          <Box display="flex" width={1} sx={{ mt: 4 }} alignItems="center">
            <Typography variant="body1">1 BTC = </Typography>
            <TextField
              id="outlined-textarea"
              placeholder="Placeholder"
              className={classes.priceField}
            />
            <CustomizedMenus />
          </Box>
          <Typography
            variant="body1"
            className={classes.currentPrice}
            textAlign="center"
            sx={{ mt: 1 }}
          >
            Current Price is $57,678.90
          </Typography>
          <Box width={1} display="flex" justifyContent="center">
            <FormControlLabel
              control={<Checkbox defaultChecked={false} />}
              label="Recurring"
            />
          </Box>
          <Box width={1} sx={{ mt: 2 }}>
            <Typography variant="body2">Choose an option to send:</Typography>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Box className={classes.optionCard}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Phone"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box className={classes.optionCard}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked={false} />}
                    label="Email"
                  />
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box className={classes.optionCard}>
                  <FormControlLabel
                    control={<Checkbox defaultChecked={false} />}
                    label="Browser"
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleClose}
            fullWidth
            color="secondary"
            variant="contained"
          >
            Save
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
