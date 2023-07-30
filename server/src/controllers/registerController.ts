import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/UserLogin";

export const registerController = async (req: Request, res: Response) => {
    const { username, email, password, confirmpassword } = req.body;

    // Check if username already exists
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
        return res.status(400).json({ error: "ชื่อผู้ใช้งานซ้ำกัน" });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
        return res.status(400).json({ error: "อีเมล์ซ้ำกัน" });
    }

    // Check if password and confirmpassword match
    if (password !== confirmpassword) {
        return res.status(400).json({ error: "รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน" });
    }

    // Check if password length is at least 10 characters
    if (password.length < 10) {
        return res.status(400).json({ error: "รหัสผ่านต้องมีความยาวอย่างน้อย 10 ตัวอักษร" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    User.create({
        username,
        email,
        password: hashedPassword,
        confirmpassword: hashedPassword,
    })
        .then(() => {
            res.json("ลงทะเบียนผู้ใช้งานเรียบร้อยแล้ว!!!");
        })
        .catch((err) => {
            console.log(`Error: ${err}`);
            res.status(500).json({ error: "เกิดข้อผิดพลาดในการลงทะเบียนผู้ใช้งาน" });
        });
};

