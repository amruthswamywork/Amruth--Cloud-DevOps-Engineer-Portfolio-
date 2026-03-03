import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-8 bg-lightbg dark:bg-darkbg">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase tracking-widest text-sm text-primary font-medium">
            Cloud Engineer
          </p>

          <h1 className="text-6xl font-bold mt-4 leading-tight">
            Amruth Swamy C P
          </h1>

          <h2 className="text-2xl text-gray-600 dark:text-gray-400 mt-4">
            DevOps Automation Specialist
          </h2>

          <p className="mt-8 text-lg text-gray-600 dark:text-gray-400 max-w-xl">
            Designing scalable AWS infrastructure and automating
            secure CI/CD pipelines to deliver reliable cloud-native systems.
          </p>

          {/* Status */}
          <div className="mt-8 space-y-3">
            {[
              "AWS Infrastructure: Operational",
              "CI/CD Pipelines: Active",
              "Monitoring & Logging: Enabled",
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-6 mt-10">
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 bg-primary text-white rounded-xl shadow-sm hover:bg-accent transition"
            >
              Download Resume
            </a>

            <a
              href="/case-studies"
              className="px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-xl hover:border-primary transition"
            >
              View Case Studies
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src="/profile.jpg"
            alt="Amruth Swamy"
            className="w-80 h-80 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

      </div>
    </section>
  );
}