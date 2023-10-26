import { Client, Databases } from 'appwrite';
const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('653a79b691fbb8849a92');
export const database=new Databases(client)