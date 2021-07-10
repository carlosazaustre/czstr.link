import { getURLbyShortLink, updateShortLinkClicks } from "@/lib/db";

export default function ShortIdPage() {
  return <div>ShortID Redirect</div>;
}

export async function getServerSideProps({ params }) {
  const { shortId } = params;
  const data = await getURLbyShortLink(shortId);

  if (!data) {
    return {
      redirect: { destination: "/" },
    };
  }

  await updateShortLinkClicks(shortId, data);

  return {
    redirect: {
      destination: data.url,
    },
  };
}
