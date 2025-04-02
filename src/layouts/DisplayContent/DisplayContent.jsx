import React from "react";
import ContentHeader from "../ContentLayout/Contentheader";
import ContentNavigation from "../ContentNavigation/ContentNavigation";
import Content from "../ContentPage/Content";


const DisplayContent = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 mt-2">
      {/* Content Header Navbar */}
      <ContentHeader />

      {/* Content Navigation (Second Navbar) */}
      <ContentNavigation />

      {/* Main Content Section */}
      <Content />
    </div>
  );
};

export default DisplayContent;
