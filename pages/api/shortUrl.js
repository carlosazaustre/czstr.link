import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { url } = req.body;
  const shortUrl = Math.random().toString(36).substr(2, 7);

  try {
    const data = await prisma.link.create({
      data: { url, shortUrl },
    });
    console.log(data);
    return res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ error: err.message });
  }
}
