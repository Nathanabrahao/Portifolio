import React from "react";
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import { useState } from 'react'
import "../Pages/Projects/Projects.css"

type Site = {
    imgUrl: string;
    siteUrl: string;
    text: string;
};

type SitesSliderProps = {
    sites: Site[];
};

export function SiteSlider({ sites }: SitesSliderProps) {
    const [siteIndex, setSiteIndex] = useState(0)

    function showNextsite(){
        setSiteIndex(index => {
            if(index === sites.length - 1) return 0
            return index + 1
        })
    }

    function showPrevsite(){
        setSiteIndex(index => {
            if (index === 0) return sites.length - 1
            return index - 1
        })  
    }

    return <div style={{ width: "100%", height: "100%", position: "relative", padding: "10px" }}>
        <a href={sites[siteIndex].siteUrl} target="_blank" rel="noopener noreferrer">
            <img src={sites[siteIndex].imgUrl} className='projects__images' />
            <p className="text__project">{sites[siteIndex].text}</p>
        </a>
        <button onClick={showPrevsite} className='img-slider-btn' style={{ left: 0 }}>
            <ArrowBigLeft />
        </button>
        <button onClick={showNextsite} className='img-slider-btn' style={{ right: 0 }}>
            <ArrowBigRight />
        </button>
    </div>
}
