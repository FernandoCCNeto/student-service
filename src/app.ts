import express from 'express';
import StudentRepositoryArray from './school/adapter/repository/studentsRepositoryArray';
import StudentController from './school/http/rest/studentsController';

const studentRepository = new StudentRepositoryArray();
const studentController = new StudentController(studentRepository);

const app = express();

app.use(express.json());
app.use('/students', studentController.buildRouter());

export default app;
