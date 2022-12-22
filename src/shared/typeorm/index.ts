import { DataSource } from 'typeorm'
import { CreateRolesTable1671708541059 } from './migrations/1671708541059-CreateRolesTable'

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1671708541059],
})
