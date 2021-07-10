import { handleAuth, handleCallback } from "@auth0/nextjs-auth0";

import { createUser } from "@/lib/db";

const afterCallback = async (_req, _res, session) => {
  try {
    await createUser(session.user.email);
  } catch (error) {
    console.error(error);
  }

  return session;
};

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback });
    } catch (error) {
      res.status(error.status || 500).send(error.message);
    }
  },
});
