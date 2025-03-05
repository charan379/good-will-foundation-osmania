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
    src: "",
    alt: "",
    id: 1
},
{
    src: "",
    alt: "",
    id: 1
},
{
    src: "",
    alt: "",
    id: 1
},
{
    src: "",
    alt: "",
    id: 1
},
{
    src: "",
    alt: "",
    id: 1
},
{
    src: "",
    alt: "",
    id: 1
},
{
    src: "",
    alt: "",
    id: 1
},
{
    src: "",
    alt: "",
    id: 1
},
{
    src: "",
    alt: "",
    id: 1
},
{
    src: "",
    alt: "",
    id: 1
}
]
const ImageGallery = () => {
    return (
        <Card
            id="image-gallery"
            variant="borderless"
            title="Image Gallery"
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
            <Carousel autoplay={{ dotDuration: true }} arrows infinite dots dotPosition='top'            >
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
            <Flex gap={5} wrap justify='center' align='center'>
                {images.map((image) => {
                    return (
                        <Image key={image.id} src={image.src} alt={image.alt} width={140} height={140} ></Image>
                    )
                })}
            </Flex>
        </Card>

    )
}

export default ImageGallery