require('dotenv').config();
const express=require('express');
const authRoutes=require('./src/routes/authRoutes');
const gameRoutes=require('./src/routes/gameRoutes');
const app=express();
app.use(express.json());
app.use('/auth',authRoutes);
app.use('/game',gameRoutes);
app.listen(process.env.PORT,()=>console.log('Server running'));