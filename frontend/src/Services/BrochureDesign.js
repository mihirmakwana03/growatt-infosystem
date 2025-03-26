import React from "react";
import DesignPage from "../components/DesignPage";

const BrochureDesignImage = [
    "https://via.placeholder.com/250", // Replace with actual images
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
];

const BrochureDesign = () => {
    return <DesignPage title="Brochure Design" images={BrochureDesignImage} />;
};

export default BrochureDesign;
