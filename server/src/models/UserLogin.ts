import { model, Schema, Document } from "mongoose";
import { userType } from "../types/user.type";

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: [true, "ใส่ Username"],
    },
    email: {
        type: String,
        required: [true, "ใส่ Email"],
    },
    password: {
        type: String,
        required: [true, "ใส่ password"],
    },
    confirmpassword: {
        type: String,
        required: [true, "ยืนยัน Password"],
    },
});

const User = model<userType>("User", UserSchema);

export default User;
