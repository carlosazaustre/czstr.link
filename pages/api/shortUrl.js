import { createShortLink } from "@/lib/db";

export default async function handler(req, res) {
  const { url } = req.body;
  const shortUrl = Math.random().toString(36).substr(2, 7);

  try {
    const data = await createShortLink(url, shortUrl);

    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
}
