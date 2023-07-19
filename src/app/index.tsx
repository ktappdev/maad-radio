import Script from "next/script";
import React from "react";

const index = () => {
    return (
      <div>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&amp;version=v17.0"
          nonce="GLMKdyjM"
        ></Script>
      </div>
    );
};

export default index;

// function Home() {
//   return (
//     <div className="container">
//       <Script src="https://third-party-script.js"></Script>
//       <div>Home Page</div>
//     </div>
//   );
// }

// export default Home;
