import * as yup from "yup";

// #TODO: Improve this
const usernameSchema = yup.string()
    .max(20)
    .matches(/^[a-zA-Z0-9_]*$/);

const emailSchema = yup.string().email();

export const signUpSchema = yup.object({
    body: yup.object({
        username: usernameSchema.required(),
        email: emailSchema.required()
    }),
});

export type SignUpBody = yup.InferType<typeof signUpSchema>["body"];
