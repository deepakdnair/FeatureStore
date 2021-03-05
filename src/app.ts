import express from 'express';
import {json} from 'body-parser'
import { featureStoreRouter } from './routes'
import mongoose from 'mongoose'

//  const router = express.Router();
//  router.get('/api/features', (req: any, res: any)=> {
//      return res.send('get features')
//  })
//  router.post('/api/features/feature', (req: any, res: any)=> {
//     return res.send('post a  feature')
// })

const app=express();
app.use(json());
app.use(featureStoreRouter);


mongoose.connect('mongodb://localhost:27017/feature-store', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}, () => {
  console.log('connected to database')
})

app.get("/", (req:any,res:any)=> {
    res.send("Server running successfully");
});

app.listen(3000, ()=> {
    console.log("server in port 3000")
});
