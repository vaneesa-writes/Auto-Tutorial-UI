import React, { Component } from "react";
import { Card } from "react-bootstrap";

class OrganizationProfile extends Component {
  render() {
    const {updateOrgName, updateOrgHandle, updateOrgCountry, updateOrgWebsite, handleOrgSubmit} = this.props;
    return (
      <Card>
        <Card.Body>
          <form 
          style={{
            minWidth: "20vw",
            maxWidth: "40vw",
          }}
          >
            <div
              className="form-group m-4">
              <label>Organization Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Organization Name"
                onChange={updateOrgName}
              />
            </div>
            <div className="form-group m-4">
              <label>Organization Handle</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Organization Handle"
                onChange={updateOrgHandle}
              />
            </div>

            <div className="form-group m-4">
              <label>Organization Country</label>
              <select
                className="form-control form-select form-control"
                onChange={updateOrgCountry}
              >
                <option>India</option>
                <option>USA</option>
              </select>
            </div>

            <div className="form-group m-4">
              <label>Organization Website</label>
              <input
                type="website"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="www.website.com"
                onChange={updateOrgWebsite}
              />
            </div>

            <button
              type="button"
              className="btn btn-primary w-100"
              onClick={handleOrgSubmit}
            >
              Submit
            </button>
          </form>
        </Card.Body>
      </Card>
    );
  }
}

export default OrganizationProfile;
