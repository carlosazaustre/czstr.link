import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Dashboard({ links }) {
  return (
    <div>
      {links.map((link) => (
        <li key={link.id}>{link.url}</li>
      ))}
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps() {
    return { props: { links: [{ id: 1, url: "http://localhost" }] } };
  },
});
