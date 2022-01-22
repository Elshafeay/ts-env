import fs from 'fs';
import path from 'path';

export const testFS = async () =>{
  fs.readFile(path.join(process.cwd(), '.env.example'), 'utf8', (err, data) => {
    if(err){
      throw err;
    }
    console.log(data);
  });
};

export const calcAverage = (...numbers: number[]) => {
  if(numbers.length === 0){
    return 0;
  }

  const total = numbers.reduce((curr, prev) => {
    return curr+prev;
  }, 0);

  return total/numbers.length;
};