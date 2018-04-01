import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

interface IndexPageProps {
  location: {
    pathname: string;
  };
}

export default (props: IndexPageProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
      />
      <Container text>
        <Header inverted as="h1">Jonathan Osmeña</Header>
        <Header inverted as="h2">Web Applications Developer</Header>
        <a href="#" onClick={()=>window.open("https://www.dropbox.com/s/jp078t6umuxyxcg/Jonathan_Osme%C3%B1a_Resume.pdf?dl=0")}>
          <Button primary size="huge">Download my CV!</Button>
        </a>
      </Container>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid columns="3" textAlign="center" divided relaxed stackable className="container">
        <Grid.Row>
          <Grid.Column>
            <Header>
                <h2>Experience Summary</h2>
            </Header>
            <p>
              Web Application Developer with over <span>7</span> years of experience in IT and web/software development.
            </p>
          </Grid.Column>
          <Grid.Column>
            <Header>              
                Skills
            </Header>
            <ul>
              <li>PHP / XAMPP / Wordpress / CodeIgniter / Adobe Business Catalyst</li>
              <li>MySQL / MS Access / DB2 / MongoDB</li>
              <li>React.js / Node.js</li>
              <li>HTML5 / CSS3</li>
              <li>Git / SVN</li>
              <li>Jira / Trello / RTC</li>
              <li>Agile / Scrum / Kanban</li>
              <li>Automated Testing / Test Driven Development</li>
              <li>C++ / MFC</li>
              <li>Linux / Windows</li>
            </ul>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name="wizard"></Icon>
            </Header>
            <p>
              <i>This is a simple static website made with react/typescript/gatsby.</i>
            </p>
          </Grid.Column>         
        </Grid.Row>
      </Grid>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">      
      <Grid stackable verticalAlign="top" className="container">      
        <Grid.Row>   

          <Grid.Column width="6" floated="left" verticalAlign="top">
            <Header><h2>Work History</h2></Header>       
          </Grid.Column>

          <Grid.Column width="8">
            <Header>Web Application Developer</Header>
            <span>2014-08 to 2017-08</span>
            <h4>IBM Solutions Delivery - Cebu City, Philippines</h4>
            <p>
                Recently worked as a Web application developer with IBM Philippines for 3
                years focusing on maintaining and improving IBM internal websites and web
                applications again mainly using PHP, MySQL, HTML, CSS and JavaScript.
                This also involved learning new technologies like react.js/node.js and other
                skills apart from the usual front-end web stack like linux server administration
                and devOps as well as rapidly creating proof of concept prototypes for
                proposed improvements.
            </p>
            <Header>Software Development Engineer</Header>
            <span>2012-02 to 2014-07</span>
            <h4>NCR Corporation - Cebu City, Philippines</h4>
            <p>
                Returned to development after my project management role as it suited me
                better and so while working for NCR I continued the development and
                maintenance of the Self-Serv Checkout application using C++/MFC and
                adhering to software development and testing best practices while using
                various agile methodologies throughout my time there. I also worked with
                Managers, Testers, and offshore counterparts to plan development and
                document improvements to the application.
            </p>
            <Header>Project Manager</Header>
            <span>2011-01 to 2012-01</span>
            <h4>WebXpress Inc - Cebu City, Philippines</h4>
            <p>
                Was promoted to Project Manager after 2 years with WebXpress where I
                was part of the core management team who developed and implemented
                policies and procedures for web application development and operations. I
                also routinely interfaced with clients to discuss feedback, specifications,
                costs and timelines. I was also tasked with assembling and managing a
                team of six developers.
            </p>
            <Header>Web Developer</Header>
            <span>2009-10 to 2011-01</span>
            <h4>WebXpress Inc - Cebu City, Philippines</h4>
            <p>
                Started out my career as a web developer implementing and maintaining the
                functionality required by clients on their sites using different web
                technologies but mainly focusing on PHP/HTML/CSS/JS. I also developed
                and hand coded templates for implementation on our company’s proprietary
                CMS as well as various other CMSs like Wordpress and Joomla.
            </p>
          </Grid.Column>         
        </Grid.Row>
      </Grid>
    </Segment>

    
  </div>;

