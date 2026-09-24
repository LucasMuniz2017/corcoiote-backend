import { defineConfig } from 'prisma/config';

process.loadEnvFile('.env');

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migratinos'
  },
  datasource: {
    url: process.env.DATABASE_URL
  }
});