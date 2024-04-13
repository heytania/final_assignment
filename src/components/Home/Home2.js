import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/myImg.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple" style={{color:"purple"}}> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hello! I'm Tania, a passionate and creative frontend developer based in Winnipeg (Canada). I have a strong love for coding and a genuine enthusiasm for crafting beautiful and functional web experiences. <br/>
              <br />
              My journey into the world of web development  began by exploring the basics of HTML and CSS, learning how to structure web content and style it to create visually appealing layouts. As I delved deeper into the world of web development, I realized that there was so much more to learn. I started to explore JavaScript to add interactivity and functionality to my web projects.. Since then, I've been on an exciting learning adventure, keeping up with the latest technologies and design trends to create engaging and responsive websites.<br/>
              <br />I am fluent in classics like <br/>
              <i>
                <b className="purple"> 
                 **Skills:** Java, Python,  HTML5, CSS3, JavaScript (ES6+), Node.js, and MySql <br/> <br/>

                **Frameworks/Libraries:** React.js, Express.js Bootstrap, jQuery <br/><br/>

                **Version Control:** Git, GitHub<br/><br/>

                **Tools:** VS Code, Chrome DevTools </b>
              </i>
              <br />
              <br />
              I'm not just a developer; I'm also a problem solver and a lifelong learner. I'm constantly seeking new challenges that push my boundaries and spark my creativity. Building web applications that make a difference and bring value to users is what drives me. &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" style={{borderRadius:"50%",height:"300px" , width:"300px"}} />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/heytania"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/taniax_2?igsh=bXlrdHcydmx5eTU%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
