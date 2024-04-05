import React, { useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  InputBase,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 2,
  marginLeft: 2,
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

export const Products = () => {
  const [timeRange, setTimeRange] = useState("30days");

  const handleTimeRangeChange = (event) => {
    setTimeRange(event.target.value);
  };

  const products = [
    {
      id: 1,
      name: "Abstract 3D",
      stock: "32 in stock",
      price: "$19.99",
      totalSales: 100,
      thumbnail:
        "https://t3.ftcdn.net/jpg/03/21/20/26/360_F_321202623_x3OYh5YGY5QjqkI9J6k355x1eoc53hJq.jpg",
      description: "lorem",
    },
    {
      id: 2,
      name: "Abstract 2D",
      stock: "32 in stock",
      price: "$19.99",
      totalSales: 100,
      thumbnail:
        "https://st.depositphotos.com/1167801/3262/i/450/depositphotos_32620845-stock-photo-crystals-macro.jpg",
      description: "lorem",
    },
  ];

  return (
    <Box padding={"10px"} sx={{ background: "white", borderRadius: "10px" }}>
      <Box display={"flex"} justifyContent={"space-between"} gap={"10px"}>
        <Typography variant="h5" flex={4}>
          <strong>Product sell</strong>
        </Typography>
        <Box
          sx={{
            // display: "flex",
            justifyContent: "end",
            background: "#FAFBFF",

            borderRadius: "5px",
            color: "lightgray",
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>

        <Box>
          <Select
            sx={{
              m: 1,
              color: "lightgray",
              background: "#FAFBFF",
              borderRadius: "5px",
              padding: "0px",
              margin: "0px",
              minWidth: 120,
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
            }}
            size="small"
            value={timeRange}
            onChange={handleTimeRangeChange}
            variant="outlined"
          >
            <MenuItem value="30days">Last 30 Days</MenuItem>
            <MenuItem value="60days">Last 60 Days</MenuItem>
            <MenuItem value="90days">Last 90 Days</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box>
        <List>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            paddingLeft={"10px"}
            color={"gray"}
            marginBottom={"10px"}
          >
            <Typography variant="p" flex={4}>
              Product Name
            </Typography>
            <Typography variant="p" flex={0.5}>
              Stock
            </Typography>
            <Typography variant="p" flex={0.5}>
              Price
            </Typography>
            <Typography variant="p" flex={0.5}>
              Total Sale
            </Typography>
          </Box>

          <Divider />
          {products.map((product) => (
            <ListItem key={product.id}>
              <ListItemAvatar>
                <Box
                  style={{
                    width: 100,
                    height: 60,
                    borderRadius: 5,
                    overflow: "hidden",
                    marginRight: "10px",
                  }}
                >
                  <Box
                    style={{
                      width: "100%",
                      height: "100%",
                      backgroundImage: `url(${product.thumbnail})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Box>
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary={<strong>{product.name}</strong>}
                secondary={product.description}
              />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flex: 0.43,
                }}
              >
                <Typography variant="p" style={{ flex: 1.5 }}>
                  {product.stock}
                </Typography>
                <Typography variant="p" style={{ flex: 1.9 }}>
                  {product.price}
                </Typography>
                <Typography variant="p" style={{ flex: 1.3 }}>
                  {product.totalSales}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
