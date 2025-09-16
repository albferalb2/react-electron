// server.js
import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

let db;

async function startServer() {
  try {
    // Conexión a la base de datos
    db = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'peliculasDB',
    });

    console.log('Conectado a la base de datos MySQL');

    // Ruta para obtener todas las películas
    app.get('/films', async (req, res) => {
      try {
        const [rows] = await db.execute('SELECT * FROM films');
        res.json(rows);
      } catch (err) {
        console.error(err);
        res.status(500).send('Error al obtener películas');
      }
    });

    const PORT = 5000;
    app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
    
  } catch (err) {
    console.error('Error al conectar a la base de datos:', err);
  }
}

// Iniciar el servidor
startServer();
