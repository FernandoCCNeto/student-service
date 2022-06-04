import express from 'express';
import StudentRepositoryArray from './student/adapter/repository/studentsRepositoryArray';
import StudentController from './student/http/rest/studentsController';

const studentRepository = new StudentRepositoryArray();
const studentController = new StudentController(studentRepository);

const app = express();

app.use(express.json());
app.use('/students', studentController.buildRouter());

export default app;
