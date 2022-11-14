# POC_TS
My TypeScript proof of concept. </br>
A simple API wich manage a "todo" task list

## Description
The API consists in a complete "CRUD" to handle tasks lists. </br>
The user can:
- Create a new task;
- List all tasks or filter specific tasks;
- Edit tasks;
- Delete tasks;

To create the API, the following tools were used:
- TypeScript
- Postgres
- Express
- JOI

## Usage
Use the following routes to use the API:

**GET /tasks**</br>
List all tasks, ordered by created time.</br>
User can filter for specific member tasks by add a query "name" (/tasks/?name=)</br>
Returns:
```
{
  "id": number
  "name": string
  "description": string
  "member": string
  "created": date
  "deadline": date
}
```

**POST /tasks**</br>
Add a new task.</br>
Body format (validated by JOI):
```
{
  "name": string
  "description": string
  "member": string
  "deadline": date (optional)
}
```


**PUT /task/:id**</br>
Edit the selected task

**DELETE /task/:id**</br>
Delete the selected task

**GET /task/:id**</br>
Get the selected tasks by id



