import React from "react";
import DesignPage from "../components/DesignPage";

const LogoDesignImage = [
    "https://via.placeholder.com/250", // Replace with actual images
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
];

const LogoDesign = () => {
    return <DesignPage title="Logo Design" images={LogoDesignImage} />;
};

export default LogoDesign;
