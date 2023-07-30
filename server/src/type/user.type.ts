//user
import { Document } from "mongoose";

export interface userType extends Document {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
