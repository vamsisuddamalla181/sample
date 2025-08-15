
import Joi from "joi";
import {Types} from "mongoose"
export const userValidationSchema = Joi.object({
  username: Joi.string().min(5).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().pattern(/^\+91\d{10}$/).required(),
  fullname: Joi.string().min(5).max(30).required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("admin", "normaluser").required()
});
export const taskValidationSchema=Joi.object({
  title:Joi.string().trim().required(),
  description:Joi.string().min(5).required().messages({"string.min":"please enter the descrition more than 5 words"}),
  status:Joi.string().valid("todo","assigned","inprogress","completed").required(),
  assigned:Joi.custom((val,err)=>{
    if(val!==null && !Types.ObjectId.isValid(val)){
      return err.error("any.invalid");
    }
  }).allow(null).messages({"any.invalid":"please provide valid id"})
})