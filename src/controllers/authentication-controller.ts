import authenticationService, { SignInParams } from "@/services/authentication-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function singInPost(req: Request, res: Response) {
  const { email, password } = req.body as SignInParams;

  try {
    const result = await authenticationService.signIn({ email, password });

    return res.status(httpStatus.OK).send(result);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}

export async function loginGithub(req: Request, res: Response) {
  const code = req.body.code as string;

  try {
    const token = await authenticationService.signInOauth(code);
    return res.status(httpStatus.OK).send(token);
  } catch (error) {
    return res.status(httpStatus.UNAUTHORIZED).send({});
  }
}
