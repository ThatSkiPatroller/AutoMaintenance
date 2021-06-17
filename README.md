# Auto Wizard

Auto Wizard is a MERN stack application that allows you to choose servicing options for your car on a timely basis with trusted local dealers or service providers 
so that your commuter friend remains in the best of healths as long as you possess it.

## Table of contents

* [Application URL](#url)
* [Contributors](#contributors)
* [Screenshots](#screenshots)
* [About this project](#about-this-project)
  * [How the app is built](#how-the-app-is-built)
  * [Structure of the project](#project-structure)
  * [App workflow](#workflow)
* [Getting started](#getting-started)
* [Deploying the application](#deployment)
* [Technologies used to create app](#technologies-used)
  * [Back end technologies](#Backend)
  * [Front end technologies](#Frontend)
* [Direction for future development](#future)
* [Issues](#Issues)

## <a name="url"></a>Live
<https://obscure-cove-65281.herokuapp.com//>


<p>The slides from that presentation are available <a href="https://docs.google.com/presentation/d/1kAzeYUtEs_qdlw4Jyp59vzGvgNlSB1CJQ1UI06oKbBQ/edit#slide=id.gcdde305396_0_6">here</a>.</p>

## <a name="contributors"></a>Contributors
The Auto Wizard app was created by a team of 3 developers.

## <a name="screenshots"></a> Screenshots

## <a name="about-this-project"></a> About this project
In this pandemic phase, many of us would have missed servicing cars on a timely basis, especially if your preferred dealer is far away from home. Car being a lifeline in our lives, it’s still important to continue servicing it periodically.
How about an application where you can find local nearby dealers providing servicing options & as an added bonus, pick up & also deliver your car to your doorstep over your night time. Car would be picked up when you go to sleep and delivered at your wakeup time.
Well, our app does just that & much more. Hope you find it valuable.

### <a name="how-the-app-is-built"></a> How the app is built
On the front end side, this project is built using React,interfaces. Material UI is a css framework that helps with building these components. Material UI is a React component library that implements Google’s material design.

On the back end side, this project uses MongoDB, Node, Express, Mongoose ORM (Object Relational Mapper), Passport, and various third party packages. Node, MongoDB, and Mongoose are used to query and route data in the app. Express is the backend web framework used for this app. Passport is authentication middleware for Node.js (that is, the technology used to log users into the app). 

## <a name="getting-started"></a> Getting started

The following section will take you through the steps of setting up this app and getting it running locally on your computer.

To set up this application locally on your computer, perform the following steps:
  1. [Clone the repository](#clone-repository)
  2. [Install Node.js](#install-node)
  3. [Install the project dependencies](#dependencies)
  4. [Install npm](#install-npm)
  5. [Install MongoDB](#install-mongo)
  6. [Start the daemon for MongoDB](#mongod)
  7. [Start the MongoDB shell](#mongoshell)
  8. [Install Robo 3T](#install-robo)
  9. [Start the Express server and React development server](#start-server)

###  <a name="clone-repository"></a> 1. Clone the repository
The first step is to clone the project repository to a local directory on your computer. To clone the repository, run the following commands:
<pre>
git clone https://github.com/ThatSkiPatroller/AutoMaintenance.git
cd ./AutoMaintainance
</pre>

###  <a name="install-node"></a> 2. Install Node.js

<p>If you don't already have Node.js installed on your computer, you can install the latest version <a href="https://nodejs.org/en/">here</a>.</p>

### <a name="install-npm"></a> 3. Install npm libraries
To be able to install the dependencies and start the application locally, you will need to install npm.
<pre>npm install </pre>


###  <a name="dependencies"></a> 4. Install the project dependencies.

<p>The following packages are dependencies to the project.<p>

<ul>
	<li><b>express</b> -  a Node.js web application framework (https://www.npmjs.com/package/express).</li>
	<li><b>body-parser</b> - a package used to parse incoming request bodies in a middleware. (https://www.npmjs.com/package/body-parser)</li>
  <li><b>axios</b> - a promise based HTTP client for the browser and node.js (https://www.npmjs.com/package/axios)</li>
  <li><b>mongoose</b> - an ORM that allows you to connect to your MongoDB database and allows you to have access to the MongoDB commands to perform create, read, update, and delete operations on the database (https://www.npmjs.com/package/mongoose).</li>
  <li><b>connect-mongo</b> - MongoDB session store used for user authentication (<https://www.npmjs.com/package/connect-mongo>)</li>
  <li><b>express-session</b> - Express and Mongoose session storage for user authentication (<https://www.npmjs.com/package/express-sessions>)</li>
  <li><b>material-ui</b> - a React component library that implements Google's material design (https://material-ui-next.com)</li>
  <li><b>moment</b> - package used for formatting dates (https://www.npmjs.com/package/moment)</li>
  <li><b>passport</b> - package used for authenticating requests (https://www.npmjs.com/package/passport)</li>
  <li><b>passport-local</b> - package that allows you to authenticate using a username and password in a Node.js application (https://www.npmjs.com/package/passport-local)</li>
  <li><b>react</b> - package for accessing React (https://www.npmjs.com/package/react)</li>
  <li><b>react-dom</b> - serves as the entry point of the DOM-related rendering paths (https://www.npmjs.com/package/react-dom).</li>
  <li><b>react-router</b> - package that provides the core routing functionality (https://www.npmjs.com/package/react-router).</li>
  <li><b>react-router-dom</b> - a third party routing library (<https://www.npmjs.com/package/react-router-dom>)</li>
  <li><b>react-scripts</b>: package that includes scripts and configuration used by Create React App (https://www.npmjs.com/package/react-scripts)</li>
  <li><b>rebass</b> - library of UI components for React (https://www.npmjs.com/package/rebass)</li>
</ul>

<pre>npm install</pre>

###  <a name="install-mongo"></a> 5. Install MongoDB

<p>For installation instructions, see <a href="https://github.com/philipstubbs13/coding-tips-tricks-resources/blob/master/MongoDB/Installing-MongoDB.md">Installing MongoDB</a>.</p>

###  <a name="mongod"></a> 6. Start the daemon for MongoDB

<p>Open another terminal window and run the following command to start the daemon process for MongoDB, which handles data requests, manages data access, and performs background management operations.</p>
<pre>mongod</pre>

<p><b>Note:</b> You want to keep the mongod process running in the background during development.</p>

###  <a name="mongoshell"></a> 7. Start the MongoDB shell
<p>In a separate terminal window, run the following command to start up the MongoDB shell.</p>
<pre>mongo</pre>

###  <a name="install-robo"></a> 8. Install Robo 3T

<p>If you don't already have Robo 3T installed on your computer, you can install the latest version <a href="https://robomongo.org/download">here</a>.</p>

<p>For this project, Robo 3T is similar to MySQL Workbench (if you are used to working with MySQL databases). Robo 3T is not required. But, similar to MySQL Workbench, it is a graphical user interface that is used to visually see the database and database collections (as opposed to using the command line interface for MongoDB).</p>

###  <a name="start-server"></a> 9. Start the Express server and React development server.
<p>After performing all of the setup steps in the <b>Getting started</b> section, navigate to the project root directory (<b>MedLog</b>) and run the following command to start the Express server and React development server.</p>
<pre>npm start</pre>

<p>After the development server has started, a Chrome browser window should open, and you should see the login screen for the application. If the browser does not automatically open after the server starts, you can verify that the application is working locally on your computer by opening Chrome and going to <a href="http://localhost:3000">http://localhost:3000</a>.

## <a name="deployment"></a> Deploying the app

This app is deployed to Heroku. To deploy the app, you will need to build a production version of the app as well as have Heroku CLI installed.

## <a name="technologies-used"></a> Technologies used to create app

* [Back end technolgies](#Backend)
* [Front end technologies](#Frontend)

### <a name ="Backend"></a> Back end technologies

* Node.js (<https://nodejs.org/en/>)
* MongoDB (<https://www.mongodb.com/>)
* Express (<http://expressjs.com/>)
* Mongoose ORM (<http://mongoosejs.com/>)

### <a name="Frontend"></a> Front end technologies

* HTML
* CSS
* Javascript
* React (<https://reactjs.org/>)
* Material UI Next (<https://material-ui-next.com/>)

## Codebase
https://github.com/ThatSkiPatroller/AutoMaintenance


## Application Walk-through
<a href="https://obscure-cove-65281.herokuapp.com//" target="_blank"> Click here for Application Live url </a>


## Contributors
Arti Karnik <br>
https://github.com/arti-karnik <br>
Trace Suitor  <br>
https://github.com/ThatSkiPatroller/<br>
D.L. White 
https://github.com/dlwhite112

