import React, { Component } from 'react'; 
import { Grid } from 'react-bootstrap'; 
import { Col } from 'react-bootstrap'; 
import { Row } from 'react-bootstrap'; 
import { Well } from 'react-bootstrap'; 


class Center extends Component {
    render() {
        const mainBodyInstance = (
            <Grid>
                <Row>

                    <Col md={4}>
                        <Well></Well>
                    </Col>

                    <Col md={8}>
                        <Well></Well>
                    </Col>
                    
                </Row>
            </Grid>
        ); 

        return(mainBodyInstance); 
    }
}


export default Center; 