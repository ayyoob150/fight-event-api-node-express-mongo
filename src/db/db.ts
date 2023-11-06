import { DataSource } from "typeorm"

export const dataSource = new DataSource({
        "type": "postgres",
        "host": "localhost",
        "port": 5432,
        "username": "postgres",
        "password": "yoosia150",
        "database": "postgres",
        "synchronize": true,
        "entities": ["src/entities/**/*{.ts,.js}"]
      })

