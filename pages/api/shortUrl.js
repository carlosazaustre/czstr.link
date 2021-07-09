import { getSession } from "@auth0/nextjs-auth0";

import { createShortLink, getUserByEmail } from "@/lib/db";

export default async function handler(req, res) {
  const { user } = await getSession(req, res);
  const { url } = req.body;
  const shortUrl = Math.random().toString(36).substr(2, 7);

  try {
    const userDB = await getUserByEmail(user.email);
    const data = await createShortLink(url, shortUrl, userDB.id);

    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
}
