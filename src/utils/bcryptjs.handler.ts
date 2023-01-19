import { hash, compare } from 'bcryptjs';

const encryptjs = async (passwordPlane: string) => {
    const passwordHash = await hash(passwordPlane, 8);
    return passwordHash;
};

const verified = async (password: string, passHash: string) => {
    const isCorrect = await compare(password, passHash);
    return isCorrect;
};

export { encryptjs, verified };