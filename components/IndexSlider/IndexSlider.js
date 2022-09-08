import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";


const IndexSlider = () => {

    const animes = [
        {
            "cover": "https://wallpaper.dog/large/475197.jpg"
        },
        {
            "cover": "https://naniwallpaper.com/files/wallpapers/aesthetic-anime/38-aesthetic%20anime-1080x1920.jpg"
        },
        {
            "cover": "https://aniyuki.com/wp-content/uploads/2021/12/aniyuki-aesthetics-phone-images-49.jpg"
        },
        {
            "cover": "https://i.pinimg.com/736x/b7/13/a7/b713a73afdee787b6c0534dea61df80e.jpg"
        },
        {
            "cover": "https://cdn.wallpapersafari.com/11/19/fMW5QL.jpg"
        },
        {
            "cover": "https://naniwallpaper.com/files/wallpapers/aesthetic-anime/3-aesthetic%20anime-1080x1920.jpg"
        },
        {
            "cover": "https://www.pixelstalk.net/wp-content/uploads/images6/Aesthetic-Anime-Wallpaper-Iphone-Wallpaper-High-Quality.jpg"
        },
        {
            "cover": "https://i.pinimg.com/originals/56/22/95/562295b06a1ffb8c7d5cc878ce467713.gif"
        },
        {
            "cover": "https://wallpapers.com/images/file/aesthetic-anime-love-art-0imbrmwx1l0k1ki6.jpg"
        },
        {
            "cover": "https://wallpaper.dog/large/10710138.jpg"
        },
        {
            "cover": "https://i.pinimg.com/originals/32/a3/28/32a32840102c42a02a8a0b16f972921d.jpg"
        },
        {
            "cover": "https://wallpaper.dog/large/20498982.jpg"
        },
    ]

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth >= 768 ? false : true)
        console.log("Es movil: " + isMobile)
    }, [])

    return (
        <div className="indexSliderContainer">
            <Swiper
                slidesPerView={isMobile ? 2 : 6}
                spaceBetween={30}
                centeredSlides={true}
                navigation={true}
                modules={[Navigation]}
            >
                {animes.map((item, index) => (
                    <SwiperSlide className='slide' key={index}>
                        <img src={item.cover} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default IndexSlider