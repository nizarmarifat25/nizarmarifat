import { Bungee } from "next/font/google";
import { motion } from "framer-motion";
import Head from "next/head";

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: "400",
});

const nizar = "nizar".split("");
const marifat = "marifat.com".split("");

export default function Home() {
  return (
    <>
      <Head>
        <title>NIZAR - Portfolio</title>
        <meta
          name="description"
          content="Website ini adalah portal dari Nizar Marifat, seorang Web Developer yang berfokus pada desain antarmuka yang menarik dan pengalaman pengguna yang optimal. Jelajahi karya desain, proyek pengembangan web, serta wawasan dan artikel seputar tren teknologi, UI/UX, dan inovasi digital."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="keywords"
          content="Nizar Marifat, Portfolio, Instagram, Web Developer, UI/UX Designer, Next.js, Frontend Developer, Teknologi, Desain Web, Pengembangan Web, Inovasi Digital"
        />
        <meta name="author" content="Nizar Marifat" />

        <meta property="og:title" content="NIZAR MARIFAT - Portfolio & Instagram" />
        <meta
          property="og:description"
          content="Website ini adalah portal dari Nizar Marifat, seorang Web Developer yang berfokus pada desain antarmuka yang menarik dan pengalaman pengguna yang optimal. Jelajahi karya desain, proyek pengembangan web, serta wawasan dan artikel seputar tren teknologi, UI/UX, dan inovasi digital."
        />
        <meta
          property="og:image"
          content="https://nizarmarifat.com/preview.jpg"
        />
        <meta property="og:url" content="https://nizarmarifat.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NIZAR - Portfolio & Instagram" />
        <meta
          name="twitter:description"
          content="Website ini adalah portal dari Nizar Marifat, seorang Web Developer yang berfokus pada desain antarmuka yang menarik dan pengalaman pengguna yang optimal. Jelajahi karya desain, proyek pengembangan web, serta wawasan dan artikel seputar tren teknologi, UI/UX, dan inovasi digital."
        />
        <meta
          name="twitter:image"
          content="https://nizarmarifat.com/preview.jpg"
        />
      </Head>

      <div className="relative flex flex-col items-center justify-center min-h-screen text-white px-4">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay untuk memperjelas teks */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

        {/* Teks Animasi */}
        <motion.h1
          className={`${bungee.variable} font-bold text-center flex flex-col items-center cursor-pointer z-10`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            fontSize: "clamp(4rem, 12vw, 8rem)",
            lineHeight: "1",
            fontWeight: "900",
            display: "flex",
            gap: "2px",
          }}
        >
          {/* Nizar */}
          <div className="flex gap-[1px]">
            {nizar.map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ rotate: -8 }}
                whileHover={{
                  y: -15,
                  rotate: Math.random() * 20 - 10,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Marifat */}
          <div className="flex gap-[3px] mt-1">
            {marifat.map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                initial={{ rotate: -8 }}
                whileHover={{
                  y: -15,
                  rotate: Math.random() * 20 - 10,
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.h1>

        {/* Tombol Portofolio & Instagram */}
        <div className="mt-8 flex gap-4 z-10">
          <motion.a
            href="https://portofolio-nizar.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg font-semibold rounded-full border border-white text-white transition duration-300 hover:bg-white hover:text-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portofolio
          </motion.a>

          <motion.a
            href="https://www.instagram.com/nizarmarifat/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-lg font-semibold rounded-full border border-white text-white transition duration-300 hover:bg-white hover:text-black"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Instagram
          </motion.a>
        </div>
      </div>
    </>
  );
}
