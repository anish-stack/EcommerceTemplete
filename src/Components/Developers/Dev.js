import React from 'react';
import { Link } from 'react-router-dom';
import './DeveloperPage.css'; // Import your CSS file for styling

const DeveloperPage = () => {
  return (
    <div className="dev-page">
   
      <div className="dev-content">
        <h2>Welcome to Devanish's Demo Website</h2>
        <p>
          This is a demonstration website created by Devanish to showcase their skills and knowledge in web development. The website URL is <a href="https://www.devanish.site/" target="_blank" rel="noopener noreferrer">https://www.devanish.site/</a>.
        </p>
        <p>
          Here's a brief overview of the technologies and tools used to build this website:
        </p>
        <ul className="dev-tech-list">
          <li>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" alt="React" />
            React: A JavaScript library for building user interfaces.
          </li>
          <li>
            <img src="https://reactrouter.com/_brand/react-router-stacked-color.png" alt="React Router" />
            React Router: A library for handling routing in React applications.
          </li>
          <li>
            <img src="https://png.pngtree.com/png-vector/20190412/ourmid/pngtree-api-file-document-icon-png-image_927991.jpg" alt="Fake API" />
            FakeAPI: Simulated API data for testing and development.
          </li>
          <li>
            <img src="https://user-images.githubusercontent.com/16843090/101181820-f3a63780-3612-11eb-9d3a-05452f2b0ad8.png" alt="Axios" />
            Axios: A promise-based HTTP client for making API requests.
          </li>
          <li>
            <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--nF5_-WTo--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/c2zb5t40whr7o2r36eag.png" alt="Toast" />
            Toast: A library for displaying notifications and toasts in web applications.
          </li>
          <li>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
            GitHub: A platform for version control and collaboration on software projects.
          </li>
          <li>
            <img src="https://icon-library.com/images/css-icon-png/css-icon-png-0.jpg" alt="CSS" />
            CSS: Cascading Style Sheets for website styling.
          </li>
        </ul>
      </div>
      <div className="dev-banner">
      <h2>This Is My Real Website Img Go and Check </h2>


      <a href='https://www.devanish.site/'>   <img src="https://i.ibb.co/3YPhXTH/sss.png" alt="Demo Website Screenshot" /></a>
      </div>
      <Link className='shop-cta' to="/">Back to Home</Link>
    </div>
  );
};

export default DeveloperPage;
