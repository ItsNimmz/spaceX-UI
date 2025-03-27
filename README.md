# SpaceX Launch Analytics Dashboard

This project is a React-based web application that provides interactive visualizations and detailed metrics for SpaceX's launch history. It allows users to explore trends in launch success rates, payload capacities, and other mission statistics.

## Features

- **Landing Page**: Overview of the application with navigation options.
- **Visualization Page**: Interactive charts displaying SpaceX launch data, including:
  - Launches per year
  - Rocket statistics (total launches and payload weight)
- **Metrics Page**: Key performance metrics such as:
  - Total launches
  - Success rate
  - Reused rockets percentage
  - Payload type distribution
  - Launch frequencies per year
  - Success rate by nationality
- **Responsive Design**: Optimized for desktop and mobile devices.
- **Caching**: Data fetched from the API is cached using React Query with `staleTime` and `cacheTime` set to `Infinity`, ensuring efficient data reuse and reducing unnecessary API calls.

## Tech Stack

- **Frontend**: React, Recharts for data visualization
- **State Management**: React Query for data fetching and caching
- **Styling**: CSS for responsive and modern UI
- **Backend**: Flask API (assumed to be running locally or hosted)

## Project Structure


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ItsNimmz/spaceX-UI.git
   cd spaceX-UI
   ```

2. Install dependencies:
   ```bash
   npm install
   ```