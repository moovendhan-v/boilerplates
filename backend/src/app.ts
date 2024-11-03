import "dotenv/config";
import express from "express";
import usersRoutes from "./routes/users";
import cors from "cors";
import env from "./env";
import morgan from "morgan";
import errorHandler from "./middlewares/errorHandler";
import createHttpError from "http-errors";

const app = express();

if (env.NODE_ENV === "production") {
    app.set("trust proxy", true);
    app.use(morgan("combined"));
} else {
    app.use(morgan("dev"));
}

app.use(express.json());

app.use(cors({
    origin: env.WEBSITE_URL,
    credentials: true,
}));

app.use("/users", usersRoutes);

app.use((req, res, next) => next(createHttpError(404, "Endpoint not found")));

// #TODO: Implement all middlewares including authatications
app.use(errorHandler);

export default app;