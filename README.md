[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/IUdL_SNw)

# Assignee Information

Name: Cristian Nasirabadi

Email: cristian.tirdad@gmail.com

Phone: 0762931896

# Pollen Visualisation App

For the position of a frontend system developer at NBIS with reference UFV-PA 2023/2052

## Description

Welcome, applicant!

In this code test, you will be working on a Pollen app that displays pollen data for various cities.
The app requires enhancements and improvements to make it more user-friendly and visually appealing.
An example of displaying pollen data is [Danish astma and allergy. ](https://www.astma-allergi.dk/pollenservices/pollengrafer/)

During the initial stages of a project, some colleagues conducted a proof of concept and worked with the
Pollen API to explore its capabilities. The app fetches pollen data from an API that is implemented in the backend folder.
The API implementation should not be changed during this code test. Users can currently view the data in a table. There are dropdowns
for a specific cities, type of pollen, and year.

As the project was ready to be worked on by the Scrum team, the team formulated user stories.
Following the Sprint Planning session, the team prioritized the issues and added them to the Sprint Backlog.
The next issue at the top of the backlog is as follows:

"As a user, I want to be able to select the city, pollen type, and year of interest so that
I can explore and retrieve the corresponding pollen data for that specific location."

Your task is to implement the following enhancements:

### Tasks

Each tasks should be done in the form of pull requests towards the repository. Use one PR for each numbered task you submit.
You can assume that the PRs will be merged as is, so PRs may be based on the final commit of the previous PR.
The pull requests should include extra files where appropriate and README updates if functionality is added.
Also, please tag each PR with "completed" to indicate its completion.

0. Update this readme by adding your full name to the first section so that
   you are easy to identify.

1. **City Selection**: The app currently supports only certain cities. Modify it to generate city dropdown options based on the available cities in the dataset.

2. **Pollen Type and Year Selection**: Expand the app to allow users to select pollen type (e.g., Alnus, Betula, Poaceae) and year.

3. **Data Visualization Enhancement**: Elevate the visual representation of pollen data using your choice of charting libraries or other data visualization techniques. Your goal is to present data in a manner that's not only visually appealing but also informative, making it easier for users to understand and interpret the pollen data. Also, consider the overall UI/UX of the app while integrating these visualizations.

4. **HTML Semantics Improvement**: Review the existing HTML structure of the app and make necessary modifications
   to ensure better semantic markup.

5. **Framework Rebuild**: The app is currently built using JavaScript and HTML. Choose a suitable frontend framework (e.g., React, Vue, Angular) and rebuild the app, making sure it retains its original functionality and incorporates the enhancements from the previous tasks.

Make sure that the development environment and build script work for each pull request.

If you have any questions or need clarifications, please don't hesitate to ask us in the feedback PR. Please tag @jhagberg

Good luck with the code test!

## Docker Compose

This project utilizes Docker Compose to simplify the development environment setup and deployment process.
Docker Compose allows you to define and run multi-container Docker applications.
Both backend and frontend will start when you run docker-compose.

### Prerequisites

Before using Docker Compose, make sure you have the following software installed on your machine:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

### Usage

Build docker:

```
docker compose build
```

Run:

```
docker compose up
```

Open http://localhost:8080 to view it in the browser. The API is on http://localhost:3002/

Stop:
Use Ctrl+C to stop the container

## Swagger API

At [api-docs](http://localhost:3002/api-docs)
