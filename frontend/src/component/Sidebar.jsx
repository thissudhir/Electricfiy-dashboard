import React, { useState } from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useMediaQuery,
  Divider,
} from "@mui/material";
import {
  HomeOutlined,
  ShoppingCartOutlined,
  AccountBoxOutlined,
  AccountBalanceWalletOutlined,
} from "@mui/icons-material";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import FlexBetween from "./FlexBetween";
import { useNavigate } from "react-router-dom";

const navItems = [
  { text: "Dashboard", icon: <HomeOutlined /> },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <AccountBoxOutlined />,
  },
  {
    text: "Income",
    icon: <AccountBalanceWalletOutlined />,
  },

  {
    text: "Vehicle",
    icon: <DriveEtaIcon />,
  },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("dashboard");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box component="nav" bgcolor="#F5F6F8">
      {!isSmallScreen ? (
        <Box height={"100vh"}>
          <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween>
              <Box
                display="flex"
                alignItems="center"
                gap="0.5rem"
                justifyContent={"space-between"}
                color={"white"}
                marginBottom={"1rem"}
              >
                <Typography variant="h5" fontWeight="bold" color={"#61658B"}>
                  DASHBOARD
                </Typography>
              </Box>
            </FlexBetween>
            <Divider />
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
                      }}
                      sx={{
                        borderRadius: ".6rem",
                        width: "50%",
                        backgroundColor:
                          active === lcText ? "#2D2D69" : "transparent",
                        color: active === lcText ? "white" : "#61658B",
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: active === lcText ? "white" : "#61658B ",
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
        </Box>
      ) : null}
    </Box>
  );
};
