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


// Create Typescript interface for createUser function
type UserInput = z.infer<typeof mySchema>

// Parse function
const createUser = (props: UserInput) => {
    const result = mySchema.safeParse(props)
    return result
}


const payload: UserInput = {
    name: "Nghia",
    age: 20,
    isAlive: true,
    hobbies: ['Coding', 'Gaming'],
    address: {
        street: "Trang dai"
    },
    // @ts-ignore
    isIgnore: true,
}

const result = createUser(payload)
console.log(JSON.stringify(result, null ,2))

