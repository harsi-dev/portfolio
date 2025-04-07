const SkillSet = () => {
  return (
    <section className="mt-16 w-full max-w-5xl">
      <h2 className="mb-4 text-center text-2xl font-semibold">
        What Can I Help You With ?
      </h2>
      <div className="grid grid-cols-1 gap-8 text-black md:grid-cols-2 md:pl-30">
        <div>
          <h3 className="mb-2 text-xl font-semibold">🌐 Web Apps</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Full-stack apps using Next.js, React, and Prisma</li>
            <li>• Modern UI with Tailwind CSS and ShadCN</li>
            <li>• Authentication with NextAuth, Firebase, or custom flows</li>
            <li>• Payments with Stripe, Razorpay</li>
            <li>• Admin panels, dashboards, and analytics</li>
            <li>• SEO-friendly, fast-loading pages (App Router expertise)</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">
            📱 Mobile Apps (Flutter)
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Cross-platform apps for iOS & Android</li>
            <li>• Clean architecture with maintainable code</li>
            <li>• Firebase Auth, Firestore, or Supabase backend</li>
            <li>• Razorpay, Stripe, and native integrations</li>
            <li>• Push notifications and chat functionality</li>
            <li>• App Store & Play Store ready builds</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">⚙️ Backend & APIs</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• REST/GraphQL APIs with Node.js or Golang</li>
            <li>• Raw SQL or Prisma for database access</li>
            <li>• Webhooks, background jobs, and cron tasks</li>
            <li>• Scalable microservices architecture</li>
            <li>• Auth, rate limiting, error handling</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold">🚀 DevOps & Infra</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Dockerized apps ready for any environment</li>
            <li>• Kubernetes deployments (esp. DigitalOcean)</li>
            <li>• CI/CD pipelines with GitHub Actions</li>
            <li>• Monitoring & alerting (Slack, Telegram, Email)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillSet;
