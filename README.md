# Humanchain API

A RESTful API for managing incidents built with Node.js, Express, and MongoDB.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or accessible URL)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd humanchain-api
```

2. Install dependencies:
```bash
npm install
```

3. Make sure MongoDB is running locally on port 27017 or update the connection URL in `app.js`

## Running the Application

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will start on port 3000 by default. You can change this by setting the PORT environment variable.

## API Endpoints

- `GET /` - Welcome message
- `GET /incidents` - Get all incidents
- `POST /incidents` - Create a new incident
- `GET /incidents/:id` - Get a specific incident
- `DELETE /incidents/:id` - Delete a specific incident

### Request Body Format for Creating Incidents

```json
{
  "title": "Incident Title",
  "description": "Detailed description of the incident",
  "severity": "HIGH|MEDIUM|LOW"
}
```

## Error Handling

The API includes proper error handling for:
- Invalid request data
- Invalid MongoDB IDs
- Server errors
- Not found resources 