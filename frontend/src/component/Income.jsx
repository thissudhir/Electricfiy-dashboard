import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  ListItemAvatar,
} from "@mui/material";

const incomeData = [
  {
    product: "Product A",
    income: "$1000",
    description: "this is a good product",
  },
  {
    product: "Product B",
    income: "$750",
    description: "this is a good product",
  },
  {
    product: "Product C",
    income: "$1200",
    description: "this is a good product",
  },
];

export const Income = () => {
  return (
    <Box padding={"10px"} sx={{ background: "white", borderRadius: "10px" }}>
      <Box>
        <Typography variant="h5">
          <strong>Income</strong>
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
              Product Income
            </Typography>
            <Typography variant="p" flex={1.5}>
              income
            </Typography>
          </Box>

          <Divider />
          {incomeData.map((income) => (
            <ListItem key={income.id}>
              <ListItemAvatar></ListItemAvatar>
              <ListItemText
                primary={<strong>{income.product}</strong>}
                secondary={income.description}
              />
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flex: 0.43,
                }}
              >
                <Typography variant="p" style={{ flex: 1.5 }}>
                  {income.income}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
