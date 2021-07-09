import { PrismaClient } from "@prisma/client";

// Link handlers
export const createShortLink = async (url, shortUrl) => {
  const prisma = new PrismaClient();
  const data = await prisma.link.create({ data: { url, shortUrl } });

  await prisma.$disconnect();
  return data;
};

export const getURLbyShortLink = async (shortUrl) => {
  const prisma = new PrismaClient();
  const data = await prisma.link.findUnique({
    where: { shortUrl },
  });

  if (!data) return null;

  await prisma.$disconnect();
  return data;
};

export const updateShortLinkClicks = async (shortUrl, data) => {
  const prisma = new PrismaClient();
  const response = await prisma.link.update({
    where: { shortUrl },
    data: { clicks: data.clicks++ },
  });
  await prisma.$disconnect();
  return response;
};

// User handlers
export const getUserByEmail = async (email) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  await prisma.$disconnect();
  return user;
};

export const createUser = async (email) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.create({
    email,
  });
  await prisma.$disconnect();
  return user;
};
