import express from "express";
import { AppDataSource } from "./data-source";
import { errorMiddleware } from "./middleware/error";
import routes from "./routes"

AppDataSource.initialize().then(() => {
    const app = express();

    app.use(express.json());

    app.use(routes);

    app.use(errorMiddleware);

    return app.listen(process.env.PORT);
})