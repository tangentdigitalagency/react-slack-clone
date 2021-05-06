import React from 'react';
import {Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react'; 
import { Link } from 'react-router-dom';

class Register extends React.Component {

    //Handle Change For form
    state = {}

    handleChange = () => {}

    render(){

        return(
           <Grid textAlign="center" verticalAlign="middle" className="app">
               <Grid.Column style={{maxWidth: 450}}>
                    <Header as="h2" icon color="black" textAlign="center">
                        <Icon name="puzzle piece" color="black" />
                            Register For Slack
                    </Header>

                    <Form size="large">
                        <Segment stacked>
                            <Form.Input fluid name="User Name" icon="user" iconPosition="left" placeholder="Enter Your Username" onchange={this.handleChange} type="text" />

                            <Form.Input fluid name="Email Address" icon="mail" iconPosition="left" placeholder="Enter Your Email" onchange={this.handleChange} type="email" />

                            <Form.Input fluid name="Password" icon="lock" iconPosition="left" placeholder="Enter Your Password" onchange={this.handleChange} type="password" />

                            <Form.Input fluid name="Repeart Password" icon="repeat" iconPosition="left" placeholder="Re-Enter Your Password" onchange={this.handleChange} type="password" />

                            <Button color="black"> Submit </Button>
                        </Segment>
                    </Form>
                
                    <Message> Already A User? <Link to="/login"> Login Here!</Link></Message>
               </Grid.Column>
           </Grid>
        )
    }
}

export default Register;