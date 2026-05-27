import { createClient } from 'redis';
import { env } from '../../validate.env.js';

export const connectToReddis=async()=>{

  const client = createClient();
  
  client.on('error', err => console.log('Redis Client Error', err));
  
  await client.connect();
  console.log('connected to redis');
}


