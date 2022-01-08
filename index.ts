import app from './app';

const port = process.env.PORT;
const start = async() => {
  app.listen(port, () => console.log(`Listening on port ${port}!`));
};

start();