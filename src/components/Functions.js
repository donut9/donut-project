import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/func1.png";
import meter2 from "../assets/img/func2.png";
import meter3 from "../assets/img/func3.png";
import colorSharp from "../assets/img/color-sharp.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';

export const Functions = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="function" id="function">
            <AnimationOnScroll animateIn="animate__fadeIn">
                <Container>
                    <Row>
                        <Col size={12}>
                            <h2>Functions</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme function-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
                <img className="background-image" src={colorSharp} alt="Image" />

            </AnimationOnScroll>
        </section>
    )
}