import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa6";

function Tofuss() {
  return (
    <div>
      {/* Intro div */}
      <div className="px-8 flex flex-col items-center gap-3 pt-10 md:pt-15 md:gap-6">
        <div
          style={{
            backgroundImage: "url('/tofuss.jpg')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-full bg-white h-42 w-42 border-[var(--tofuss-color)] border-4"
        ></div>
        <h2 className="text-[var(--tofuss-color)] font-bold text-2xl md:text-3xl">
          Tofuss
        </h2>
        <p className="text-lg text-center text-gray-300">
          Yo yo! We’re a live streaming duo bringing you raw, unfiltered IRL
          content, wild live date adventures, and nonstop laughs on OmeTV 😎🎥
        </p>
        <p className="text-lg text-center text-gray-300">
          Already making noise in the live streaming scene, and we’re just
          getting started. Tap in, join the madness, and be part of the buzz 🌀
        </p>
        <p className="text-lg text-center text-gray-300">
          🎤 IRL | 💘 Live Dates | 😂 Funny AF | 🔴 Always Live 📲 Follow the
          streams – you don’t wanna miss what’s next
        </p>
        <p className="text-lg text-center text-gray-300">
          📲 Follow the streams – you don’t wanna miss what’s next
        </p>
      </div>

      {/* Links */}
      <div className="pt-10 flex flex-col gap-5 md:gap-7 md:pt-15">
        <h2 className="text-xl font-bold text-[var(--tofuss-color)] text-center">
          Our Links
        </h2>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/tofusslive_x/"
              target="_blank"
              className="text-4xl text-[var(--tofuss-color)] transform transition-transform duration-300 hover:scale-125 hover:text-[#00ffcc] hover:drop-shadow-lg"
            >
              <FaInstagram />
            </a>
            <h4 className="text-lg text-gray-300">Instagram</h4>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.youtube.com/@Tofuss_live"
              target="_blank"
              className="text-4xl text-[var(--tofuss-color)] transform transition-transform duration-300 hover:scale-125 hover:text-[#00ffcc] hover:drop-shadow-lg"
            >
              <FaYoutube />
            </a>
            <h4 className="text-lg text-gray-300">Youtube</h4>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.facebook.com/share/1CLn5QNN32/?mibextid=wwXIfr"
              target="_blank"
              className="text-4xl text-[var(--tofuss-color)] transform transition-transform duration-300 hover:scale-125 hover:text-[var(--shining-blue)] hover:drop-shadow-lg"
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
            className="text-[var(--tofuss-color)] underline hover:text-[#00ffcc]"
            href="mailto:chatmax07@gmail.com"
          >
            chatmax07@gmail.com
          </a>
        </h5>
      </div>
    </div>
  );
}

export default Tofuss;
