/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://db_owner:5L8vHhMewnJT@ep-twilight-tree-a1ci8oy0.ap-southeast-1.aws.neon.tech/MIWA?sslmode=require',
  }
};