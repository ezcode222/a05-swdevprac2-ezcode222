import InteractiveCard from "./InteractiveCard";

type CardProps = {
  venueName: string;
  imgSrc: string;
  description?: string;
};

export default function Card({
  venueName,
  imgSrc,
  description = "Perfect venue for your event",
}: CardProps) {
  return (
    <InteractiveCard>
      <div className="w-80 overflow-hidden rounded-lg">
        <img
          src={imgSrc}
          alt={venueName}
          className="w-full h-52 object-cover"
        />
        <div className="p-4 text-center">
          <h3 className="text-2xl font-bold text-gray-800">{venueName}</h3>
          <p className="text-gray-500 text-lg mt-1">{description}</p>
        </div>
      </div>
    </InteractiveCard>
  );
}