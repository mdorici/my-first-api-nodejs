import { inject, injectable } from 'tsyringe'
import { compare } from 'bcryptjs'
import jwtconfig from '@config/auth'
import { IUsersRepository } from '@users/repositories/IUsersRepository'
import { User } from '@users/entities/User'
import { AppError } from '@shared/errors/AppError'
import { sign } from 'jsonwebtoken'

export type CreateLoginDTO = {
  email: string
  password: string
}

type IResponse = {
  user: User
  token: string
}

@injectable()
export class CreateLoginUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute({ email, password }: CreateLoginDTO): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email)
    if (!user) {
      throw new AppError('Incorrect email/password combination.', 401)
    }

    const passwordConfirmed = await compare(password, user.password)
    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password combination.', 401)
    }
    const token = sign({}, jwtconfig.jwt.secret, {
      subject: user.id,
      expiresIn: jwtconfig.jwt.expiresIn,
    })

    return {
      user,
      token,
    }
  }
}
