import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();

  const versionDbResult = (
    await database.query("SELECT current_setting('server_version') AS version;")
  ).rows[0].version;
  const maxConnectionsResult = (
    await database.query("SELECT current_setting('max_connections') AS max;")
  ).rows[0].max;
  const openedConnectionsResult = (
    await database.query(
      "SELECT count(*) AS opened FROM pg_stat_activity;",
    )
  ).rows[0].opened;

  response.status(200).json({
    updated_at: updatedAt,
    version_postgres: versionDbResult,
    max_connections: maxConnectionsResult,
    opened_connections: openedConnectionsResult,
  });
}

export default status;
