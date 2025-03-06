import { Card, Carousel, Flex, Image } from 'antd';
import React from 'react'

const contentStyle: React.CSSProperties = {
    height: '460px',
    color: '#fff',
    lineHeight: '460px',
    textAlign: 'center',
    background: '#364d79',
};

const images = [{
    src: "/good-will-foundation-osmania/images/gallery/scope-any/IMG_20250304_104956_023.jpg",
    alt: "IMG_20250304_104956_023.jpg",
    id: 1
},
{
    src: "/good-will-foundation-osmania/images/gallery/scope-any/IMG-20250304-WA0020.jpg",
    alt: "IMG-20250304-WA0020.jpg",
    id: 2
},
{
    src: "/good-will-foundation-osmania/images/gallery/scope-any/IMG-20250304-WA0018.jpg",
    alt: "IMG-20250304-WA0018.jpg",
    id: 3
},
{
    src: "/good-will-foundation-osmania/images/gallery/scope-any/IMG-20250304-WA0022.jpg",
    alt: "IMG-20250304-WA0022.jpg",
    id: 4
},
{
    src: "/good-will-foundation-osmania/images/gallery/scope-any/IMG-20250304-WA0028.jpg",
    alt: "IMG-20250304-WA0028.jpg",
    id: 5
},
{
    src: "/good-will-foundation-osmania/images/gallery/scope-any/IMG-20250304-WA0038.jpg",
    alt: "IMG-20250304-WA0038.jpg",
    id: 6
},
{
    src: "/good-will-foundation-osmania/images/gallery/scope-any/IMG_20250304_105025_287.jpg",
    alt: "IMG_20250304_105025_287.jpg",
    id: 7
},
{
    src: "/good-will-foundation-osmania/images/gallery/scope-any/IMG-20250304-WA0039.jpg",
    alt: "IMG-20250304-WA0039.jpg",
    id: 8
},
{
    src: "/good-will-foundation-osmania/images/gallery/scope-any/IMG-20250304-WA0019.jpg",
    alt: "IMG-20250304-WA0019.jpg",
    id: 9
},
{
    src: "/good-will-foundation-osmania/images/gallery/scope-any/IMG_20250304_104956_023.jpg",
    alt: "",
    id: 10
}
]
const ImageGallery = () => {
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
            }}>

            <Carousel key={1} autoplay={{ dotDuration: true }} arrows infinite dots dotPosition='top'>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>

            <Carousel autoplay={false} arrows>
                <div style={contentStyle}>
                    <Flex gap={5} wrap justify='center' align='center'>
                        {images.map((image) => {
                            return (
                                <Image key={image.id} src={image.src} alt={image.alt} width={140} height={140} ></Image>
                            )
                        })}
                    </Flex>
                </div>
            </Carousel>

        </Card >

    )
}

export default ImageGallery