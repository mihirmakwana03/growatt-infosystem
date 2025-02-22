import React from "react";
import DesignPage from "../components/DesignPage";

const letterheadImages = [
    "https://via.placeholder.com/250", // Replace with actual images
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
    "https://via.placeholder.com/250",
];

const LetterheadImages = () => {
    return <DesignPage title="Letterhead Design" images={letterheadImages} />;
};

export default LetterheadImages;
