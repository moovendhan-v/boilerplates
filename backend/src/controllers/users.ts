import { RequestHandler } from "express";
import UserModel from "../models/user";
import assertIsDefined from "../utils/assertIsDefined";


export const getAuthenticatedUser: RequestHandler = async (req, res, next) => {
    const authenticatedUser = req.user;

    try {
        assertIsDefined(authenticatedUser);

        const user = await UserModel.findById(authenticatedUser._id).select("+email").exec();

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}
