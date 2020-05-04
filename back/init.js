import app from './app';

const handleListening = () => {
  console.log('Listening on : http://localhost:5000');
};

app.listen(5000, handleListening);
