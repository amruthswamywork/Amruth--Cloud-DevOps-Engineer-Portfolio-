import PageWrapper from "../components/layout/PageWrapper";
import CICDFlow from "../components/sections/CICDFlow";
import Architecture from "../components/sections/Architecture";
import GithubStats from "../components/sections/GithubStats";
import Skills from "../components/sections/Skills";
import TerraformSection from "../components/sections/TerraformSection";
import Education from "../components/sections/Education";


export default function Home() {
  return (
    <PageWrapper>
      <section className="min-h-screen flex items-center px-8 py">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>
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

            <div className="flex gap-6 mt-10">
              <a
                href="public\Amruth_swamy_DevOps-Cloud_resume.pdf"
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
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80">
                <img
                    src="public\profile.png"
                    alt="Amruth Swamy c p"
                    className="w-full h-full object-cover rounded-2x2 shadow-2x2"
                />
                <div className="absolute inset-0 rounded-2x1 ring-2 ring-primary/40" />
            </div>
          </div>

        </div>
      </section>
      <CICDFlow />
      <Architecture />
      <Skills />
        <Education />
      <TerraformSection />
      <GithubStats />
    </PageWrapper>
  );
}