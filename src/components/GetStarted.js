import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/logo.png';
import dappstore from '../assets/img/dappstore.png';
import dplaystore from '../assets/img/dplaystore.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';

export const GetStarted = () => {
    return (
        <section className="getStarted" id="getStarted">
            <AnimationOnScroll animateIn="animate__fadeIn">
                <Container>
                    <Row>
                        <Col size={12}>
                            <img className="imgLogo"
                                src={logo}
                            />
                            <h2>DOWNLOAD NOW</h2>
                            <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                                <img
                                    src={dappstore}
                                    alt="dappstore"
                                />
                            </a>
                            <a href="https://play.google.com/store/apps" target="_blank" rel="noreferrer">
                                <img
                                    src={dplaystore}
                                    alt="dplaystore"
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </AnimationOnScroll>
        </section>
    )
}