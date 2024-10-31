import Footer from "@/app/components/footer";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="relative">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Trips page! got trip {id}</h1>
      </main>
      <Footer />
    </div>
  );
}
