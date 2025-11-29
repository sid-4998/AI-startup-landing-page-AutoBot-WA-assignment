import { Check } from "lucide-react"
import { Button } from "@/components/Button"

const pricingPlans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for getting started",
    features: ["3 AI-generated pages", "Basic SEO analysis", "Community support", "1 project"],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Starter",
    price: "$12",
    period: "per month",
    description: "For individuals & freelancers",
    features: ["15 AI-generated pages", "Standard SEO tools", "Email support", "3 projects", "Basic analytics"],
    cta: "Free Trial",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "per month",
    description: "For growing businesses",
    features: [
      "Unlimited AI pages",
      "Advanced SEO tools",
      "Priority support",
      "10 projects",
      "Custom integrations",
      "Analytics dashboard",
    ],
    cta: "Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "per month",
    description: "For large-scale operations",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Custom AI training",
      "Unlimited projects",
      "SLA guarantee",
      "White-label options",
    ],
    cta: "Contact us",
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-[#0a0a1a]">
      {/* Background cosmic effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Central glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[500px] lg:w-[700px] h-[400px] sm:h-[500px] lg:h-[700px] bg-purple-600/20 rounded-full blur-[100px] lg:blur-[140px]" />

        {/* Orbital rings - hidden on mobile */}
        <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] lg:w-[900px] h-[600px] lg:h-[900px] border border-purple-500/10 rounded-full" />
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] border border-purple-500/5 rounded-full" />
        <div className="hidden xl:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[1400px] border border-dashed border-purple-500/10 rounded-full" />

        {/* Scattered stars */}
        <div className="absolute top-[15%] left-[10%] w-1 h-1 bg-purple-300/60 rounded-full" />
        <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 bg-purple-400/40 rounded-full" />
        <div className="hidden sm:block absolute top-[60%] left-[5%] w-1 h-1 bg-white/50 rounded-full" />
        <div className="absolute top-[70%] right-[8%] w-1 h-1 bg-purple-300/50 rounded-full" />
        <div className="hidden md:block absolute bottom-[20%] left-[20%] w-2 h-2 bg-purple-400/30 rounded-full" />
        <div className="hidden sm:block absolute bottom-[30%] right-[25%] w-1 h-1 bg-white/40 rounded-full" />

        {/* Orbital dots */}
        <div className="hidden sm:block absolute top-[30%] left-[30%] w-2 h-2 bg-purple-400/40 rounded-full border border-purple-300/30" />
        <div className="hidden md:block absolute bottom-[25%] right-[20%] w-2 h-2 bg-purple-500/30 rounded-full border border-purple-400/20" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight text-balance">
            Simple, Transparent Pricing
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-purple-200/70 max-w-xl lg:max-w-2xl mx-auto text-pretty">
            Choose the perfect plan for your needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 max-w-[340px] sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${
                plan.popular
                  ? "bg-purple-900/30 border-2 border-purple-500/50 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                  : "bg-white/5 border border-purple-500/20 hover:border-purple-500/40"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-medium bg-purple-600 text-white rounded-full shadow-[0_0_20px_rgba(139,92,246,0.5)] whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-4 sm:mb-5">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-purple-200/60 text-xs sm:text-sm leading-relaxed">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-5 sm:mb-6">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-purple-200/60 ml-1 text-xs sm:text-sm">/{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <div
                      className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        plan.popular ? "bg-purple-500/30" : "bg-purple-500/20"
                      }`}
                    >
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-300" />
                    </div>
                    <span className="text-purple-100/80 text-xs sm:text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button>
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
