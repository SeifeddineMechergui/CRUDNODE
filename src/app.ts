import { connectDB } from './configs/db'; 
import express from 'express';
import shopingRoutes from './routes/ShopingRoutes'
const app = express();

connectDB();

app.use(express.json());
app.use('/shoping',shopingRoutes );

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Shoping Service running on port ${PORT}`);
});
