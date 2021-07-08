export default function handler(req, res) {
  // const { url } = req.body;
  const linkId = Math.random().toString(36).substr(2, 7);
  const shortUrl = `https://${req.headers.host}/${linkId}`;

  res.status(200).json({ shortUrl });
}
