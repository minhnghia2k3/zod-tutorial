import z from "zod";

const userEnum = z.enum(["admin" , "user", "guest"])
type userEnum = z.infer<typeof userEnum>
const mySchema = z.object({
    name: z.string(),
    type: userEnum
})

type User = z.infer<typeof mySchema>

const user: User = {
    name: "Nghia",
    type: userEnum.enum.guest
} 

console.log(mySchema.parse(user))