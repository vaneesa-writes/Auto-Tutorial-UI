import { Button } from "@mui/material";
import React, { Component } from "react";
import OrganizationProfile from "./OrganizationProfile";
import UserProfile from "./UserProfile";

class Profiles extends Component {
  state = {
    userName: "",
    userHandle: "",
    country: "India",
    organization: {
        name: "",
        handle: "",
        country: "India",
        website: "",
    },
    showOrganizations: false,
    countries: ["India", "USA", "UK"]
  };

  // -------------Organization-------------------
  updateOrgName = (event) => {
    const new_organization = { ...this.state.organization };
    new_organization.name = event.target.value;
    this.setState({ organization: new_organization });
  };

  updateOrgHandle = (event) => {
    const new_organization = { ...this.state.organization };
    new_organization.handle = event.target.value;
    this.setState({ organization: new_organization });
  };

  updateOrgCountry = (event) => {
    const new_organization = { ...this.state.organization };
    new_organization.country = event.target.value;
    this.setState({ organization: new_organization });
  };

  updateOrgWebsite = (event) => {
    const new_organization = { ...this.state.organization };
    new_organization.website = event.target.value;
    this.setState({ organization: new_organization });
  };

  handleOrgSubmit = () => {
    console.log(this.state.organization);
  };

  // -------------User-----------
  updateUserName = (event) => {
    this.setState({ userName: event.target.value });
  };

  updateUserHandle = (event) => {
    this.setState({ userHandle: event.target.value });
  };

  updateCountry = (event) => {
    this.setState({ country: event.target.value });
  };

  handleUserSubmit = () => {
    console.log("userName " + this.state.userName);
    console.log("userHandle " + this.state.userHandle);
    console.log("Country " + this.state.country);
  };

  //----------------Profiles---------------------

  changeOrgDisplay = () => {
    const new_state = !this.state.showOrganizations;
    this.setState({ showOrganizations: new_state});
  }

  getOrgButtonText = () => {
    let text;
    if (this.state.showOrganizations === true) {
        text = "I don't want to create Organization";
    }
    else {
        text = "I want to Create Organization";
    }
    return text;
  }

  render() {
    return (
      <div className="container w-100"
        style={{
            minWidth: "50vw",
            maxWidth: "80vw",
        }}
      >
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <UserProfile 
                updateUserName={this.updateUserName}
                updateUserHandle={this.updateUserHandle}
                updateCountry={this.updateCountry}
                handleUserSubmit={this.handleUserSubmit}
                countries={this.state.countries}
            >
            <Button
            className=" w-100 mt-2"
            variant="contained"
            onClick={this.changeOrgDisplay}
            >{this.getOrgButtonText()}</Button>

            </UserProfile>


          </div>
          <div className="col-md-auto">
            {this.state.showOrganizations && 
                <OrganizationProfile 
                    updateOrgName={this.updateOrgName}
                    updateOrgHandle={this.updateOrgHandle}
                    updateOrgCountry={this.updateOrgCountry}
                    updateOrgWebsite={this.updateOrgWebsite}
                    handleOrgSubmit={this.handleOrgSubmit}
                />
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Profiles;
