import Footer from "../components/footer";
import BookTripForm from "../trips/tripcomponents/book-trip-form";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  return (
    <main className="mt-6 mb-10">
      <BookTripForm tripID={id} />
      <Footer />
    </main>
  );
}
