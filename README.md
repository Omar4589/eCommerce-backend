# eCommerce Backend 

[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

## Description

<strong>Introducing eCommerce Backend!</strong>
<br>
eCommerce Backend is a powerful, efficient, and scalable solution for managing your eCommerce store's data. Built using JavaScript, Express, Sequelize, and MySQL, this backend system allows you to easily interact with your store's data, eneabling seamless integration with various frontend applications. With the provided RESTful API, you can test and interact with the backend using Insomnia, ensuring a seamless development experience.<br>

Walkthrough Video <a id="walkthroughvideo"></a>: https://drive.google.com/file/d/18zwS_7a0DrdbmSTAQ-CNW9kbKX-txKpj/view 
    
## Table Of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)
- [Tool URL](#toolurl)
- [Technologies](#technologies)
- [Collaborators](#collaborators)
- [License](#license)

## Installation <a id="installation"></a>

1. Clone the repository to your local machine. 
2. Run `npm install` to install  all the necessary dependencies. 
3. Create a `.env` file in the root directory and set up your database credentials. If you are unfamiliar with dotenv, you can read the documentation [here](https://www.npmjs.com/package/dotenv). 
4. Open an integrated terminal using the schema.sql file in the db folder located in the root directory, log in to MySQL, and run `SOURCE schema.sql`. 
5. Switch to the database by runing `USE ecommerce_db` or the name of the database you specified in your .env file. 
6. Open an integrated terminal in the root directory and run `npm run seed` to seed the data to the database. 
7. To start the server, you can run one of the following commands: `node server.js`, `nodemon server.js`, `npm start`, or `npm run watch`.                  

## Usage <a id="usage"></a>

To use eCommerce Backend, start by testing the available API routes using Insomnia. A [walk-through video](#walkthroughvideo) that demonstrates the testing process is provided in the description section of this README. Once you are familiar with the API routes, you can integrate the backend with your frontend application and begin building a full-fledged eCommerce solution.

## Contributions <a id="contributions"></a>

Contributions to eCommerce Backend are welcomed and appreciated. Please feel free to fork the project, create a new branch, and submit a pull request with your proposed changes. 

## Tests <a id="tests"></a>

This project has no automated tests.

## Questions <a id="questions"></a>

If you have any questions about this project, please contact the project owner by visiting their GitHub profile at [github.com/Omar4589](https://:github.com/Omar4589) or by emailing them at [omar4589@hotmail.com](mailto:omar4589@hotmail.com).

## Tool URL <a id="toolurl"></a>
    
[github.com/Omar4589/eCommerce-backend](https://github.com/Omar4589/eCommerce-backend)
<br>
<br>
    
## Technologies <a id="technologies"></a>
    
The following technologies were used to develop eCommerce Backend:<br>
<br>
<strong>Languages</strong>
    
- Javascript
    
<strong>Frameworks</strong>
    
- Express
    
<strong>Libraries</strong>
    
- Sequelize
- MySQL2
- dotenv
    
<strong>APIs</strong>



<strong>Other</strong>

- Node.js
- ESlint 
- Nodemon
<br>
    
## Collaborators <a id="collaborators"></a>
    

    
## License <a id="license"></a>

This project is licensed under the MIT License.

MIT License Notice: A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.
   
