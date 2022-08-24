import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/social-blog2.gif";
import projImg2 from "../assets/img/movieapp.gif";
import projImg3 from "../assets/img/recipe-app.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import colorSharp from "../assets/img/color-sharp.png";



export const Projects = () => {

  const projects = [
    {
      title: "Blog App with React & Firebase",
      description: "Users can register and log in and write, update, and search a blog",
      imgUrl: projImg1,
    },
    {
      title: "Movie App with React & Firebase",
      description: "Display cinema posters by using the Tmdb API. There is a search feature according to the entered word.",
      imgUrl: projImg2,
    },
    {
      title: "Recipe App",
      description: "Users can search recipes by using the Edamam API and can see the details.",
      imgUrl: projImg3,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg1,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  const projects2 = [
    {
      title: "Blog App with React & Firebase",
      description: "Users can register and log in and write, update, and search a blog",
      imgUrl: projImg1,
    },
    {
      title: "Movie App with React & Firebase",
      description: "Display cinema posters by using the Tmdb API. There is a search feature according to the entered word.",
      imgUrl: projImg2,
    },
    {
      title: "Recipe App",
      description: "Users can search recipes by using the Edamam API and can see the details.",
      imgUrl: projImg3,
    }]

    const projects3 = [
      {
        title: "Blog App with React & Firebase",
        description: "Users can register and log in and write, update, and search a blog",
        imgUrl: projImg1,
      },
      {
        title: "Movie App with React & Firebase",
        description: "Display cinema posters by using the Tmdb API. There is a search feature according to the entered word.",
        imgUrl: projImg2,
      },
      {
        title: "Recipe App",
        description: "Users can search recipes by using the Edamam API and can see the details.",
        imgUrl: projImg3,
      }]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">React</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Django</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Backend</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                        {
                          projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                        {
                          projects3.map((project, index) => {
                            return (
                              <ProjectCard
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
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="ImageRight" />
      <img className="background-image-left" src={colorSharp} alt="ImageLeft" />
    </section>
  )
}