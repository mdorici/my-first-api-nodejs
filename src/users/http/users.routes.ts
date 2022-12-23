import { response, Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { CreateUserController } from '@users/useCases/createUser/CreateUserController'
import { container } from 'tsyringe'

const usersRouter = Router()
const createUserController = container.resolve(CreateUserController)

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().required(),
      roleIs: Joi.string().uuid().required(),
    },
  }),
  (request, response) => {
    return createUserController.handle(request, response)
  },
)

export { usersRouter }
