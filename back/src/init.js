import './db';
import dotenv from 'dotenv'
import app from './app';
dotenv.config()

import './model/User';
import './model/Post';
import './model/Word';

const handleListening = () => {
  console.log('Listening on : http://localhost:5000');
};

app.listen(process.env.PORT, handleListening);
 