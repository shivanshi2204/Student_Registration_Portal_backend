# Student_Registration_Portal_backend

## Approach

I have created a database using NoSQL. The keys used in the database are name of student, roll number, age, email ID, standard, contact number, address and gender. Then I worked on API's of backend to Create, Update, Read and Delete the data. For update and delete, id of the student to be changed is required.

Features of this app which were required in the assignment:

1. Add student
2. Update students
3. Get All students
4. Delete Student
5. Get Student By Id.
6. Sort students

**All Features and associated APIs are working fine!!**

## Steps to deploy this Student Registration Application

1. Git clone this repository in your local repository
2. Install modules using-- npm install
3. Create a MongoDB database on your local machine and connect to the database 
   (eg: write C:/Users/Shivanshi/mongodb/bin/mongod.exe --dbpath="C:/Users/Shivanshi/mongodb-data" on your terminal, the path would change according to your system)
4. Run the project using-- npm start
5. You can check the APIs using Postman. Import "collections.json" file on your Postman and test the APIs

Add route: localhost:3000/student

Update route: localhost:3000/student/id

Get all students: localhost:3000/students

Delete route: localhost:3000/student/id

Get by id: localhost:3000/student/id

Sort: localhost:3000/student/sort/key (Students are sorted on the basis of Roll Number) 

Adding a Student-
![image](https://user-images.githubusercontent.com/56682838/122882472-db50fc80-d359-11eb-8b18-b7f4ee7142e2.png)

Getting all Students-
![image](https://user-images.githubusercontent.com/56682838/122882344-b2c90280-d359-11eb-96f4-bf48ac91d436.png)




