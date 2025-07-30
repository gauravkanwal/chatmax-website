import { FaInstagram, FaYoutube, FaSpotify } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";

function Chatmax() {
  return (
    <div>
      {/* Intro div */}
      <div className="px-8 flex flex-col items-center gap-3 pt-10 md:pt-15 md:gap-6">
        <div
          style={{
            backgroundImage: "url('/chatmax.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="rounded-full bg-white h-42 w-42 border-gray-500 border-4"
        ></div>
        <h2 className="text-[var(--chatmax-color)] font-bold text-2xl md:text-3xl">
          CHATMAX
        </h2>
        <p className="text-lg text-center text-gray-300">
          Yo what’s up! I go by the name CHATMAX, but some people know me as
          Chatu Baba – reppin’ straight from Almora, Uttarakhand 🏔 
        </p>
        <p className="text-lg text-center text-gray-300">
          I’m a rapper
          & musician doing my thing, mixing Pahadi vibes with real-life bars and
          desi hip-hop energy. Been putting out music on YouTube and all
          streaming platforms — go check it out and let me know what you think
          🔥 
        </p>
        <p className="text-lg text-center text-gray-300">
         Always up for collabs and down to work on promo projects too. If
          you’re about real music and want to build something dope, let’s
          connect. Peace and love, ~ CHATMAX / Chatu Baba 🎤 📍 Almora, UK
        </p>
      </div>

      {/* Links */}
      <div className="pt-10 flex flex-col gap-5 md:gap-7 md:pt-15">
        <h2 className="text-xl font-bold text-[var(--chatmax-color)] text-center">
          My Links
        </h2>
        <div className="flex justify-around">
          <div className="flex flex-col items-center">
            <a
              href="https://www.instagram.com/chatmax_/"
              target="_blank"
              className="text-4xl text-[var(--chatmax-color)] transform transition-transform duration-300 hover:scale-125 hover:text-[#00ffcc] hover:drop-shadow-lg"
            >
              <FaInstagram />
            </a>
            <h4 className="text-lg text-gray-300">Instagram</h4>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://www.youtube.com/@Chatmax"
              target="_blank"
              className="text-4xl text-[var(--chatmax-color)] transform transition-transform duration-300 hover:scale-125 hover:text-[#00ffcc] hover:drop-shadow-lg"
            >
              <FaYoutube />
            </a>
            <h4 className="text-lg text-gray-300">Youtube</h4>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://open.spotify.com/artist/1dlDIXqAzzitGA6YXw5jQr"
              target="_blank"
              className="text-4xl text-[var(--chatmax-color)] transform transition-transform duration-300 hover:scale-125 hover:text-[#00ffcc] hover:drop-shadow-lg"
            >
              <FaSpotify />
            </a>
            <h4 className="text-lg text-gray-300">Spotify</h4>
          </div>
          <div className="flex flex-col items-center">
            <a
              href="https://music.apple.com/us/artist/chatmax/1589124422"
              target="_blank"
              className="text-4xl text-[var(--chatmax-color)] transform transition-transform duration-300 hover:scale-125 hover:text-[#00ffcc] hover:drop-shadow-lg"
            >
              <SiApplemusic />
            </a>
            <h4 className="text-lg text-gray-300">Apple Music</h4>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="mt-10 py-10 bg-[var(--light-grey)] px-10 flex items-center justify-center md:py-12">
        <h5>
          For collaboration and business email us at:{" "}
          <a
            className="text-[var(--chatmax-color)] underline hover:text-[#00ffcc]"
            href="mailto:chatmax07@gmail.com"
          >
            chatmax07@gmail.com
          </a>
        </h5>
      </div>
    </div>
  );
}

export default Chatmax;
