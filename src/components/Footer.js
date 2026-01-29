import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import codinglogo from "../assets/img/comprog-logo.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={codinglogo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rameshkarr/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/ramGit22" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
              {/* <a href="#"><img src={navIcon3} alt="Icon" /></a> */}
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
