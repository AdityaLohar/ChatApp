Backend (Node.js, Express, MongoDB):
1. Server Setup (index.js): 
- You've set up an Express server to handle HTTP requests.
- CORS middleware is used to handle Cross-Origin Resource Sharing.
- Mongoose is used for connecting to MongoDB.
- Routes for handling user-related operations (/api/auth) and message-related operations (/api/messages) are defined.

- app.use("/api/auth", userRoutes);:
This line specifies that all routes defined in userRoutes should be prefixed with /api/auth. For example, if you have a route in userRoutes defined as /register, it will be accessible at /api/auth/register.
app.use("/api/messages", messageRoutes); 


2. User Routes (userRoutes.js):
- Registration (/register): When a user registers, you check if the username and email are unique. If not, an error message is sent.
- Login (/login): You authenticate users based on their username and password, returning an error if the credentials are incorrect.
- Avatar (/avatar/:id): This route allows users to set their avatars.


- APIRoute is the endpoint for all the post requests. It then assigns the requests to the middleware which is userController
