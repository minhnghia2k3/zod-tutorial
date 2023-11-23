import z from "zod";

const mySchema = z.object({
    name: z.string({
        required_error: "Name is required!",
        invalid_type_error: "Name must be a string!"
    }),
    password: z.string({}).min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string({})
}).refine((data) => {
   return data.password === data.confirmPassword
},{message: "Password do not match"})

// Create Typescript interface for createUser function
type UserInput = z.infer<typeof mySchema>

// Parse function
const createUser = (props: UserInput) => {
    const result = mySchema.parse(props)
    return result
}


const payload: UserInput = {
    name: "Nghia",
    password:"123456",
    confirmPassword:"123456"
}

const result = createUser(payload)
console.log(JSON.stringify(result, null ,2))

