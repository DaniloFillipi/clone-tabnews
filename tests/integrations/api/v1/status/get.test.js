test("GET to /api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.updated_at).toBeDefined();
  expect(responseBody.version_postgres).toBeDefined();
  expect(responseBody.max_connections).toBeDefined();
  expect(responseBody.opened_connections).toBeDefined();

  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt);

  const versionDbResult = responseBody.version_postgres;
  expect(responseBody.version_postgres).toEqual(versionDbResult);

  const maxConnectionsResult = responseBody.max_connections;
  expect(responseBody.max_connections).toEqual(maxConnectionsResult);

  const openedConnectionsResult = responseBody.opened_connections;
  expect(responseBody.opened_connections).toEqual(openedConnectionsResult);
});
