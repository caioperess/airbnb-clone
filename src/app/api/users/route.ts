import bcrypt from 'bcryptjs'
import { z } from 'zod'

import { prisma } from '@/app/libs/prisma'

const signUpFormSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
})

export async function POST(request: Request) {
  const body = await request.json()

  const { email, name, password } = await signUpFormSchema.parseAsync(body)

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: { email, name, hashedPassword },
  })

  return Response.json(user)
}
