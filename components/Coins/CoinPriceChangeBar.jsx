import { TextField, FormControl } from "@mui/material";
import React from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { makeStyles } from "@mui/styles";
import useSettings from "../../hooks/useSettings";

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
  exchangeContainer: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: "50%",
    width: "40px",
    minWidth: "40px",
    height: "40px",
    boxShadow: "4px 4px 36px #2DEFA2",
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
  },
  menuButton: {
    borderTopLeftRadius: "unset",
    borderBottomLeftRadius: "unset",
  },
  priceField: {
    "& .MuiOutlinedInput-root": {
      borderTopRightRadius: "unset",
      borderBottomRightRadius: "unset",
    },
  },
}));

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

export default function CoinPriceChangeBar() {
  const classes = useStyles();
  const { themeMode } = useSettings();

  return (
    <Box
      display="flex"
      className={`${classes.container} ${
        themeMode === "light" ? classes.lightContainer : ""
      }`}
    >
      <Box display="flex">
        <TextField
          id="outlined-textarea"
          placeholder="Placeholder"
          className={classes.priceField}
        />
        <Button
          variant="contained"
          color="info"
          size="medium"
          className={`${classes.menuButton} ${
            themeMode === "light" ? classes.lightMenu : ""
          }`}
        >
          BTC
        </Button>
      </Box>
      <Box
        className={classes.exchangeContainer}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <FaExchangeAlt color="#2DEFA2" />
      </Box>
      <Box display="flex">
        <TextField
          id="outlined-textarea"
          placeholder="Placeholder"
          className={classes.priceField}
        />
        <CustomizedMenus />
      </Box>
    </Box>
  );
}
