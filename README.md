# mosano-frontend is a web app created using React, Apollo Client(GraphQL) and Redux, with TypeScript

Implements a token authentication method. Once in the app, you can insert information about an user and save it (the list of countries come from the server), sending it to the server, and triggering a message that let you know how old you will be in your next birthday. You can also delete the users you've previously saved, deleting them from the server. You can also use the header to change the lenguage of the app and to log out (this sends you to the login screen and deletes the token from the localStorage). It implements a loading bar when you send your login information to the server, and a loading spinner once you're in the app and and the list of users and countries is being fetched from the server.

![alt text](https://postimg.cc/WddmDpqK)

## How to use

1. Clone this repository.

```
git clone https://github.com/salgadopietrini/shopping-app.git
```

2. Run `npm install`.
3. Run `npm start`. The command will start a local live server. Open (http://localhost:3000/) in your browser, if the tab doesn't open automatically.
   Cosas a mejorar:

-Utilizar update de la cache en graphql para las mutaciones
-No utilizar redux en el form, ya que cada keystroke dispara una actualización del estado. Esto es innecesario, se pueden usar uncontrolled inputs, pero se ha usado redux a fin de demostrar el manejo de la herramienta.
-Utilizar un uncontrolled inputs también permitiría usar una librería de validación de los mismos, fomo formik.
