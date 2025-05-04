Humanchain AI Safety Incident Log API

This is a simple RESTful API to log and manage hypothetical AI safety incidents. The API was built using Node.js with Express and MongoDB to demonstrate backend development skills, API design, request handling, and data persistence.

Project Structure
- /models: Contains the Mongoose model for the incident schema.
- /app.js: Server setup and API initialization.
- /package.json: Project dependencies and scripts.

Prerequisites
- Node.js (v14.x or higher)
- MongoDB (or MongoDB Atlas for cloud hosting)

Steps to Run the Project Locally

1. Clone the repository to your local machine:
   git clone https://github.com/Srinubabu123/AI-Safety.git
   cd AI-Safety

2. Install dependencies:
   npm install

3. Make sure MongoDB is running locally on port 27017 or update the connection URL in database.js.

Running the Application

Development mode:
node app.js

The server will start on port 3001 by default. You can change this by setting the PORT environment variable.

API Endpoints

1.GET /incidents
   - Description: Retrieves all incidents.
   - Response: A list of all incidents.
   - Example:
     [
       {
         "_id": "680e1d16924551ee6d8ada4d",
         "title": "AI Model Crash",
         "description": "The AI model crashed after unexpected input.",
         "severity": "High",
         "reported_at": "2025-04-02T18:00:00Z",
         "Id": 1
       }
     ]

2. POST /incidents
   - Description: Logs a new incident.
   - Request Body:
     {
       "title": "New Incident",
       "description": "Detailed description",
       "severity": "Medium"
     }
   - Response:
     {
       "_id": "new_generated_id",
       "title": "New Incident",
       "description": "Detailed description",
       "severity": "Medium",
       "reported_at": "current_date",
       "Id": new_incident_id
     }

3. GET /incidents/:id
   - Description: Fetches an incident by ID.
   - Example URL: /incidents/680e1d16924551ee6d8ada4d
   - Response:
     {
       "_id": "680e1d16924551ee6d8ada4d",
       "title": "AI Model Crash",
       "description": "The AI model crashed after unexpected input.",
       "severity": "High",
       "reported_at": "2025-04-02T18:00:00Z",
       "Id": 1
     }

4. DELETE /incidents/:id
   - Description: Deletes an incident by ID.
   - Example URL: /incidents/680e1d16924551ee6d8ada4d
   - Response:
     {
       "message": "Incident deleted successfully"
     }

Resources

- Node.js Documentation: https://nodejs.org/en/docs/
- MongoDB Documentation: https://docs.mongodb.com/
- Express.js Documentation: https://expressjs.com/
