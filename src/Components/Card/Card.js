import React from "react";

import "./Card.css";

export default function Card(props) {
  return (
    <>
      <div className="card-container">
        <div className="card-id-wrapper">
          <div className="card-id" key={props.cardDetails.id}>
            {props.cardDetails.id}
          </div>
          <div className="card-profile">
            <div className="card-profile-initial">
              {props.cardDetails.userObj.name[0]}
              {props.cardDetails.userObj.name[1]}
            </div>
            <div
              className={
                props.cardDetails.userObj.available
                  ? "card-profile-initial-available card-profile-initial-available-true"
                  : "card-profile-initial-available"
              }
            ></div>
          </div>
        </div>
        <div className="card-title" key={props.cardDetails.id}>
          {props.cardDetails.title}
        </div>
        <div className="card-tag">
          {
            {
              0: (
                <div className="card-tag-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 1024 1024"
                  >
                    <path
                      fill="currentColor"
                      d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"
                    />
                  </svg>
                </div>
              ),
              1: (
                <div className="card-tag-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.625 0.875C1.67184 0.875 0.875 1.67184 0.875 2.625V11.375C0.875 12.3281 1.67184 13.125 2.625 13.125H11.375C12.3281 13.125 13.125 12.3281 13.125 11.375V2.625C13.125 1.67184 12.3281 0.875 11.375 0.875H2.625ZM6.125 3.5H7.875L7.65967 7.87356H6.34375L6.125 3.5ZM7.875 9.625C7.875 10.1083 7.48325 10.5 7 10.5C6.51675 10.5 6.125 10.1083 6.125 9.625C6.125 9.14174 6.51675 8.75 7 8.75C7.48325 8.75 7.875 9.14174 7.875 9.625Z"
                      fill="#5E5E5F"
                    />
                  </svg>
                </div>
              ),
              2: (
                <div className="card-tag-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 8H2.5C1.94772 8 1.5 8.44772 1.5 9V13C1.5 13.5523 1.94772 14 2.5 14H3.5C4.05228 14 4.5 13.5523 4.5 13V9C4.5 8.44772 4.05228 8 3.5 8Z"
                      fill="#5C5C5E"
                    />
                    <path
                      d="M8.5 5H7.5C6.94772 5 6.5 5.44772 6.5 6V13C6.5 13.5523 6.94772 14 7.5 14H8.5C9.05228 14 9.5 13.5523 9.5 13V6C9.5 5.44772 9.05228 5 8.5 5Z"
                      fill="#5C5C5E"
                    />
                    <path
                      d="M13.5 2H12.5C11.9477 2 11.5 2.44772 11.5 3V13C11.5 13.5523 11.9477 14 12.5 14H13.5C14.0523 14 14.5 13.5523 14.5 13V3C14.5 2.44772 14.0523 2 13.5 2Z"
                      fill="#5C5C5E"
                      fillOpacity="0.4"
                    />
                  </svg>
                </div>
              ),
              3: (
                <div className="card-tag-icon">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 8H2.5C1.94772 8 1.5 8.44772 1.5 9V13C1.5 13.5523 1.94772 14 2.5 14H3.5C4.05228 14 4.5 13.5523 4.5 13V9C4.5 8.44772 4.05228 8 3.5 8Z"
                      fill="#5C5C5E"
                    />
                    <path
                      d="M8.5 5H7.5C6.94772 5 6.5 5.44772 6.5 6V13C6.5 13.5523 6.94772 14 7.5 14H8.5C9.05228 14 9.5 13.5523 9.5 13V6C9.5 5.44772 9.05228 5 8.5 5Z"
                      fill="#5C5C5E"
                    />
                    <path
                      d="M13.5 2H12.5C11.9477 2 11.5 2.44772 11.5 3V13C11.5 13.5523 11.9477 14 12.5 14H13.5C14.0523 14 14.5 13.5523 14.5 13V3C14.5 2.44772 14.0523 2 13.5 2Z"
                      fill="#5C5C5E"
                    />
                  </svg>
                </div>
              ),
              4: (
                <div className="card-tag-icon">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.625 0.875C1.67184 0.875 0.875 1.67184 0.875 2.625V11.375C0.875 12.3281 1.67184 13.125 2.625 13.125H11.375C12.3281 13.125 13.125 12.3281 13.125 11.375V2.625C13.125 1.67184 12.3281 0.875 11.375 0.875H2.625ZM6.125 3.5H7.875L7.65967 7.87356H6.34375L6.125 3.5ZM7.875 9.625C7.875 10.1083 7.48325 10.5 7 10.5C6.51675 10.5 6.125 10.1083 6.125 9.625C6.125 9.14174 6.51675 8.75 7 8.75C7.48325 8.75 7.875 9.14174 7.875 9.625Z"
                      fill="#5E5E5F"
                    />
                  </svg>
                </div>
              ),
            }[props.cardDetails.priority]
          }

          {props.cardDetails.tag.map((tag) => {
            return (
              <div className="card-tag-box">
                <div className="card-tag-title">{tag}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
