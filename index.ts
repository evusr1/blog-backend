import app from './app';
import { PORT } from './utils/config';
import { connectToDatabase } from './utils/db';


const start = async () => {
    try {
        await connectToDatabase();
        app.listen(PORT, () => {
            console.log(`Server running on PORT ${PORT}`);
        });
    } catch (error) {
        return process.exit(1);
    }
};


 void start();