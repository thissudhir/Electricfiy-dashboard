import React, { useState } from "react";

import { styled, alpha } from "@mui/material/styles";
import {
  Typography,
  Box,
  Toolbar,
  InputBase,
  AppBar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  // Typography,
  Drawer,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import {
  HomeOutlined,
  DashboardOutlined,
  ShoppingCartOutlined,
  TrendingUpOutlined,
  AccountBoxOutlined,
  AccountBalanceWalletOutlined,
  LiveHelpOutlined,
  KeyboardArrowDownOutlined,
  KeyboardArrowRightOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(0),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "black",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 1),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const navItems = [
  { text: "Dashboard", icon: <HomeOutlined />, arrow: null },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
    arrow: <KeyboardArrowRightOutlined />,
  },
  {
    text: "Customers",
    icon: <AccountBoxOutlined />,
    arrow: <KeyboardArrowRightOutlined />,
  },
  {
    text: "Income",
    icon: <AccountBalanceWalletOutlined />,
    arrow: <KeyboardArrowRightOutlined />,
  },

  {
    text: "Vehicle",
    icon: <DriveEtaIcon />,
    arrow: <KeyboardArrowRightOutlined />,
  },
];
export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ boxShadow: "none", background: "#F5F6F8" }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", color: "black" },
            }}
          >
            Hello,
          </Typography>
          <MenuOutlined
            sx={{ display: { xs: "block", sm: "none", color: "black" } }}
            onClick={toggleDrawer}
          />
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{ color: "lightgray" }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={toggleDrawer}
          variant="temporary"
        >
          {/* Drawer content */}
          <Box sx={{ width: 280 }}>
            <List sx={{ color: "#61658B" }}>
              {navItems.map(({ text, icon, arrow }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLocaleLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                        toggleDrawer(); // Close the drawer on item click
                      }}
                      sx={{
                        marginRight: "10px",
                        marginLeft: "10px",
                        borderRadius: ".6rem",
                        width: "50%",
                        backgroundColor:
                          active === lcText ? "#2D2D69" : "transparent",
                        color: active === lcText ? "white" : "#61658B",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: active === lcText ? "white" : "#61658B",
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {arrow}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      </AppBar>
    </Box>
  );
};
