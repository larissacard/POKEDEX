import cors from "cors";
import express from "express";
import { AppDataSource } from "./data-source";
import { errorMiddleware } from "./middleware/error";
import routes from "./routes"




AppDataSource.initialize().then(() => {
    
    const app = express();

    app.use(express.json());

    const cors = require('cors');
    const corsOptions = {
        origin:'http://localhost:3001', 
        credentials:true,            //access-control-allow-credentials:true
        optionSuccessStatus:200
    }   

    app.use(cors(corsOptions));

    app.use(routes);

    app.use(errorMiddleware);

    return app.listen(process.env.PORT);
})