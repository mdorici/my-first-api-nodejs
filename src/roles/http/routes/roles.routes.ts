import { Role } from '@roles/entities/Role'
import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

const rolesRouter = Router()

const roles: Role[] = []

rolesRouter.post('/', (request, response) => {
  const { name } = request.body

  const role = new Role()

  Object.assign(role, {
    name,
    create_at: new Date(),
  })

  roles.push(role)
  return response.status(201).json(role)
})

export { rolesRouter }
