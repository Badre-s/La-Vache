import dotenv from "dotenv";
import cowsay from "cowsay";

dotenv.config();

const name = process.env.NAME;
const campus = process.env.CAMPUS;

console.log(
	cowsay.say({
		text: `Hello, my name is ${name} and I'm from campus ${campus}!`,
		e: "oO",
		T: "U ",
	}),
);
