import mongoose from 'mongoose';
const ConnectToDB = async ()=>{
    const res =  await mongoose.connect('mongodb://127.0.0.1:27017/mern-auth')
    res && console.log('connected to database')
}
export default ConnectToDB