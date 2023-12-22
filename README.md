# About the App

## Microservices:

-   Service 1 (user): User-facing service.
-   Service 2 (order): Supporting service for Service 1.
-   Service 3 (async-service): Background processing service.

## Interaction:

-   Service 1 communicate with Service 2.
-   Service 2 communicate with Service 3.
-   Common database for data storage and retrieval.

<br />

## Service Description:

### User-Facing Service - user (Service 1)

-   Description:
    -   This service is responsible for handling user requests, serving the frontend, and managing user-related functionalities. It interacts with Service 2 to retrieve additional information.
-   Example Interaction:
    -   When a user requests their order history, Service 1 sends a request to Service 2 to fetch the order information associated with the user.

### Supporting Service - order (Service 2)

-   Description:
    -   This service provides supporting functionalities for the User-Facing Service (Service 1). It handles tasks such as order processing.
-   Example Interaction:
    -   Service 2 receives a request from Service 1 to fetch order details. It communicates with Service 3 for additional processing related to the order.

### Background Processing Service - async-service (Service 3)

-   Description:
    -   This service handles background tasks/asynchronous processing, or any computationally intensive operations that should not impact the immediate user experience.
-   Example Interaction:
    -   Service 3 receives requests from Service 2 for background tasks like updating order status. It performs these tasks independently to avoid impacting the responsiveness of Service 1.

### Common Database

-   Description:
    -   All microservices share a common database for data storage and retrieval. This can be a relational or NoSQL database based on your preference.
-   Example Data Model:
    -   User table storing user details.
    -   Order table storing order information.
    -   Products table to store product details.

<br/>

## Run this app locally

-   Make sure you have `nodejs v20.10.0 LTS` and `pnpm v8.12.1` package manager is installed

-   Download or clone this repo into your computer.
-   In the microservice-task directory,\
    Run `cd user` to go into user directory and Run `pnpm i` to install necessary dependencies.
-   Do the same for `order` and `async-service`

-   Run all the three services concurrently by `pnpm dev` command. It will transpile (translate) the TypeScript code into JavaScript code on-the-fly (Just-In-Time or JIT).\
    OR\
    `pnpm start` command will compile TypeScript code into JavaScript code, making it executable in Node.js and runs the JavaScript code.

-   Runs the app in the development mode. Open below links to view logs.
    -   [http://localhost:5001](http://localhost:5001)
    -   [http://localhost:5002](http://localhost:5002)
    -   [http://localhost:5003](http://localhost:5003)
