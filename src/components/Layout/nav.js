import React, {Component} from "react";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">                
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3 col-md-3"> 
                            <form className="navbar-form" role="search">
                                <div className="input-group">
                                    <input type="text" class="form-control" placeholder="Search" name="q" />
                                    <div className="input-group-btn">
                                        <button className="btn btn-default" type="submit"><i className="glyphicon glyphicon-search"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> 
            </nav>
        ); 
    }
}


export default Nav; 