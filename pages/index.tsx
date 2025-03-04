import { Bungee } from "next/font/google";
import { motion } from "framer-motion";
import Head from "next/head";

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: "400",
});

// Pisahkan huruf untuk animasi per huruf
const nizar = "nizar".split("");
const marifat = "marifat.com".split("");

export default function Home() {
  return (
    <>
      <Head>
        <title>NIZAR</title>
        <meta
          name="description"
          content="Portfolio & Instagram of Nizar Marifat"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex flex-col items-center justify-center min-h-screen text-white px-4">
        {/* Background Video */}
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
