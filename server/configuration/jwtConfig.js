// import crypto from "crypto"

// const secretKey = crypto.randomBytes(32).toString('hex');

// export default secretKey




const secretKey = process.env.JWT_SECRET; // This line gets the secret from the environment
export default secretKey;
