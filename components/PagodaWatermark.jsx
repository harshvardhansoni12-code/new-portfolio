import Image from "next/image";

export default function PagodaWatermark() {
  return (
    <div className="fixed right-2 sm:right-12 md:right-24 top-28 sm:top-36 md:top-40 w-64 sm:w-80 md:w-96 lg:w-[420px] pointer-events-none select-none z-0 opacity-15 mix-blend-multiply transition-opacity duration-700">
      <Image
        src="/pagoda.jpg"
        alt="Pagoda Watermark"
        width={500}
        height={500}
        className="w-full h-auto object-contain filter contrast-125"
        priority
      />
    </div>
  );
}
