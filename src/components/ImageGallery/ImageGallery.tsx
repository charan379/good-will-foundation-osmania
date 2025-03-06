import { Card, Carousel, Flex, Image } from 'antd';
import React from 'react'
import useResponsive from '../../hooks/useResponsive';
import { LeftCircleTwoTone, LeftOutlined, LeftSquareTwoTone, RightCircleOutlined, RightOutlined, RightSquareOutlined } from '@ant-design/icons';


const contentStyle: React.CSSProperties = {
    height: '460px',
    color: '#fff',
    lineHeight: '460px',
    textAlign: 'center',
    background: '#364d79',
};

const images = [{
    src: "/images/gallery/scope-any/IMG_20250304_104956_023.jpg",
    alt: "IMG_20250304_104956_023.jpg",
    id: 1
},
{
    src: "/images/gallery/scope-any/IMG-20250304-WA0020.jpg",
    alt: "IMG-20250304-WA0020.jpg",
    id: 2
},
{
    src: "/images/gallery/scope-any/IMG-20250304-WA0018.jpg",
    alt: "IMG-20250304-WA0018.jpg",
    id: 3
},
{
    src: "/images/gallery/scope-any/IMG-20250304-WA0022.jpg",
    alt: "IMG-20250304-WA0022.jpg",
    id: 4
},
{
    src: "/images/gallery/scope-any/IMG-20250304-WA0028.jpg",
    alt: "IMG-20250304-WA0028.jpg",
    id: 5
},
{
    src: "/images/gallery/scope-any/IMG-20250304-WA0038.jpg",
    alt: "IMG-20250304-WA0038.jpg",
    id: 6
},
{
    src: "/images/gallery/scope-any/IMG_20250304_105025_287.jpg",
    alt: "IMG_20250304_105025_287.jpg",
    id: 7
},
{
    src: "/images/gallery/scope-any/IMG-20250304-WA0039.jpg",
    alt: "IMG-20250304-WA0039.jpg",
    id: 8
},
{
    src: "/images/gallery/scope-any/IMG-20250304-WA0019.jpg",
    alt: "IMG-20250304-WA0019.jpg",
    id: 9
},
{
    src: "/images/gallery/scope-any/IMG_20250304_104956_023.jpg",
    alt: "",
    id: 10
}
]


const landScapeImagesCarousal = [
    {
        src: "/images/gallery/carousal-lanscape/landscape1.jpg",
        alt: "landscape1.jpg",
        id: 1
    },
    {
        src: "/images/gallery/carousal-lanscape/landscape2.jpg",
        alt: "landscape2.jpg",
        id: 2
    },
    {
        src: "/images/gallery/carousal-lanscape/landscape3.jpg",
        alt: "landscape3.jpg",
        id: 3
    },
    {
        src: "/images/gallery/carousal-lanscape/landscape4.jpg",
        alt: "landscape4.jpg",
        id: 4
    }

];

const potraitImagesCarousal = [
    {
        src: "/images/gallery/carousal-potrait/potrait1.jpg",
        alt: "potrait1.jpg",
        id: 1
    },
    {
        src: "/images/gallery/carousal-potrait/potrait2.jpg",
        alt: "potrait2.jpg",
        id: 2
    },
    {
        src: "/images/gallery/carousal-potrait/potrait3.jpg",
        alt: "potrait3.jpg",
        id: 3
    },
    {
        src: "/images/gallery/carousal-potrait/potrait4.jpg",
        alt: "potrait1.jpg",
        id: 4
    }
];

const ImageGallery = () => {

    const { isMobile } = useResponsive();

    return (
        <Card
            variant="borderless"
            title={<span id="image-gallery"
            >Image Gallery</span>}
            style={{ maxWidth: "98dvw" }}
            styles={{
                title: {
                    textAlign: "left",
                },
                header: {
                    background:
                        "linear-gradient(114deg, rgb(120, 88, 248) 0%, rgb(88, 165, 254) 100%)",
                    color: "#fff",
                },
                body: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    background: "linear-gradient(180deg, rgba(245, 245, 245, 0.8) 0%, rgba(230, 230, 230, 0.8) 100%)",
                    color: "#fff",
                }
            }}>

            <Carousel
                key={1}
                adaptiveHeight
                autoplay={{ dotDuration: true }}
                infinite
                dots
                arrows
                dotPosition="bottom"
                style={{
                    maxWidth: "100%",
                    height: "400px",
                    borderRadius: "12px", // Smooth rounded corners
                    overflow: "hidden", // Prevents overflow issues
                }}
            >
                {isMobile
                    ? potraitImagesCarousal.map((image, index) => (
                        <div key={index} style={{ textAlign: "center", padding: "10px" }}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                key={image.id}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "420px",
                                    objectFit: "cover", // Ensures image fills area elegantly
                                    borderRadius: "6px", // Consistent rounded corners
                                }}
                            />
                        </div>
                    ))
                    : landScapeImagesCarousal.map((image, index) => (
                        <div key={index} style={{ textAlign: "center", padding: "10px" }}>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                key={image.id}
                                style={{
                                    maxWidth: "100%",
                                    maxHeight: "500px",
                                    objectFit: "cover",
                                    borderRadius: "6px",
                                }}
                            />
                        </div>
                    ))}
            </Carousel>


            <Carousel autoplay={false} arrows={false} dots={false}>
                <div style={contentStyle}>
                    <Flex gap={5} wrap justify='center' align='center'>
                        {images.map((image) => {
                            return (
                                <Image key={image.id} src={image.src} alt={image.alt} width={isMobile ? "auto" : 160} height={isMobile ? "auto" : 160}
                                    style={{
                                        objectFit: "cover", // Ensures image fills area elegantly
                                        borderRadius: "6px", // Consistent rounded corners
                                    }}
                                ></Image>
                            )
                        })}
                    </Flex>
                </div>
            </Carousel>

        </Card >

    )
}

export default ImageGallery