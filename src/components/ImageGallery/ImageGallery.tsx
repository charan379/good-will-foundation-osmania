import { Card, Carousel } from 'antd';
import React from 'react'

const contentStyle: React.CSSProperties = {
    height: '460px',
    color: '#fff',
    lineHeight: '460px',
    textAlign: 'center',
    background: '#364d79',
};

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
        </Card>

    )
}

export default ImageGallery