import BookTripForm from "@/app/components/BookTripForm";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <div className="mt-6 mb-10">
      <BookTripForm tripID={id} />
    </div>
  );
}
