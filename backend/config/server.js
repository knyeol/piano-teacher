module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 5000),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "c7370285bd912f07f241b3d0712f4b96")
    }
  }
});
