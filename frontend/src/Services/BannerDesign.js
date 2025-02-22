import React from "react";
import DesignPage from "../components/DesignPage";

const BannerDesignImage = [
    "https://via.placeholder.com/250", // Replace with actual images
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
];

const BannerDesign = () => {
    return <DesignPage title="Banner Design" images={BannerDesignImage} />;
};

export default BannerDesign;
