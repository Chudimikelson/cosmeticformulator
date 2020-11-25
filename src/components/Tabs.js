import React, { Component } from "react";
  import { MDBContainer, MDBTabPane, MDBTabContent, MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

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
            <MDBNavLink className="font-regular" link to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab" >
              Details
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="font-regular" link to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab" >
              Documents
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="font-regular" link to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" >
              Reviews
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem} >
          <MDBTabPane tabId="1" role="tabpanel">
            <p className="mt-2">
              {this.props.description}
            </p>
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