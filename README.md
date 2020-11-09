# CSESoc MERN Full-Stack Web Development Workshop

Creating a Project Contritbution Tracker

Modified from the original tutorial:

https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1

***If you're coding along to the workshop and can't keep up***

Check if NodeJS works on your system that displays the version you're using via the following command

```
node -v
```

Check if the Node Package Manager (npm) works on your system that displays the version you're using via the following command

```
npm -v
```

Check if the npm package binaries (npx) works on your system that displays the version you're using via the following command

```
npx -v
```

IF npx doesn't work please install npx via the following command

```
npm i -g npx
```

If you are using **Linux** or **Mac** OS and you get permission related errors use "sudo" before all npm commands

```
sudo npm (or npx) *(any subsequent command)
```

Install the React folder into your directory

```
npx create-react-app *(your-application-name)
```

Enter your newly React folder in your directory

```
cd *(your-application-name)
```

Install the dependencies

```
npm install axios bootstrap react-datepicker react-router-dom
```

Whilst waiting for the dependencies to install, open a new terminal create your backend folder inside your React folder

```
mkdir backend
```

Enter your backend folder

```
cd backend
```

Create your package.json file in your backend folder

```
npm init -y
```

Install the dependencies

```
npm install express cors mongoose dotenv
```

Setup the MongoDB Database under the **MongoDB Atlas** section from this link and save the Connection String as it's your MongoDB API Key:

https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1

Install nodemon

```
npm install -g nodemon
```

The files will be created and coded in the following order (refer to the completed code in this repo to follow along):

Backend:

1. /backend/server.js

2. /backend/.env (**Paste the Connection String from the MongoDB Atlas website as it's the MongoDB API Key**)

3. /backend/models/userModel.js

4. /backend/models/contributionModel.js

5. /backend/routes/users.js

6. /backend/routes/contributions.js

Run the server from the backend directory

```
nodemon server
```

Frontend:

7. /src/App.js (You can also edit the title of your web page via /public/index.html)

8. /src/components/Navbar.js

9. /src/components/CreateUser.js

10. /src/components/CreateContribution.js

11. /src/components/ContributionList.js

12. /src/components/EditContribution.js

Run this command from the root directory

```
npm start
```

Open on http://localhost:3000/

***If you want to run the completed program***

Installation:

Enter the backend file

```
cd backend
```

Ensure the .env file in the backend directory has your own MongoDB API key after creating your MongoDB Database as specified in the workshop or in the tutorial link under the **MongoDB Atlas** section:

https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1

Install node packages

```
npm install
```

Run the server

```
nodemon server
```

Open another terminal and install

```
npm install
```

Then run

```
npm start
```

Open on http://localhost:3000/
