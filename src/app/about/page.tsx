import AnimatedSection from "../../components/AnimatedSection";

export default function About() {
  return (
    <div className="py-24 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold mb-10 text-gray-900 dark:text-white">About Us</h1>
          <div className="mb-12 rounded-[2rem] overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
            <img src="/images/about.jpg" alt="About hyperscaler Owl" className="w-full object-cover aspect-[21/9]" />
          </div>
          <p className="text-2xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed font-light">
            Observability for hyperscale infrastructure.
          </p>
          <div className="prose prose-lg dark:prose-invert text-gray-600 dark:text-gray-400 space-y-6">
            <p className="text-lg">
              hyperscaler Owl watches your infrastructure so you can sleep. We collect metrics, traces, and logs at planetary scale, then apply anomaly detection to surface issues before they become incidents.
            </p>
            <p className="text-lg">
              Our open-source collectors integrate with Kubernetes, Terraform, and AWS APIs out of the box. Join the SRE collective and share runbooks that make 3 AM pages a thing of the past.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
