import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export default (validator: (req: Request) => Joi.ValidationResult) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = validator(req.body);

    if (error) return res.status(400).send(error.details[0].message);
    next();
  };
};
