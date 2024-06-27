import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/Images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>Data Collection: We collect personal information such as name, email, and payment details to process orders and improve our services.</p>
          <p>Data Usage: Your information is used strictly for order processing, customer support, and personalized marketing.</p>
          <p>Data Protection: We implement robust security measures to safeguard your personal data against unauthorized access.</p>
          <p>Third-Party Sharing: We do not sell or share your personal information with third parties, except for essential service providers.

</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;