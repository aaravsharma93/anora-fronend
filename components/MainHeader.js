import React, { useContext } from "react";
import Image from "next/image";
import { useCallback } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import useSettings from "../hooks/useSettings";
import {
  Avatar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AuthModal from "./Auth/AuthModal";
import { AuthContext } from "../contexts/AuthContext";
import { Box } from "@mui/system";
import { fetchProfile } from "../api/user";

export default function MainHeader() {
  const router = useRouter();
  const { themeMode, onChangeMode } = useSettings();
  const [page, setPage] = React.useState("");
  const [propsData, setPropsData] = React.useState(true);
  const { auth, loginOpen, setLoginOpen, logout } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = React.useState(null);

  React.useEffect(() => {
    fetchProfile()
      .then((res) => {
        if (res.data.role === "admin") {
          setIsAdmin(true);
        }
      })
      .catch((err) => {
        console.log(err, "Error in fetching user profile!");
      });
  }, []);

  const handleChangeMode = useCallback(() => {
    if (themeMode === "light") {
      onChangeMode("dark");
    } else {
      onChangeMode("light");
    }
  }, [themeMode, onChangeMode]);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg={themeMode === "dark" ? "dark" : "light"}
      variant={themeMode === "dark" ? "dark" : "light"}
    >
      <Container fluid className="flex-lg-column flex-xl-row">
        <Navbar.Brand href="/" className="mt-4" style={{ flexGrow: "1" }}>
          <Image
            src={
              themeMode === "dark"
                ? "/logo/LogoDarkMode.png"
                : `/logo/LogoLightMode.png`
            }
            width="150"
            height="50"
            alt="Fundamental Secrets"
            className="text-center"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              className={`${router.asPath === "/" ? "active" : ""}`}
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              className={`${router.asPath === "/news" ? "active" : ""}`}
              href="/news"
            >
              News
            </Nav.Link>
            <Nav.Link
              className={`${router.asPath === "/smart-money" ? "active" : ""}`}
              href="/smart-money"
            >
              Smart Scan
            </Nav.Link>
            <Nav.Link href="#!">Portfolio</Nav.Link>
            <Nav.Link href="#!">Screeners</Nav.Link>
            <Nav.Link href="#!">Education</Nav.Link>
          </Nav>
          <span className="mx-3">
            <SearchIcon
              className={`${
                themeMode === "dark" ? "text-white" : "text-black"
              } `}
            />
          </span>
          <Nav className="border-0 align-items-center flex-row justify-content-center justify-content-lg-end mt-4 mt-xl-0 header-bottom">
            {auth ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://www.w3schools.com/howto/img_avatar.png"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  MenuListProps={{
                    style: { display: "inline-grid" },
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem
                    onClick={() => {
                      handleCloseUserMenu();
                      router.push("/account");
                    }}
                    sx={{
                      pt: "10px",
                      pb: "10px",
                      pl: "24px",
                      pr: "48px",
                      fontSize: "18px",
                    }}
                  >
                    <Typography variant="button" textAlign="center">
                      Account
                    </Typography>
                  </MenuItem>
                  {isAdmin && (
                    <>
                      <MenuItem
                        onClick={() => {
                          router.push("/admin/user/user-list");
                        }}
                        sx={{
                          pt: "10px",
                          pb: "10px",
                          pl: "24px",
                          pr: "48px",
                          fontSize: "18px",
                        }}
                      >
                        <Typography variant="button" textAlign="center">
                          User Management
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          router.push("/admin/affiliate-management-dashboard");
                        }}
                        sx={{
                          pt: "10px",
                          pb: "10px",
                          pl: "24px",
                          pr: "48px",
                          fontSize: "18px",
                        }}
                      >
                        <Typography variant="button" textAlign="center">
                          Affiliate Management
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          router.push("/admin/subscription-management");
                        }}
                        sx={{
                          pt: "10px",
                          pb: "10px",
                          pl: "24px",
                          pr: "48px",
                          fontSize: "18px",
                        }}
                      >
                        <Typography variant="button" textAlign="center">
                          Subscription Management
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          router.push("/admin/grading-management");
                        }}
                        sx={{
                          pt: "10px",
                          pb: "10px",
                          pl: "24px",
                          pr: "48px",
                          fontSize: "18px",
                        }}
                      >
                        <Typography variant="button" textAlign="center">
                          Grading Management
                        </Typography>
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          router.push("/admin/smart-money/list");
                        }}
                        sx={{
                          pt: "10px",
                          pb: "10px",
                          pl: "24px",
                          pr: "48px",
                          fontSize: "18px",
                        }}
                      >
                        <Typography variant="button" textAlign="center">
                          Smart Money Management
                        </Typography>
                      </MenuItem>
                    </>
                  )}
                  <MenuItem
                    onClick={() => {
                      logout();
                    }}
                    sx={{
                      pt: "10px",
                      pb: "10px",
                      pl: "24px",
                      pr: "48px",
                      fontSize: "18px",
                    }}
                  >
                    <Typography variant="button" textAlign="center">
                      Logout
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <>
                <Button
                  onClick={() => {
                    console.log("LoginOpen", loginOpen);
                    setPage("login");
                    setPropsData(!propsData);
                    setLoginOpen(true);
                    setTimeout(() => {
                      console.log(AuthContext);
                      console.log("LoginOpen", loginOpen);
                    }, 1000);
                  }}
                  className={`${
                    themeMode === "dark" ? "text-white" : "text-black"
                  } mx-lg-2`}
                  variant="outlined"
                  color="inherit"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    setPage("register");
                    setPropsData(!propsData);
                  }}
                  className={`${
                    themeMode === "dark" ? "bg-primary" : "bg-primary"
                  } mx-lg-2 ms-1`}
                  variant="outlined"
                  style={{ background: "#3A85FC !important", color: "white" }}
                  color="inherit"
                >
                  Sign&nbsp;Up
                </Button>
              </>
            )}
            {/* Language Dropdown */}
            <Dropdown
              className={`${themeMode === "dark" ? "dark" : ""} mx-lg-2 ms-1`}
            >
              <Dropdown.Toggle
                variant="secondary"
                className="border-0"
                id="Language"
              >
                EN
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* Currency Dropdown */}
            <Dropdown
              className={`${themeMode === "dark" ? "dark" : ""} mx-lg-2 ms-1`}
            >
              <Dropdown.Toggle
                variant="secondary"
                className="border-0"
                id="USD"
              >
                USD
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <label className="vm__checkbox ms-1">
              <input
                type="checkbox"
                defaultChecked={themeMode === "dark"}
                id="switch"
              />
              <div className="slider" onClick={handleChangeMode}>
                <div className="dark-slider-icon">
                  <FontAwesomeIcon icon={faMoon} size="1x" />
                </div>
                <div className="light-slider-icon">
                  <FontAwesomeIcon icon={faSun} size="1x" />
                </div>
                <div
                  className={`slider-icon-backdrop ${
                    themeMode === "dark" ? "checked" : ""
                  }`}
                />
              </div>
            </label>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <AuthModal
        page={page}
        change={propsData}
        open={loginOpen}
        handleClose={() => setLoginOpen(false)}
      />
    </Navbar>
  );
}
