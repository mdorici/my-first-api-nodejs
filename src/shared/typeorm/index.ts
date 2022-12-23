import { Role } from '@roles/entities/Role'
import { DataSource } from 'typeorm'
import { CreateRolesTable1671708541059 } from './migrations/1671708541059-CreateRolesTable'
import { CreateUsersTable1671807170792 } from './migrations/1671807170792-CreateUsersTable'
import { AddRoleIdUsersTable1671812949122 } from './migrations/1671812949122-AddRoleIdUsersTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [
    CreateRolesTable1671708541059,
    CreateUsersTable1671807170792,
    AddRoleIdUsersTable1671812949122,
  ],
})
