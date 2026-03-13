import Banner from "../components/Banner";
import Card from "../components/Card";

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen">
      <Banner />
      <div className="flex justify-center gap-8 py-10 px-6 flex-wrap">
        <Card
          venueName="The Bloom Pavilion"
          imgSrc="/img/bloom.jpg"
          description="Perfect venue for your event"
        />
        <Card
          venueName="Spark Space"
          imgSrc="/img/sparkspace.jpg"
          description="Perfect venue for your event"
        />
        <Card
          venueName="The Grand Table"
          imgSrc="/img/grandtable.jpg"
          description="Perfect venue for your event"
        />
      </div>
    </main>
  );
}