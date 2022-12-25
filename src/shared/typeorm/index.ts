import { Role } from '@roles/entities/Role'
import { RefreshToken } from '@users/entities/RefreshToken'
import { User } from '@users/entities/User'
import { DataSource } from 'typeorm'
import { CreateRolesTable1671708541059 } from './migrations/1671708541059-CreateRolesTable'
import { CreateUsersTable1671807170792 } from './migrations/1671807170792-CreateUsersTable'
import { AddRoleIdUsersTable1671812949122 } from './migrations/1671812949122-AddRoleIdUsersTable'
import { CreateRefreshTokensTable1671987907403 } from './migrations/1671987907403-CreateRefreshTokensTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User, RefreshToken],
  migrations: [
    CreateRolesTable1671708541059,
    CreateUsersTable1671807170792,
    AddRoleIdUsersTable1671812949122,
    CreateRefreshTokensTable1671987907403,
  ],
})
