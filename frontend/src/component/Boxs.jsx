import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import {
  MonetizationOnOutlined,
  ArrowUpwardOutlined,
  ArrowDownwardOutlined,
  ArticleOutlined,
  AccountBalanceWalletOutlined,
  LocalMallOutlined,
} from "@mui/icons-material";
export const Boxs = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "15px" }}>
        <Paper
          elevation={3}
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            boxShadow: "none",
            background: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              background: "#DCFFEB",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "#01A746",
              padding: "35px",
              borderRadius: "50%",
            }}
          >
            <MonetizationOnOutlined sx={{ fontSize: "70px" }} />
          </Box>
          <Box>
            <Typography variant="p" color={"lightgray"} fontSize={"14px"}>
              Earning
            </Typography>
            <Typography variant="h4">
              <strong>$198k</strong>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#01A746",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <ArrowUpwardOutlined fontSize="14px" />
              <strong>37.8%</strong>{" "}
              <Typography color={"black"}>&nbsp;this month</Typography>
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "15px" }}>
        <Paper
          elevation={3}
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            boxShadow: "none",
            background: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              background: "#E7DBFF",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "#A000FF",
              padding: "35px",
              borderRadius: "50%",
            }}
          >
            <ArticleOutlined sx={{ fontSize: "70px" }} />
          </Box>
          <Box>
            <Typography variant="p" color={"lightgray"} fontSize={"14px"}>
              Orders
            </Typography>
            <Typography variant="h4">
              <strong>$2.4k</strong>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#DA0019",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <ArrowDownwardOutlined fontSize="14px" />
              <strong>2%</strong>
              <Typography color={"black"}>&nbsp;this month</Typography>
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "15px" }}>
        <Paper
          elevation={3}
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            boxShadow: "none",
            background: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              background: "#CCF2FF",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "#0E5EC1",
              padding: "35px",
              borderRadius: "50%",
            }}
          >
            <AccountBalanceWalletOutlined sx={{ fontSize: "70px" }} />
          </Box>
          <Box>
            <Typography variant="p" color={"lightgray"} fontSize={"14px"}>
              Balance
            </Typography>
            <Typography variant="h4">
              <strong>$2.4k</strong>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#DA0019",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <ArrowDownwardOutlined fontSize="14px" />
              <strong>2%</strong>
              <Typography color={"black"}>&nbsp;this month</Typography>
            </Typography>
          </Box>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3} sx={{ marginTop: "15px" }}>
        <Paper
          elevation={3}
          style={{
            padding: "10px",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            boxShadow: "none",
            background: "#FFFFFF",
            borderRadius: "10px",
          }}
        >
          <Box
            sx={{
              background: "#FEB0D8",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              color: "#DA0019",
              padding: "35px",
              borderRadius: "50%",
            }}
          >
            <LocalMallOutlined sx={{ fontSize: "70px" }} />
          </Box>
          <Box>
            <Typography variant="p" color={"lightgray"} fontSize={"14px"}>
              Total sales
            </Typography>
            <Typography variant="h4">
              <strong>$89k</strong>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#01A746",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              <ArrowUpwardOutlined fontSize="14px" />
              <strong>11%</strong>{" "}
              <Typography color={"black"}>&nbsp;this week</Typography>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};
