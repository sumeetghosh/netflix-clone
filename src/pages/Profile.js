import React from "react";
import { useSelector } from "react-redux";
import Nav from "../components/Nav/Nav";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import "./Profile.css";

const VIEW_PLANS = [
  {
    id: 1,
    planName: "Netflix Standard",
    videoQuality: "1080p",
    btnText: "Subscribe",
  },

  {
    id: 2,
    planName: "Netflix Basic",
    videoQuality: "480p",
    btnText: "Subscribe",
  },
  {
    id: 3,
    planName: "Netflix Premium",
    videoQuality: "4K+HDR",
    btnText: "Current Package",
  },
];

function Profile() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar"
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans (Current Plan: Premium)</h3>
              <p>Renewal Date: 04/08/2021</p>
              {VIEW_PLANS.map((plan) => (
                <div className="profileScreen__plansRate" key={plan.id}>
                  <div className="rows">
                    <div className="plan-descrip">
                      <h4>{plan.planName}</h4>
                      <span className="video-quality">{plan.videoQuality}</span>
                    </div>
                    {plan.btnText === "Subscribe" ? (
                      <>
                        <div className="subscribe-btn">
                          <button>{plan.btnText}</button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="subscribe-btn gray">
                          <button>{plan.btnText}</button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ))}

              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
