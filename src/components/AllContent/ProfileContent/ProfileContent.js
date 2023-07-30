import React from "react";
import ContentContainerCard from "../ContentContainerCard";
import profilePicture from "../../../images/profile-pic.png";
import "./ProfileContent.css";

const profileData = [
  {
    mainName: "Your Name",
    boxName: "Charlene Reed",
  },
  {
    mainName: "User Name",
    boxName: "Charlene Reed",
  },
  {
    mainName: "Email",
    boxName: "charlenereed@gmail.com",
  },
  {
    mainName: "Password",
    boxName: "**********",
  },
  {
    mainName: "Date of Birth",
    boxName: "25 January 1990",
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

function ProfileContent() {
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

export default ProfileContent;
