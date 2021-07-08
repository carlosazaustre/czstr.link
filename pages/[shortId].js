import db from "@/lib/client";

export default function ShortIdPage() {
  return <div>ShortID Redirect</div>;
}

export async function getServerSideProps({ params }) {
  const { shortId } = params;

  const data = await db.link.findUnique({
    where: { shortUrl: shortId },
  });

  if (!data) {
    return { redirect: { destination: "/" } };
  }

  await db.link.update({
    where: { shortUrl: shortId },
    data: { clicks: data.clicks + 1 },
  });

  return { redirect: { destination: data?.url || "/" } };
}
