import * as React from "react";
import { Header, Container, Segment, Icon } from "semantic-ui-react";

export default () => {
  return (
    <Container>
      <Segment vertical>
        <Header as="h2">
          <Icon name="info circle" />
          <Header.Content>
            About
          </Header.Content>
        </Header>
      </Segment>      
      <Segment vertical>
        <h1>Hello!</h1>
        <p>            
            My name is <strong>Jonathan Osmeña</strong> and I am a Web Applications Developer
            originally from <a href="#">Cebu City</a>, Philippines 
            who moved to <a href="#">Fredericton</a>, Canada in September of 2017.            
        </p>
        <p>I'm on the look out for new opportunities so send me an <a href="mailto:jonathan.osmena@gmail.com">email</a> if you'd like to work together.</p>
        {/*}
        <span>
            <h6>The original template was created by @fabien0102.</h6>
        </span>                       
        */}
      </Segment>
    </Container>
  );
};
