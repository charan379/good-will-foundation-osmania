import { Button, Card, Carousel, Flex, Image } from 'antd';
import React, { useState } from 'react'
import useResponsive from '../../hooks/useResponsive';
import { LoadingOutlined } from '@ant-design/icons';


const contentStyle: React.CSSProperties = {
    color: '#fff',
    textAlign: 'center',
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
},
{
    src: "/images/gallery/scope-any/landscape/1.jpeg",
    alt: "11",
    id: 11
},
{
    src: "/images/gallery/scope-any/potrait/1.jpeg",
    alt: "12",
    id: 12
},
{
    src: "/images/gallery/scope-any/landscape/2.jpeg",
    alt: "13",
    id: 13
},
{
    src: "/images/gallery/scope-any/potrait/2.jpeg",
    alt: "14",
    id: 14
},
{
    src: "/images/gallery/scope-any/landscape/3.jpeg",
    alt: "15",
    id: 15
},
{
    src: "/images/gallery/scope-any/potrait/3.jpeg",
    alt: "16",
    id: 16
},
{
    src: "/images/gallery/scope-any/landscape/4.jpeg",
    alt: "17",
    id: 17
},
{
    src: "/images/gallery/scope-any/potrait/4.jpeg",
    alt: "18",
    id: 18
},
{
    src: "/images/gallery/scope-any/landscape/5.jpeg",
    alt: "19",
    id: 19
},
{
    src: "/images/gallery/scope-any/potrait/5.jpeg",
    alt: "20",
    id: 20
},
{
    src: "/images/gallery/scope-any/landscape/6.jpeg",
    alt: "21",
    id: 21
},
{
    src: "/images/gallery/scope-any/potrait/6.jpeg",
    alt: "22",
    id: 22
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

    const [visibleCount, setVisibleCount] = useState(5); // Show first 10 images

    const loadMore = () => {
        setVisibleCount((prev) => prev + 5); // Load 10 more each time
    };

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
                    maxHeight: "400px",
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
                                loading='lazy'
                                placeholder={
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                                            backgroundSize: "200% 100%",
                                            animation: "loading 1.5s infinite",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    ><LoadingOutlined spin /></div>
                                }
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
                                loading='lazy'
                                placeholder={
                                    <div
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                                            backgroundSize: "200% 100%",
                                            animation: "loading 1.5s infinite",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    ><LoadingOutlined spin /></div>
                                }
                            />
                        </div>
                    ))}
            </Carousel>

            <div style={contentStyle}>
                <Flex gap={5} wrap justify="center" align="center">
                    <Image.PreviewGroup>
                        {images.slice(0, visibleCount).map((image, index) => (
                            <div
                                key={image.id}
                                style={{
                                    animation: index >= visibleCount - 10 ? "fadeInScale 0.6s ease-in-out" : "none",
                                }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={isMobile ? "auto" : 160}
                                    height={isMobile ? "auto" : 160}
                                    loading="lazy"
                                    placeholder={
                                        <div
                                            style={{
                                                width: "100%",
                                                height: "100%",
                                                background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
                                                backgroundSize: "200% 100%",
                                                animation: "loading 1.5s infinite",
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",
                                            }}
                                        >
                                            <LoadingOutlined spin />
                                        </div>
                                    }
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "6px",
                                    }}
                                />
                            </div>
                        ))}
                    </Image.PreviewGroup>
                </Flex>

                {/* Show "Load More" Button if there are more images to load */}
                {visibleCount < images.length && (
                    <Flex justify="center" style={{ marginTop: "20px" }}>
                        <Button type="primary" onClick={loadMore}>Load More</Button>
                    </Flex>
                )}

                <style>
                    {`
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
                </style>

            </div>

        </Card >

    )
}

export default ImageGallery