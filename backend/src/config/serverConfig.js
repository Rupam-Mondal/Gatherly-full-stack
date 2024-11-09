import dotenv from 'dotenv'

dotenv.config();

export const db_url = process.env.DB_URL;
export const port = process.env.PORT || 3000;
export const secret_key = process.env.SECRET_KEY;