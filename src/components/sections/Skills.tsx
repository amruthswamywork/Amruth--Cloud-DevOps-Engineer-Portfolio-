import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Cloud",
    skills: ["AWS (EC2, VPC, IAM, S3, ALB)", "Auto Scaling", "CloudWatch"],
  },
  {
    title: "DevOps",
    skills: ["Jenkins", "GitHub Actions", "CI/CD Pipelines"],
  },
  {
    title: "Containers",
    skills: ["Docker", "Kubernetes"],
  },
  {
    title: "Infrastructure as Code",
    skills: ["Terraform"],
  },
  {
    title: "Scripting",
    skills: ["Python", "Shell Scripting"],
  },
  {
    title: "Operating Systems",
    skills: ["Linux (Ubuntu, CentOS)"],
  },
];

export default function Skills() {
  return (
    <section className="py-28 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-20">
          <p className="uppercase text-sm tracking-widest text-primary">
            Technical Skills
          </p>
          <h2 className="text-4xl font-bold mt-4">
            Core Competencies
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-4">
                {group.title}
              </h3>

              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                {group.skills.map((skill) => (
                  <li key={skill}>• {skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}