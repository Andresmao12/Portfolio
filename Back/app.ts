import express from 'express';
import cors from 'cors';

import contactRoutes from './routes/contact.routes';

const app = express();
const PORT = 5000

app.use(cors());
app.use(express.json());

// RUTAS
app.use('/api/contact', contactRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
