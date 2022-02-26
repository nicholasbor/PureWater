import React from "react";
import { Contact } from "../Components/Contact";
import Features from "../Components/Features";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import ModuleGrid from "../Components/ModuleGrid";

function LandingPage() {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <ModuleGrid />
            <Contact />
        </div>
    );
}