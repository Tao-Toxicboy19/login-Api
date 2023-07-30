import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";

const UserSchema: Schema = new Schema({
    username: {
        type: String,
        required: [true, "ใส่ Username"]
    },
    email: {
        type: String,
        required: [true, "ใส่ Email"]
    },
    password: {
        type: String,
        required: [true, "ใส่ password"]
    },
    confirmpassword: {
        type: String,
        required: [true, "ยืนยัน Password"]
    }
});


UserSchema.pre("save", async function (next) {
    const user = this;
    try {
        const hash = await bcrypt.hash(user.password, 5);
        user.password = hash;

        const confirmPasswordHash = await bcrypt.hash(user.confirmpassword, 5);
        user.confirmpassword = confirmPasswordHash;

        next();
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(`เกิดข้อผิดพลาดในการเข้ารหัสผ่าน: ${error.message}`);
            next(error);
        } else {
            console.log(`เกิดข้อผิดพลาดที่ไม่รู้จัก: ${error}`);
            next(error as Error);
        }
    }
});
    
const User = mongoose.model("User", UserSchema);
export default User;