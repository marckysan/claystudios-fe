# claystudios-fe
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## About the Repository
This repository is for the Frontend application for the Clay Studios website.

Clay Studios is an interior design company in Singapore who assists client in home renovation and designing works. The current site is developed with Wordpress and situated at [Clay Studios](https://claystudios.com.sg/). 

This repository is to migrate the website to a full stack application powered by a React Frontend and NodeJS Backend.

## Set up
1. Create a folder inside your local machine and name it "claystudios"
2. Navigate into the folder with the following command.
  ```
    cd claystudios
  ```
3. Clone both the Frontend and Backend repositories into the folder 
  ```
    git clone https://github.com/marckysan/claystudios-fe.git
    git clone https://github.com/marckysan/claystudios-be.git
  ``` 
4. Navigate into each folder and ensure that the necessary packages are installed with the following commands
  ``` 
    cd claystudios-fe 
      npm ci
    cd ..
    cd claystudios-be
      npm ci
    cd ..
  ```
5. Proceed to spin up the application.
## Spinning Up the Application
This web application has been dockerized, built and served with NGINX locally. 

1. To spin up both the Frontend and the Backend, simply run the following commands while you're in the main "claystudios" folder directory. 
```
  docker compose build 
  docker compose up
```
2. Check and ensure that you are able to load up the applications on localhost correctly.
  a. Frontend Check - Navigate to "localhost:8888", you should see the application loading up
  b. Backend Check - Navigate to "localhost:6868/health", you should see a JSON message "Backend health check!"
3. You are ready to start developing!
