import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { CertificateCard } from "./CertificateCard";
import projImg1 from "../assets/cert/1.png";
import projImg2 from "../assets/cert/2.png";
import projImg3 from "../assets/cert/3.png";
import projImg4 from "../assets/cert/4.png";
import projImg5 from "../assets/cert/5.png";
import projImg6 from "../assets/cert/6.png";
import projImg7 from "../assets/cert/7.png";
import projImg8 from "../assets/cert/8.png";
import projImg9 from "../assets/cert/r1.png";
import projImg10 from "../assets/cert/r2.png";
import projImg11 from "../assets/cert/r3.png";
import projImg12 from "../assets/cert/r4.png";
import projImg13 from "../assets/cert/r5.png";



import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import colorSharp from "../assets/img/color-sharp.png";



export const Certificates = () => {

  const webprojects = [
    {
      imgUrl: projImg5,
    },
    {
      
      imgUrl: projImg3,
    },
    {
      imgUrl: projImg1,
    },
    {
        imgUrl: projImg8,
      },
      {
        imgUrl: projImg7,
      },
      {
        imgUrl: projImg6,
      },
  ];

  const frontendprojects= [
    {
      
      imgUrl: projImg4,
    },
    {
      
      imgUrl: projImg9,
    },
    {
      
      imgUrl: projImg10,
    },
    {
      
      imgUrl: projImg11,
    },
    {
      
      imgUrl: projImg12,
    },
    {
      
      imgUrl: projImg13,
    }
  ]

    const backendprojects = [
      {
        imgUrl: projImg2,
      },
    ]

  return (
    <section className="certificate" id="certificates">
      <Container>
        <Row>
          <Col size={12}>
                <h2>Certificates</h2>
                <br></br>
                <Tab.Container id="cer-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Web</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Frontend</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Backend</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" >
                    <Tab.Pane eventKey="first">

                      <Row>
                        {
                          webprojects.map((project, index) => {
                            return (
                              <CertificateCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          frontendprojects.map((project, index) => {
                            return (
                              <CertificateCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          backendprojects.map((project, index) => {
                            return (
                              <CertificateCard
                                key={index}
                                {...project}
                                />
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
      <img className="background-image-right" src={colorSharp2} alt="ImageRight" />
      <img className="background-image-left" src={colorSharp} alt="ImageLeft" />
    </section>
  )
}