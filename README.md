# Assignment: Hospital patient diagnosis system

## Minimum requirements (FULL crud for single entity):
- It should be possible to get an overview of all patients when navigating to /patients
- It should be possible to get all data for a singular patient when navigating to /patients/:id where ID is the patient ID
- It should be possible to enroll a new patient (create)
- It should be possible to delete a patient
- It should be possible to update a patient

## Bonus requirements
- It should be possible to create a new disease which patients may be diagnosed with
- It should be possible to add a new diagnosis to a patient
- It should be possible to add new diseases


## Hard bonus requirements
- In the patients feed overview (all patients), a number next to the patient name should indicate the number of diagnosis for the patient (hint: It's possible to "join" tables when querying postgREST)
- The overview of patients should be paginated such that the page only shows the first X patients
- It should be possible to search for patients and diseases


## Relevant documentation for using the backend:
The backend is built with postgREST which is a REST tool on top of a PostgreSQL database. 
The reference API for querying the "tables" can be found here: https://docs.postgrest.org/en/v12/references/api/tables_views.html

# Starting point:

You can clone the recommended startup boilerplate including the backend program neede like this:

```bash
git clone https://github.com/uldahlalex/react-assignment
```

## How to start the backend
Have docker daemon running. From the "postgrest" directory in this project, run:
```bash
docker compose up
```

### How to reset data in backend

If you have made some changes in the database data, and you want to "go back" to the starting point, you can use:

(from the "postgrest" directory):
```bash
docker-compose down
docker volume rm postgrest_dbdata
docker-compose up
```