import { Client, Account } from "appwrite";

const client = new Client()
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const account = new Account(client);


const clientWithEndPoint = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_API_ENDPOINT) 
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const accountWithEndPoint = new Account(clientWithEndPoint);
