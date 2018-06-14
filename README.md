# yuag_public_art

## Deployment

Ensure client is built

    npm install


Deploy with


    PASS=databasepassword npm start

where databasepassword is the db password

For image storage hosted by Google Cloud Platform:
Ensure --key--.json file is in root directory. 

## Hosting

Available on Heroku with full functionality at

    https://yuag-public-art.herokuapp.com/



## Description
  A semi-open, crowdsourced archive of public art on Yale's campus.  
  Users with access can seek out and submit new entries into the database with relevant information and a photograph.



## Tools
Frontend:   React.js, React-Bootstrap  
Backend:    Node.js/Express
Database:   PostgreSQL  
