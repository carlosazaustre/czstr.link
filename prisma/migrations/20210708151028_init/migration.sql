-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shortUrl" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link.url_unique" ON "Link"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Link.shortUrl_unique" ON "Link"("shortUrl");
