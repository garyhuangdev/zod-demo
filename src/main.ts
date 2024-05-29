import { z } from "zod";

enum Gender {
  M = "M",
  F = "F",
  U = "U",
}

const hobby = ["reading", "coding", "swimming"] as const;

const UserSchema = z.object({
  id: z.union([z.string(), z.number()]).optional(),
  username: z.string().min(3).max(20),
  age: z.number().gt(0),
  isProgrammer: z.boolean(),
  hobby: z.enum(hobby),
  gender: z.nativeEnum(Gender),
  friends: z.array(z.string()).optional(),
});

type User = z.infer<typeof UserSchema>;

const user: User = {
  username: "Alice",
  age: 30,
  isProgrammer: true,
  hobby: "reading",
  gender: Gender.M,
};

console.log(UserSchema.safeParse(user));
