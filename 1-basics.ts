
import z from "zod";

const mySchema = z.object({
    name: z.string({
        required_error: "Name is required!",
        invalid_type_error: "Name must be a string!"
    }),
    age: z.number(),
    isAlive: z.boolean(),
    hobbies: z.array(z.string()),
    address: z.object({
        street: z.string()
    })
}).strict();


function createUser(props) {
    const result = mySchema.parse(props)
    return result
}


// construct payload parse to schema
const payload = {
    name: '30',
    age: 20,
    isAlive: true,
    hobbies:["Coding, Basketball"],
    address: {
        street: "Trang dai"
    },
}
 
const result = createUser(payload)
console.log(JSON.stringify(result, null ,2))