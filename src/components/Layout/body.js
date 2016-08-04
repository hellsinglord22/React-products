import React, { Components } from 'react'; 


class Body extends Components {
    render() {
        return(
                <div className="container">
                    <div className="row">

                        <div className="col-md-3 col-xs-3">
                            <div className="well">
                            </div>
                        </div>

                        <div className="col-md-9 col-xs-9">
                            <div className="well">
                        </div>
                        </div>
                    </div>
                </div>
        ); 
    }
}


export default Body; 