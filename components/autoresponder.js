import React from "react";

function Autoresponder() {
  return (
    <div>
      {/* <style>
        .myDiv {
            background-color: #007ddb;
            color:#fff;
            text-align:center;
              flex-container;width:100%;
            }
</style> */}
      <div>
        <div class="myDiv">
          <img src="/johnmakola/images/Logo.png" alt="SS" />
          <h1>Thank You</h1>
        </div>

        <div style="padding:2.5rem; align-text:justify;">
          <div style="flex-container">
            Dear<p style="font-weight:bold;"> %from%</p>,
          </div>
          <p>
            Thank you for your interest in taking a trip with
            <span style="color:#007ddb; font-weight:bold;">
              Simple Simon Safaris
            </span>
            . Our
            <span style="color:#007ddb; font-weight:bold;">
              Hikes, Trails, Treks, Jungle Safaris and tours expeditions,
            </span>
            are a never miss ultimate experience.
          </p>
          <p>
            Our team is committed to providing you with exceptional service and
            ensuring that every detail of your trip is meticulously planned and
            executed.
          </p>
          <p>
            We will review your request and carefully consider your requirements
            and provide you with a proposal that fits your budget and
            expectations.
          </p>
          <p>
            Thank you for considering
            <span style="color:#007ddb; font-weight:bold;">
              Simple Simon Safaris
            </span>
            as your travel partner. We are excited about the prospect of serving
            you and creating unforgettable memories together.
          </p>
          <p>Best regards,</p>
          <div style="flex-container;">
            <span style="font-weight:bold;">Email:</span>
            <p style="color:#007ddb; font-weight:bold;">
              simplesimonsafaris@gmail.com
            </p>
          </div>
          <div style="flex-container;">
            <span style="font-weight:bold;">Email 2:</span>
            <p style="color:#007ddb; font-weight:bold;">
              info@simplesimonsafaris.com
            </p>
          </div>
          <div style="flex-container;">
            <span style="font-weight:bold;">Tel No:</span>
            <p style="color:#007ddb; font-weight:bold;">+254 726 474 326</p>
          </div>
          <div style="flex-container;">
            <span style="font-weight:bold;">Tel No:</span>
            <p style="color:#007ddb; font-weight:bold;">+254 725 588 966</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Autoresponder;
