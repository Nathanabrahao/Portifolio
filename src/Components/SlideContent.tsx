import React from "react";
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import { useState } from 'react'

type SitesSliderProps = {
    siteUrls: string[]
}

export function SiteSlider({ siteUrls }: SitesSliderProps) {
    const [siteIndex, setSiteIndex] = useState(0)


    function showNextsite(){
        setSiteIndex(index => {
            if(index === siteUrls.length - 1) return 0
            return index + 1
        })
    }

    function showPrevsite(){
        setSiteIndex(index => {
            if (index === 0) return siteUrls.length - 1
            return index - 1
        })  
    }

    return <div style={{ width: "100%", height: "100%", position: "relative", padding: "10px" }}>
        <img src={siteUrls[siteIndex]} className='Nathan_picture' />
        <button onClick={showPrevsite} className='img-slider-btn' style={{ left: 0 }}>
            <ArrowBigLeft />
        </button>
        <button onClick={showNextsite} className='img-slider-btn' style={{ right: 0 }}>
            <ArrowBigRight />
        </button>
    </div>
}