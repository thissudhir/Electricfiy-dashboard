import express from "express";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 8800;

// Middleware
dotenv.config();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Define MongoDB schema and model
const vehicleSchema = new mongoose.Schema(
  {
    licensePlate: String,
    make: String,
    VIN: String,
    model: String,
    type: String,
    date: Date,
    milesDriven: Number,
  },
  { collection: "EV_Detail" }
); // Specify the collection name here

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

// API endpoint to fetch vehicle details
app.get("/api/vehicles", async (req, res) => {
  try {
    // Fetch all vehicle details from the database
    const vehicles = await Vehicle.find();
    const vehicleStats = await Promise.all(
      vehicles.map(async (vehicle) => {
        const stat = await vehicleStat.find({
          vehicleId: vehicle._id,
        });
        return {
          ...vehicle._doc,
          stat,
        };
      })
    );
    res.status(200).json(vehicleStats);
    // res.json(vehicles);
    console.log("data", vehicleStats);
  } catch (error) {
    console.error("Error fetching vehicle details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URL, {})
  .then(() => {
    console.log("Connected successfully to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
