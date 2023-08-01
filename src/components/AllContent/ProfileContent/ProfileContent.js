import React, { Component } from "react";
import ContentContainerCard from "../ContentContainerCard";
import profilePicture from "../../../images/profile-pic.png";
import "./ProfileContent.css";

import Cookies from "js-cookie";

class ProfileContent extends Component {
  state = {
    userProfile: {},
  };

  componentDidMount() {
    this.getUserProfile();
  }

  getUserProfile = async () => {
    const userId = Cookies.get("user_id");

    const apiUrl = "https://bursting-gelding-24.hasura.app/api/rest/profile";

    const options = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": userId,
      },
    };

    try {
      const response = await fetch(apiUrl, options);
      const fetchData = await response.json();
      const { users } = fetchData;
      const user = users[0];
      const userProfile = {
        id: user.id,
        city: user.city,
        coutry: user.country,
        dateOfBirth: user.date_of_birth,
        email: user.email,
        userName: user.name,
        permanentAddress: user.permanent_address,
        postalCode: user.postal_code,
        presentAddress: user.present_address,
      };

      this.setState({ userProfile });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { userProfile } = this.state;

    const profileData = [
      {
        mainName: "Your Name",
        boxName: userProfile.userName,
      },
      {
        mainName: "User Name",
        boxName: userProfile.userName,
      },
      {
        mainName: "Email",
        boxName: userProfile.email,
      },
      {
        mainName: "Password",
        boxName: "**********",
      },
      {
        mainName: "Date of Birth",
        boxName: userProfile.dateOfBirth,
      },
      {
        mainName: "Present Address",
        boxName: "San Jose, California, USA",
      },
      {
        mainName: "Permanent Address",
        boxName: "San Jose, California, USA",
      },
      {
        mainName: "City",
        boxName: "San Jose",
      },
      {
        mainName: "Postal Code",
        boxName: "45962",
      },
      {
        mainName: "Country",
        boxName: "USA",
      },
    ];

    return (
      <ContentContainerCard>
        <div className="profile-content-container">
          <img className="main-profile" src={profilePicture} alt="profile-" />

          <ul className="profile-names-info-container">
            {profileData.map((eachItem, index) => (
              <li className="profile-names-info-list" key={index}>
                <p className="profile-your-name">{eachItem.mainName}</p>
                <div className="name-box">
                  <p className="profile-user-name">{eachItem.boxName}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </ContentContainerCard>
    );
  }
}

export default ProfileContent;
