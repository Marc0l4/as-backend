import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import https from 'https';
import http from 'http';
import fs from 'fs';

import adminRoutes from './routes/admin';
import siteRoutes from './routes/site';

import { requestIntercepter } from './utils/requestIntercepter';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all('*', requestIntercepter);

app.use('/admin', adminRoutes);
app.use('/', siteRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Rodando no endereço: http://localhost:${process.env.PORT}`);
});