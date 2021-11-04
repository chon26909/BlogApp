import React from 'react';
import { Carousel } from "react-bootstrap"
import "../styles/carousel.css";

const CarouselSlider = () => {
    return (
        <div className="container mt-2">
            <Carousel>
                <Carousel.Item>
                    <div className="carousel-image">
                        <img

                            src="https://www.beartai.com/wp-content/uploads/2021/11/206130685_1223487054740403_1087003980402066567_n-370x247.jpg"
                            alt="First slide"
                        />
                    </div>
                    <Carousel.Caption>
                        <h1>Harry Potter: Wizards Unite จะยุติการให้บริการ ภายในเดือนมกราคม ปี ค.ศ. 2022</h1>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                <div className="carousel-image">
                    <img
                        className="carousel-image"
                        src="https://www.beartai.com/wp-content/uploads/2021/11/Android_Collage_1920x1080__UCAN_En-370x247.jpg"
                        alt="Second slide"
                    />
                    </div>
                    <Carousel.Caption>
                        <h3>Netflix เพิ่มหมวด Netflix Games เข้ามา มีถึง 5 เกมให้ได้เล่นกันในช่วงแรก</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousel-image">
                    <img
                        className="carousel-image"
                        src="https://www.beartai.com/wp-content/uploads/2021/11/Sol-Cresta_2021_08-05-21_011-1155x770.jpg"
                        alt="Third slide"
                    />
                    </div>
                    <Carousel.Caption>
                        <h3>PlatinumGames ประกาศเลื่อนวางจำหน่าย Sol Cresta</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselSlider
