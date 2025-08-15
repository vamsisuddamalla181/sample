// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import { injectable } from "tsyringe";
// import User from "../models/user.ts";

// @injectable()
// export class AuthService {
//   async login(email: string, password: string) {
//     const user = await User.findOne({email})
//     if (!user) {
//         throw new Error("Invalid email or password");
//     }
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) throw new Error("Invalid email or password");

//     const token = jwt.sign(
//       { id: user._id, role: user.role },
//       process.env.JWT_SECRET || "mysecret",
//       { expiresIn: "1h" }
//     );

//     return { token };
//   }
// }
