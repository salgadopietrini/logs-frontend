# mosano-frontend is a web app created using React, Apollo Client(GraphQL) and Redux, with TypeScript

Application developed using **React** with **TypeScript**, **GraphQl** with **Apollo Client**, **Redux ToolKit**, **MaterialUI** and **React Testing Library (Jest)**.

#### Features:

- Implements a token authentication method, saving the token on the localStorage.
- Once in the app, you can insert information about an user and save it (the list of countries come from the server), sending it to the server, and triggering a message that let you know how old you will be in your next birthday.
- You can also delete the users you've previously saved, deleting them from the server.
- Use the header to change the entire lenguage of the app
- Use the header to log out (this sends you to the login screen and deletes the token from the localStorage).
- It implements a loading bar when you send your login information to the server, and a loading spinner once you're in the app and the list of users and countries is being fetched from the server.
- It's fully responsive.

#### Notes:

- A single unit test (for the List component) was implemented to showcase knowledge in the matter.
- The implementation of Redux is probably unnecesary, as the same job could be done using ContextAPI and this is a simple app, but it was also done to showcase knowledge in the matter.

![loggin](/assets/logginvis.png)
![logginloading](/assets/logginloadingvis.png)
![app](/assets/appvis.png)

## How to use

1. You must run the backend NodeJS project in your pc. The repository with the code and instructions can be found in: [Mosano-Backend](https://github.com/salgadopietrini/mosano-backend)

2. Clone the repository.

```
git clone https://github.com/salgadopietrini/mosano-frontend.git
```

3. Run `npm install` to install the node modules

```
npm install
```

4. Run `npm start`. The command will start a local live server. Open (http://localhost:3000/) in your browser, if the tab doesn't open automatically.

```
npm start
```

5. To enter the app, you must log in using the username and password that you configured on the backend server.

6. To run the test run `npm run test`. You'll get the coverage report both in the console and as an html file in `/coverage/lcov-report/index.html`

```
npm run test
```
