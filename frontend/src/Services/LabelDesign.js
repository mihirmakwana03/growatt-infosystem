import React from "react";
import DesignPage from "../components/DesignPage";

const LabelImages = [
    "https://via.placeholder.com/250", // Replace with actual images
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
];

const LabelDesign = () => {
    return <DesignPage title="Label Design" images={LabelImages} />;
};

export default LabelDesign;
