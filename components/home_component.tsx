import Image from "next/image";

export default function HomeContainer() {
  return (
    <div className="flex flex-col md:flex-row w-full px-4 py-8">
      {/* First Container */}
      <div className="flex flex-col w-full md:w-2/3 space-y-6">
        {/* Heading and Description */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
            WE DELIVER YOUR SECURITY AMBITIONS
          </h1>
          <p className="text-md md:text-lg text-gray-600">
            Powerful Security Solutions, Built to Protect Your Behavior. From intelligent cameras to robust risk detection software, ButterTech offers an all-in-one approach to security. Whether it's monitoring your premises or detecting potential risks, our technology adapts to your needs.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            className="bg-[rgba(185,199,131,0.8)] text-white px-8 py-3 rounded-full hover:opacity-90"
          >
            Contact Us
          </button>
          <button
            className="bg-white border border-[rgba(185,199,131,0.8)] text-[rgba(185,199,131,0.8)] px-8 py-3 rounded-full hover:bg-[rgba(185,199,131,0.1)]"
          >
            Discover our services
          </button>
        </div>
      </div>

      {/* Second Container */}
      <div className="hidden md:flex w-full md:w-1/3 justify-center items-center">
        <Image
          src="/3.png"
          alt="Security Solutions"
          layout="responsive"
          width={400}
          height={300}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}