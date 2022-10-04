import { Col, Container, Row, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import 'animate.css';

export const Projects = () => {

    const reactJs = [
        {
            title: "DONUT Project",
            description: "Solution for Visual Impairment in Children",
            imgUrl: projImg1,
        },
        {
            title: "DONUT Project",
            description: "Solution for Visual Impairment in Children",
            imgUrl: projImg1,
        },
        {
            title: "DONUT Project",
            description: "Solution for Visual Impairment in Children",
            imgUrl: projImg1,
        },
        {
            title: "DONUT Project",
            description: "Solution for Visual Impairment in Children",
            imgUrl: projImg1,
        },
        {
            title: "DONUT Project",
            description: "Solution for Visual Impairment in Children",
            imgUrl: projImg1,
        },
        {
            title: "DONUT Project",
            description: "Solution for Visual Impairment in Children",
            imgUrl: projImg1,
        },
    ];

    const androidDev = [
        {
            title: "BlOOD DONATION Project",
            description: "Find a Blood Donner",
            imgUrl: projImg2,
        },
        {
            title: "BlOOD DONATION Project",
            description: "Find a Blood Donner",
            imgUrl: projImg2,
        },
        {
            title: "BlOOD DONATION Project",
            description: "Find a Blood Donner",
            imgUrl: projImg2,
        },
        {
            title: "BlOOD DONATION Project",
            description: "Find a Blood Donner",
            imgUrl: projImg2,
        },
        {
            title: "BlOOD DONATION Project",
            description: "Find a Blood Donner",
            imgUrl: projImg2,
        },
        {
            title: "BlOOD DONATION Project",
            description: "Find a Blood Donner",
            imgUrl: projImg2,
        },
    ];

    const iot = [
        {
            title: "GAS LEAKAGE Project",
            description: "Alert when Gas Leakage",
            imgUrl: projImg3,
        },
        {
            title: "GAS LEAKAGE Project",
            description: "Alert when Gas Leakage",
            imgUrl: projImg3,
        },
        {
            title: "GAS LEAKAGE Project",
            description: "Alert when Gas Leakage",
            imgUrl: projImg3,
        },
        {
            title: "GAS LEAKAGE Project",
            description: "Alert when Gas Leakage",
            imgUrl: projImg3,
        },
        {
            title: "GAS LEAKAGE Project",
            description: "Alert when Gas Leakage",
            imgUrl: projImg3,
        },
        {
            title: "GAS LEAKAGE Project",
            description: "Alert when Gas Leakage",
            imgUrl: projImg3,
        },
    ];

    return (
        <section className="project" id="project">
            <AnimationOnScroll animateIn="animate__fadeIn">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">REACT JS</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Android Development</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">IOT</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            reactJs.map((reactJs, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...reactJs} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            androidDev.map((androidDev, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...androidDev} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            iot.map((iot, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...iot} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            </AnimationOnScroll>
        </section>
    )
}