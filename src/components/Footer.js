import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/gzm-re.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from '../assets/img/github.svg';


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
          <div className='social-icon'>
                <a href='https://www.linkedin.com/in/gizem-%C3%B6d%C3%BCn-3aa3b9212/'><img src={navIcon1} alt="" /></a>
                <a href='https://www.facebook.com/gizem.odun.399'><img src={navIcon2} alt="" /></a>
                <a href='https://github.com/gizem28'><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved Gizem Odun.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer