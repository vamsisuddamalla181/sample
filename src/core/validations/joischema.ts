
import Joi from "joi";

export const userValidationSchema = Joi.object({
  username: Joi.string().min(5).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^\+91\d{10}$/).required(),
  fullname: Joi.string().min(5).max(30).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("admin", "normaluser").required()
});
