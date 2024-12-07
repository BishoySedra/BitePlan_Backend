import Joi from 'joi';

export const signUpSchema = Joi.object({
    username: Joi.string().min(3).max(30).messages({
        'string.base': 'Username must be a string',
        'string.empty': 'Username cannot be empty',
        'string.min': 'Username must be at least 3 characters',
        'string.max': 'Username must be at most 30 characters',
        'any.required': 'Username is required',
    }),
    email: Joi.string().email().required().messages({
        'string.base': 'Email must be a string',
        'string.empty': 'Email cannot be empty',
        'string.email': 'Email must be a valid email',
        'any.required': 'Email is required',
    }),
    password: Joi.string()
        .pattern(
            new RegExp(
                '^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$'
            )
        )
        .required()
        .messages({
            'string.pattern.base':
                'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character',
            'any.required': 'Password is required',
        }),
    confirmPassword: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .messages({
            'any.only': 'Confirm password does not match password',
            'any.required': 'Confirm password is required',
        }),
});

