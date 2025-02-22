import React from "react";
import DesignPage from "../components/DesignPage";

const PackagingDesignImage = [
    "https://via.placeholder.com/250", // Replace with actual images
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
];

const PackagingDesign = () => {
    return <DesignPage title="Packaging Design" images={PackagingDesignImage} />;
};

export default PackagingDesign;
