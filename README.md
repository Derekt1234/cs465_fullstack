# cs465_fullstack
CS-465 Full Stack Development 1 w/ MEAN

README File
CS-465 Full Stack Development I
Derek Templeman

Architecture

In this project, I used three different types of frontend development. Express, JavaScript, and Angular single-page application (SPA). The Express HTML pages were used to build static pages and basic routing. They were simple and rendered directly on the server. JavaScript helped add interactivity and connected the Express controllers to the views. 
The Angular SPA was much more advanced and handled almost everything on the client side. It provided dynamic routing, data binding, and a smoother user experience without page reloads. Compared to Express HTML, Angular felt more modern and was better suited for the admin side of the application, where users need to edit and update trip information quickly.
The backend used a NoSQL MongoDB database because the data for Travlr Getaways fits naturally into JSON documents. Trip details and bookings don’t always follow a strict structure, so MongoDB makes it easier to store and update this type of data. MongoDB also works well with JavaScript and JSON, which kept the entire project consistent. 

Functionality

JSON is different from JavaScript because it is only a data format, while JavaScript is a full programming language. JSON can’t run logic or functions because it is just structured text. JSON acted as the connection between the frontend and backend. The Angular SPA requested data from the Express API, and the API responded with JSON. This allowed the frontend to display trip information, update forms, and send changes back to the server. 
Throughout the project, I refactored code several times to improve functionality. One example was cleaning up repeated UI code in Angular by turning it into reusable components. Reusable UI components made the SPA easier to maintain and reduced duplicated code, which also helped prevent bugs. 

Testing 

Working with API endpoints required testing different HTTP methods like GET, POST, PUT, and DELETE. Each endpoint has to be checked to make sure it returned the correct JSON and status codes. Once security was added, testing became more complicated because admin routes required authentication. I had to test both successful and failed login attempts and make sure protected endpoints couldn’t be accessed without a valid token. This helped me understand how methods, endpoints, and security all work together in a full stack application. The backend has to validate requests, the frontend has to send the right headers, and the database has to return the correct data. Testing these interactions gave me a better understanding of how full stack needs to communicate. 

Reflection

This course helped me move closer to my professional goals by giving me real experience building a full stack application. I learned how the frontend, backend, and database all connect, and I gained confidence working with the MEAN stack. I also improved my skills in API development, routing, authentication, and building a single-page application. These are skills that employers look for in modern web development roles. Overall, this project helped me become more comfortable with full stack development and gave me more confidence to be a stronger candidate for software engineering positions. 

