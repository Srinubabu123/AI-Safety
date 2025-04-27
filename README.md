# HumanChain AI Safety Incident Log API

This is a simple RESTful API to log and manage hypothetical AI safety incidents. The API was built using Node.js with Express and MongoDB to demonstrate backend development skills, API design, request handling, and data persistence.

## Project Structure
- **/models**: Contains the Mongoose model for the incident schema.
- **/routes**: Contains the API routes to handle incidents.
- **/database.js**: Handles the MongoDB database connection.
- **/server.js**: Server setup and API initialization.
- **/package.json**: Project dependencies and scripts.
### `npm start`
Runs the server in the development mode.
Open [http://localhost:5000](http://localhost:5000) to view the API in your browser or make requests using Postman or similar tools.

The server will restart when you make changes to the code.

### `npm test`
Launches the test runner in interactive watch mode.
You can use this to ensure your API endpoints and logic are functioning correctly. Add tests in the `test` folder.

### `npm run build`
Builds the app for production.
This command is useful if you plan to deploy your backend code for production, optimizing it for better performance.

### `npm run eject`
Note: This is a one-way operation. Once you eject, you can't go back!

### Prerequisites
- Node.js (v14.x or higher)
- MongoDB (or MongoDB Atlas for cloud hosting)

### Steps to Run the Project Locally

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/Srinubabu123/AI-Safety.git
## API Endpoints

### 1. **GET /incidents**
   - **Description**: Retrieves all incidents.
   - **Response**: A list of all incidents.
   - **Example**:
     ```json
     [
       {
         "id": 1,
         "title": "Incident Title",
         "description": "Description of the incident",
         "severity": "High",
         "reported_at": "2025-04-02T18:00:00Z"
       }
     ]
     ```

### 2. **POST /incidents**
   - **Description**: Logs a new incident.
   - **Request Body**:
     ```json
     {
       "title": "New Incident",
       "description": "Detailed description",
       "severity": "Medium"
     }
     ```
   - **Response**:
     ```json
     {
       "id": 3,
       "title": "New Incident",
       "description": "Detailed description",
       "severity": "Medium",
       "reported_at": "2025-04-02T18:00:00Z"
     }
     ```

### 3. **GET /incidents/:id**
   - **Description**: Fetches an incident by ID.
   - **Example URL**: `/incidents/1`
   - **Response**:
     ```json
     {
       "id": 1,
       "title": "Incident Title",
       "description": "Description of the incident",
       "severity": "High",
       "reported_at": "2025-04-02T18:00:00Z"
     }
     ```

### 4. **DELETE /incidents/:id**
   - **Description**: Deletes an incident by ID.
   - **Example URL**: `/incidents/1`
   - **Response**:
     ```json
     {
       "message": "Incident deleted successfully"
     }
     ```
## Resources

- [Node.js Documentation](https://nodejs.org/en/docs/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
