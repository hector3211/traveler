import TripDetailsPage from "@/app/components/TripDetails";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <TripDetailsPage tripdID={id} />
    </div>
  );
}
