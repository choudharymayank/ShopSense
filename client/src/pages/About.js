import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Our e-commerce platform offers a vast selection of products, ranging from electronics and fashion to home goods and groceries, all at competitive prices. We pride ourselves on providing excellent value, with frequent discounts and deals to ensure customers always get the best prices. With a user-friendly interface, shoppers can easily browse, compare, and purchase products with just a few clicks. Our secure payment system and reliable customer service ensure a seamless shopping experience. Join our community of satisfied customers and discover the convenience and savings of shopping with us.






          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;