const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('✅ Đã kết nối MongoDB thành công!');
    } catch (error) {
        console.log('❌ Lỗi kết nối:', error.message);
        process.exit(1);
    }
}
connectDB();

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server đang chạy tại port ${process.env.PORT || 5000}`);
});