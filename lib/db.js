import { PrismaClient } from "@prisma/client";

// Link handlers
export const createShortLink = async (url, shortUrl, userId) => {
  const prisma = new PrismaClient();

  const linkData = await prisma.link.create({
    data: { url, shortUrl, userId },
  });

  await prisma.user.update({
    where: { id: userId },
    data: {
      links: {
        connect: {
          id: linkData.id,
        },
      },
    },
  });

  await prisma.$disconnect();
  return linkData;
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
    include: {
      links: true,
    },
  });
  await prisma.$disconnect();
  return user;
};

export const createUser = async (email) => {
  const prisma = new PrismaClient();
  const user = await prisma.user.create({
    data: { email },
  });
  await prisma.$disconnect();
  return user;
};
