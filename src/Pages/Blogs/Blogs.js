import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blog">
        <h2>1. Difference between authorization and authentication.</h2>
        <p>
          Simply put, authentication is the process of verifying who someone is,
          whereas authorization is the process of verifying what specific
          applications, files, and data a user has access to
        </p>

        <p>Some difference between authorization and authentication. </p>
        <li>
          Authentication verifies who the user is and authorization determines
          what resources a user can access.
        </li>
        <li>
          Authentication works through passwords, one-time pins, biometric
          information, and other information provided or entered by the user. on
          the other hand authorization works through settings that are
          implemented and maintained by the organization.
        </li>
        <li>
          Authentication is the first step of a good identity and access
          management process and authorization always takes place after
          authentication.
        </li>
        <li>
          Authentication is visible to and partially changeable by the user and
          Authorization isn’t visible to or changeable by the user.
        </li>
      </div>
      <div className="blog">
        <h2>
          2. Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p>
          <strong>Using firebase</strong>: Google Firebase offers many features
          that pitch it as the go-to backend development tool for web and mobile
          apps. It reduces development workload and time. And it's a perfect
          prototyping tool. Firebase is simple, lightweight, friendly, and
          industrially recognized.
        </p>
        <p>
          <strong>Other authentication</strong>:{" "}
        </p>
        <li>Lastpass.</li>
        <li>Microsoft Authenticator.</li>
        <li>Authy by Twilio.</li>
        <li>2FA Authenticator.</li>
        <li>Duo Mobile.</li>
        <li>Aegis Authenticator.</li>
      </div>
      <div className="blog">
        <h2>
          3. What other services does firebase provide other than
          authentication?
        </h2>
        <p>
          There are many services which Firebase provides than other
          authentication, Most useful of them are:
        </p>
        <li>Cloud Firestore</li>
        <li>Cloud Functions.</li>
        <li>Authentication.</li>
        <li>Hosting.</li>
        <li>Cloud Storage.</li>
        <li>Google Analytics.</li>
        <li>Predictions.</li>
        <li>Cloud Messaging.</li>
      </div>
    </div>
  );
};

export default Blogs;
