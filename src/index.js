export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === "/health") {
      return Response.json({
        ok: true,
        service: "aireminder-backend",
        timestamp: new Date().toISOString(),
      });
    }

    return Response.json(
      { ok: false, error: "Not Found", path: url.pathname },
      { status: 404 },
    );
  },
};
