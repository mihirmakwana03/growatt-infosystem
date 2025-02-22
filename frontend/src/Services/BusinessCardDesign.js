import React from "react";
import DesignPage from "../components/DesignPage";

const businessCardImages = [
    "https://via.placeholder.com/250", // Replace with actual images
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
];

const BusinessCardDesign = () => {
    return <DesignPage title="Business Card Design" images={businessCardImages} />;
};

export default BusinessCardDesign;
