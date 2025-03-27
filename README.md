# SpaceX Launch Analytics Dashboard

This project is a React-based web application that provides interactive visualizations and detailed metrics for SpaceX's launch history. It allows users to explore trends in launch success rates, payload capacities, and other mission statistics.

## Features

- **Landing Page**: Overview of the application with navigation options.
- **Visualization Page**: Interactive charts displaying SpaceX launch data, including:
  - Launches per year
  - Rocket statistics (total launches and payload weight)
- **Metrics Page**: Key performance metrics such as:
  - Total launches
  - Launch frequencies per year
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
3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the app in your browser at [http://localhost:5173](http://localhost:5173)

## API Endpoints

- **Visualization Data**: [https://spacex-rxo2.onrender.com/api/launches/stats](https://spacex-rxo2.onrender.com/api/launches/stats)

Ensure the backend APIs are running and accessible for the app to function correctly.


## Caching

The application uses React Query for efficient data fetching and caching. The following caching strategies are implemented:

- **Stale Time**: Set to `Infinity`, meaning data is considered fresh indefinitely and won't be refetched unless explicitly invalidated.
- **Cache Time**: Set to `Infinity`, ensuring cached data persists as long as the application is running.

These settings minimize API calls and improve performance by reusing previously fetched data.

## Potential Improvements

### Error Handling
- Enhance error messages with more detailed information
- Add retry options for failed requests

### Visualization
- **Dynamic Customization**: Allow users to:
  - Select graph axes
  - Choose visualization types
  - Save custom views
- **Visual Enhancements**:
  - Add animations
  - Implement helpful tooltips

### UI/UX
- Improve responsiveness across devices
- Add dark mode toggle
- Implement consistent design system
- Enhance accessibility features


## Scripts

### Development
- `npm run dev`  
  Start the development server with hot-reloading.

### Build
- `npm run build`  
  Create an optimized production build of the application.

### Preview
- `npm run preview`  
  Locally preview the production build (must run `build` first).

### Code Quality
- `npm run lint`  
  Run ESLint to analyze and report code quality issues.


### Hosting
- **AWS EC2 Instance** (Ubuntu Server)  
  - Currently accessible at: [http://3.80.149.28/](http://3.80.149.28/)

  ## License

This project is licensed under the **[MIT License](LICENSE)**.  
See the [LICENSE](LICENSE) file for full details.

## Acknowledgments

Special thanks to:
- **[SpaceX API](https://github.com/r-spacex/SpaceX-API)** for inspiration and data
- **[Recharts](https://recharts.org/)** for powerful data visualization components
- **[React Query](https://tanstack.com/query/latest/)** for efficient data fetching and caching
- All contributors and open-source maintainers who made this project possible


