import type { Request, Response } from "express";
import * as UserService from "../services/user.service.ts";

export function getAllUsers(_req:Request, res: Response): void {
  const users = UserService.findAllUsers();

  res.status(200).json(users);
}