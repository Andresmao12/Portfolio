import express from 'express';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

import contactRouter from './routes/contact.routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// RUTAS
app.use('/api/contact', contactRouter);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
