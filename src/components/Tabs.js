import React, { Component } from "react";
  import { MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import { Typography } from "@material-ui/core";

  class TabsDefault extends Component {
    state = {
      activeItem: "1"
    };

    toggle = tab => e => {
      if (this.state.activeItem !== tab) {
        this.setState({
          activeItem: tab
        });
      }
    };

    render() {
      return (
        <div>
        <MDBNav className="nav-tabs">
          <MDBNavItem>
            <MDBNavLink active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
              <Typography className="font-l">Image</Typography>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="font-l"  active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
            <Typography className="font-l">Details</Typography>
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="font-l" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
            <Typography className="font-l">Documents</Typography>
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
            <div className="mt-2">
            <img src={this.props.img} className="img-responsive border-md rounded shadow" alt="product"/>
            </div>
          </MDBTabPane>
          <MDBTabPane tabId="2" role="tabpanel">
            <p className="mt-2">
              {this.props.usage}
            </p>
          </MDBTabPane>
          <MDBTabPane tabId="3" role="tabpanel">
            <p className="mt-2">
              {this.props.contains}
            </p>
          </MDBTabPane>
        </MDBTabContent>
      </div>
    );
  }
}
export default TabsDefault;