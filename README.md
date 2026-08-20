# Urban Flood Risk & Emergency Analytics

A responsive React business-intelligence dashboard for analysing urban flood risk, emergency response performance, infrastructure impact, and population exposure. All data in the shipped build is clearly labelled **Synthetic Demo Data**.

## Features

- Role-selectable demo login (Administrator / Analyst)
- Executive KPIs, working global filters, charts, risk surface, alerts, and decision-support recommendations
- Emergency, infrastructure, population, data-explorer, reports, and dataset-upload workspaces
- CSV validation and browser-side CSV export
- Transparent 0–100 risk methodology: rainfall 25%, water level 25%, flood frequency 20%, population exposure 15%, infrastructure vulnerability 15%

## Run

```bash
npm install
npm run dev
```

Open the local address printed by Vite. For production verification run `npm run build`.

## Architecture

`src/main.jsx` contains the presentational dashboard, mock data access, interactive filtering, KPI calculation and upload validation. It is deliberately independent of a backend so the UI launches immediately. Replace `seedEvents` with `GET /api/dashboard`, `GET /api/flood-events`, and related calls when connecting a FastAPI + PostgreSQL service.

## Suggested database schema

- `locations(location_id PK, location_name, city, latitude, longitude, population, area_type)`
- `flood_events(event_id PK, location_id FK, date, rainfall_mm, water_level_m, flood_duration, severity, population_affected, risk_score)`
- `emergency_response(response_id PK, event_id FK, response_time, rescue_operations, resources_used, shelter_capacity, shelter_occupancy)`
- `infrastructure(infrastructure_id PK, location_id FK, roads_affected, bridges_affected, hospitals_affected, schools_affected, power_outages)`

## API contract for backend integration

`GET /api/dashboard`, `GET /api/flood-events`, `GET /api/flood-events/:id`, `GET /api/locations`, `GET /api/risk-analysis`, `GET /api/emergency-response`, `GET /api/infrastructure`, `GET /api/population-impact`, `POST /api/upload`, `GET /api/reports`.

## Future enhancements

Add FastAPI/Pandas ingestion and PostgreSQL persistence, Leaflet/OpenStreetMap tiles, role-token authentication, PDF generation, and a clearly-labelled probabilistic ML risk model.
