import React, {Component} from "react";
import { Navbar }  from 'react-bootstrap'; 
import { FormGroup } from 'react-bootstrap'; 
import { FormControl} from 'react-bootstrap'; 
import  { Button } from 'react-bootstrap';  

class Nav extends Component {

    render() {

    const navbarInstance = (
    <Navbar>
            <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Market</a>
            </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Navbar.Form pullLeft>
                <FormGroup>
                <FormControl type="text" placeholder="Search" />
                </FormGroup>
                {' '}
                <Button type="submit">Search</Button>
            </Navbar.Form>
            </Navbar.Collapse>
        </Navbar>
    );
        
        return (navbarInstance); 
    }
}


export default Nav; 