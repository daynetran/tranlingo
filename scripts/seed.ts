import { neon } from "@neondatabase/serverless";
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http"

import * as schema from "../db/schema"

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("seeding the database")

        await db.delete(schema.courses)
        await db.delete(schema.userProgress);

        await db.insert(schema.courses).values([
            {
                id: 1,
                title: "Spanish",
                imageSrc: "/es.svg"
            },
            {
                id: 2,
                title: "Italian",
                imageSrc: "/it.svg"
            },
            {
                id: 3,
                title: "French",
                imageSrc: "/fr.svg"
            },
            {
                id: 4,
                title: "Croatian",
                imageSrc: "/hr.svg"
            }
        ])

        console.log("seeing finished")
    } catch (error) {
        console.error(error)
        throw new Error("failed to seed the database")
    }
}

main();
