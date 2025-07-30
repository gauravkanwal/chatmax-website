import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa6";

function BichhooGang() {
  return (
    <div>
      {/* Intro div */}
      <div className="px-8 flex flex-col items-center gap-3 pt-10 md:pt-15 md:gap-6">
        <div
          style={{
            backgroundImage: "url('/bichhooG4ng.webp')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-full bg-white h-42 w-42 border-[var(--bichhoo-color)] border-4"
        ></div>

        <h2 className="text-[var(--bichhoo-color)] font-bold text-2xl md:text-3xl">
          BIchhoo G4ng
        </h2>
        <p className="text-lg text-center text-gray-300">
          Namashkar! We are Bichhoo G4ng 🦂
        </p>
        <p className="text-lg text-center text-gray-300">
          A wild group of Pahadi boys straight outta Uttarakhand, serving you
          unfiltered funny content in regional language and Hindi 🎥💥
        </p>
        <p className="text-lg text-center text-gray-300">
          No filters, no acting — just pure desi fun with that Pahadi twist 🤝
          Follow the gang, join the chaos, and rep the hills with us!
        </p>
        <p className="text-lg text-center text-gray-300">
          🦂 Bichhoo G4ng – Real boys, real jokes, real vibes.
        </p>
        <p className="text-lg text-center text-gray-300">
          📍Uttarakhand | 🎭 Almora| 🚀 Growing strong
        </p>
      </div>

      {/* Links */}
      <div className="pt-10 flex flex-col gap-5 md:gap-7 md:pt-15">
        <h2 className="text-xl font-bold text-[var(--bichhoo-color)] text-center">
          Our Links
        </h2>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/bichho_g4ng3601/"
              target="_blank"
              className="text-4xl text-[var(--bichhoo-color)] transform transition-transform duration-300 hover:scale-125 hover:text-[var(--shining-blue)] hover:drop-shadow-lg"
            >
              <FaInstagram />
            </a>
            <h4 className="text-lg text-gray-300">Instagram</h4>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.youtube.com/@BICHHOO_G4NG"
              target="_blank"
              className="text-4xl text-[var(--bichhoo-color)] transform transition-transform duration-300 hover:scale-125 hover:text-[var(--shining-blue)] hover:drop-shadow-lg"
            >
              <FaYoutube />
            </a>
            <h4 className="text-lg text-gray-300">Youtube</h4>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.facebook.com/share/1C5QYqvKA8/?mibextid=wwXIfr"
              target="_blank"
              className="text-4xl text-[var(--bichhoo-color)] transform transition-transform duration-300 hover:scale-125 hover:text-[var(--shining-blue)] hover:drop-shadow-lg"
            >
              <FaFacebook />
            </a>
            <h4 className="text-lg text-gray-300">Facebook</h4>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-10 py-10 bg-[var(--light-grey)] px-10 flex items-center justify-center md:py-12">
        <h5>
          For collaboration and business email us at:{" "}
          <a
            className="text-[var(--bichhoo-color)] underline hover:text-[var(--shining-blue)]"
            href="mailto:chatmax07@gmail.com"
          >
            chatmax07@gmail.com
          </a>
        </h5>
      </div>
    </div>
  );
}

export default BichhooGang;
