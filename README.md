# LearnUponTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.11.
Run with `npm start`

## Task

Create a small web-application using the latest angular version, which will be interacting with Learnupon external api. Application needs to run with proxy config 
(see below) and credentials to access api will be given.

Two pages are required. Home and Users. Below is attached app design and how it should look. Home page can have some random content you find interesting.
- No need to be pixel perfect.
- It needs to be responsive.
- Filters in table header are buttons.
- Icons in user’s card are also clickable.
- Pay attention to A11Y.
- Try to match the following image as close as possible.
- No need to implement functionalities like pagination, filters, and sorting.
- Use SCSS preprocessor for stylings.
- Imagine it would scale.

![alt text](https://i.ibb.co/QJS9JmQ/Capture.png)

*Note*: Informations that are missing regarding the design, feel free to mock it.

Users page should provide the ability to list users and create a new user.

- list of users should come from Learnupon api. You can build your own list
component or use any third party which you find suitable. Note: there will be
few users preconfigured.
Endpoint: GET https://angularlu.luptest.com/api/v1/users

- add new user should be implemented either with a link or a button, which
should open user form (optionally in a modal/dialog). You can build your own
component or use third-party.
Endpoint: POST https://angularlu.luptest.com/api/v1/users

*Note*: Create won’t work but feel free to mock response data.

Sample request:
```
{
  'User':{
    'last_name':'Upon',
    'first_name':'Learn',
    'email':'some.email@examplelms.com',
    'username':'testusername',
    'password':'password1',
    'language':'en'
  }
}
```

Run with proxy https://angular.io/guide/build for reference (you can update route
‘/**’ to anything you wish)
```
ng serve --proxy-config proxy.conf.json
```
proxy.conf.json
```
{
  "/**": {
    "target": {
      "host": "app.luptest.com",
      "protocol": "https:",
      "port": 443
    },
    "secure": false,
    "changeOrigin": true,
    "logLevel": "info"
  }
}
```

Sample curl command:
curl -X GET -H "Content-Type: application/json" --user <username>:<password>
https://yourdomain.luptest.com/api/v1/users
API Credentials:
Username: 40c9b7d5cb0ecb9abaab
Password: 76c5d1b201c6d52ceae63188fe6d06
Bonus:
- Write some unit tests
- NGRX
- NGX-Formly
- Clean HTML/SCSS (BEM, SCSS without Angular Material or similar)
- Open create user form inside modal
