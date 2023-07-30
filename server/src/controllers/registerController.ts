import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/UserLogin";

export const registerController = async (req: Request, res: Response) => {
    const { username, email, password, confirmPassword } = req.body;

    try {
        // Check if the user already exists with the same email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: "มีผู้ใช้อีเมลนี้อยู่แล้ว" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            confirmpassword: hashedPassword, // In this example, we're using the same hash for both passwords
        });

        // Save the new user to the database
        await newUser.save();

        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};
