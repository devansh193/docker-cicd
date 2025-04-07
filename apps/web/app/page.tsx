import { prismaClient } from "db/client";
export const dynamic = "force-dynamic";

export default async function Home() {
  const user = await prismaClient.user.findMany();
  return (
    <div className="flex items-center justify-center">
      <h1 className="text-sm">{JSON.stringify(user)}</h1>
    </div>
  );
}
