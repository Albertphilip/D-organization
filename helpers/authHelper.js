import bcrypt from 'bcrypt'

export const hashPassword = async(password)=>{
    try {

        //saltRound:how many times we perform the hashing process. 
        //More rounds mean more security

        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password,saltRound)
        return hashedPassword
    } catch (error) {
        console.log(error)
    }
};

//compare the hashed password with original password

export const comparePassword = async(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);

};