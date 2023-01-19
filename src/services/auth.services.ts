import { Auth } from "../interfaces/auth.interfaces";
import { User } from "../interfaces/users.interfaces";
import UsersModel from "../models/users.models";
import { encryptjs, verified } from "../utils/bcryptjs.handler";
import { generateToken } from "../utils/jwt.handler";

const registerNewUser = async ({email, password, name}: User) => {
    const checkIs = await UsersModel.findOne({email});
    if(checkIs) return 'User exists';
    const passHash = await encryptjs(password);
    const registerNewUser = await UsersModel.create({
        email,
        password: passHash,
        name
    });
    return registerNewUser;
};

const loginUser = async ({email, password}: Auth) => {
    const checkIs = await UsersModel.findOne({email});
    if(!checkIs) return 'User not found';

    const passwordHash = checkIs.password;
    const isCorrect = await verified(password, passwordHash);

    if(!isCorrect) return 'Password incorrect';

    const token = await generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs
    };
    return data;
};

export { registerNewUser, loginUser };