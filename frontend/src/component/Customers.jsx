import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  ListItemAvatar,
} from "@mui/material";

const customers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    description: "Product Manager",
    thumbnail:
      "https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",
  },
  {
    id: 2,
    name: "Alice Smith",
    email: "alice@example.com",
    description: "Product Manager",
    thumbnail:
      "https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    description: "Product Manager",
    thumbnail:
      "https://t4.ftcdn.net/jpg/02/45/56/35/360_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg",
  },
  // Add more customer data as needed
];

export const Customers = () => {
  return (
    <Box padding={"10px"} sx={{ background: "white", borderRadius: "10px" }}>
      <Box>
        <Typography variant="h5">
          <strong>Customers</strong>
        </Typography>
        <List>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            paddingLeft={"10px"}
            color={"gray"}
            marginBottom={"10px"}
          >
            <Typography variant="p" flex={4}>
              Customer Name
            </Typography>
            <Typography variant="p" flex={1.2}>
              email
            </Typography>
          </Box>

          <Divider />
          {customers.map((customer) => (
            <ListItem key={customer.id}>
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
                      backgroundImage: `url(${customer.thumbnail})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Box>
                </Box>
              </ListItemAvatar>
              <ListItemText
                primary={<strong>{customer.name}</strong>}
                secondary={customer.description}
              />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flex: 0.43,
                }}
              >
                <Typography variant="p" style={{ flex: 1.5 }}>
                  {customer.email}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
