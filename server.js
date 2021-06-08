const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const bookingController = require('./controller/bookingController')
const router = express.Router()

app.use(cors());
app.use(express.json());

const connectDB = async () => {
    try {
        //database Name
        const databaseName='demomern';
        const con = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    console.log(`Database connected : ${con.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

//mongoose.connect('mongodb+srv://picklerick:picklerick123@cluster0.rpqxm.mongodb.net/carmaintenanceDB?retryWrites=true&w=majority')

app.use("/", require("./routes/userRoute"));
app.use("/dealer", require("./routes/dealerRoute"));
router.post('/booking', bookingController.createBooking)

app.listen(3000, function () {
    console.log('express server is running on port 3000');
})