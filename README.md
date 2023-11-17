# REST-API
1. Understanding CRUD

•	CRUD stands for Create, Read, Update, and Delete, which are the four basic operations for managing data in a persistent storage system. These operations are fundamental to data manipulation and are essential for building applications that interact with databases.

I.	Create: The Create operation involves adding new data to the database. It allows users to insert new records, entries, or documents into the system.

II.	Read: The Read operation retrieves existing data from the database. It enables users to access, fetch, or query stored information for various purposes, such as displaying data on a user interface or performing calculations.

III.	Update: The Update operation modifies existing data in the database. It allows users to change or alter the values of stored records, ensuring that the information remains accurate and up to date.

IV.	Delete: The Delete operation removes data from the database. It enables users to erase or eliminate records that are no longer needed or relevant.

2. Creating REST Endpoints for CRUD Operations

•	REST endpoints are URLs that define specific actions or resources within an application. They allow clients to interact with the application's data using HTTP methods. 
•	Here's an example of how to create REST endpoints for each CRUD operation:

I.	Create:
•	POST /users
o	This endpoint accepts a JSON object containing the user's data and creates a new user record in the database.

II.	Read:
•	GET /users/:id
o	This endpoint retrieves the user record with the specified ID from the database.

III.	Update:
•	PUT /users/:id
o	This endpoint accepts a JSON object containing the updated user's data and modifies the corresponding record in the database.

IV.	Delete:
•	DELETE /users/:id
o	This endpoint removes the user record with the specified ID from the database.

3. Difference between PUT and PATCH
•	PUT and PATCH are both HTTP methods used to update data in a REST API. However, they differ in their approach and the granularity of the updates they allow.
PUT:
•	Replaces the entire resource with the provided data.
•	Requires the entire resource to be specified in the request body.
•	Suitable for replacing all existing data with new data.

PATCH:
•	Updates specific parts of the resource without replacing the entire thing.
•	Allows partial updates, modifying only the specified fields.
•	Useful for making incremental changes to the existing data.



