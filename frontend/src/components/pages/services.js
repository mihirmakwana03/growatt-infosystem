import React from "react";
import LogoDesign from "../../Services/LogoDesign";
import BrandIdentityDesign from "../../Services/BrandIdentityDesign";
import PackagingDesign from "../../Services/PackagingDesign";
import BusinessCardDesign from "../../Services/BusinessCardDesign";
import LetterheadImages from "../../Services/LetterheadDesign";
import LabelDesign from "../../Services/LabelDesign";
import FlexDesign from "../../Services/FlexDesign";
import Catalogdesign from "../../Services/CatalogDesign";
import BrochureDesign from "../../Services/BrochureDesign";
import BannerDesign from "../../Services/BannerDesign";
import { GrFormNext } from "react-icons/gr";

function Services() {
    return (
        <div className="container mt-5">
            <h1 className="text-center fw-bold" style={{ color: "#f2912a" }}>
                <a href="/" style={{ color: "#f2912a" }}>Home</a><GrFormNext />
                <a href="/services" style={{ color: "#f2912a" }}>Services</a>
            </h1>
            <hr />
            <LogoDesign />
            <hr />
            <BrandIdentityDesign />
            <hr />
            <PackagingDesign />
            <hr />
            <BusinessCardDesign />
            <hr />
            <LetterheadImages />
            <hr />
            <LabelDesign />
            <hr />
            <FlexDesign />
            <hr />
            <Catalogdesign />
            <hr />
            <BrochureDesign />
            <hr />
            <BannerDesign />
        </div>
    );
}

export default Services;
