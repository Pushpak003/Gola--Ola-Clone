import {
  searchPlacesService,
  getDistanceService,
} from "../services/map.service.js";

export const searchPlaces = async (req, res) => {
  try {
    const { query,userLat,userLng } = req.query;
    const places = await searchPlacesService(query,Number(userLat),Number(userLng));

    res.status(200).json({
      success: true,
      places,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDistance = async (req, res) => {
  try {
    const { pickupLng, pickupLat, destinationLng, destinationLat } = req.query;

    const data = await getDistanceService(
      pickupLng,
      pickupLat,
      destinationLng,
      destinationLat,
    );

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
