import './db';
import app from './app';

import './model/User';
import './model/Photo';
import './model/Word';

const handleListening = () => {
  console.log('Listening on : http://localhost:5000');
};

app.listen(5000, handleListening);
 