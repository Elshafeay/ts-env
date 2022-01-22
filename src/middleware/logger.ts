import morgan, { StreamOptions } from 'morgan';

const stream: StreamOptions = {
  write: (message) => console.log(message),
};

// Build the morgan middleware
const morganMiddleware = morgan(
  ':method :url :status :response-time ms',
  { stream },
);

export default morganMiddleware;