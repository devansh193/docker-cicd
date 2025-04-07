import { prismaClient } from "db/client";

export default async function Home() {
  const user = await prismaClient.user.findMany();
  return (
    <div>
      <h1>{JSON.stringify(user)}</h1>
    </div>
  );
}
