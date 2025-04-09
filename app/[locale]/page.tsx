// app/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';

import Logo from '@/public/logo.svg';

export const metadata: Metadata = {
  title: 'OweFlow Buddy | Track Personal Lending & Borrowing',
  description:
    'Manage money lent to friends and family with ease. Track borrowing, set repayment reminders, and maintain healthy financial relationships with our intuitive personal lending tracker.',
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}

// Navigation component
const Navbar = () => {
  return (
    <nav className="container mx-auto flex items-center justify-between py-4">
      <div className="flex items-center gap-2">
        <Logo className="h-8 w-8" />
        <span className="text-xl font-bold text-slate-900">OweFlow</span>
      </div>
      <div className="flex items-center gap-8">
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            How It Works
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Testimonials
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-slate-600 hover:text-slate-900"
          >
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

// Hero section
const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-slate-900 md:text-5xl lg:text-6xl">
            Track money <span className="text-blue-600">lent & borrowed</span>{' '}
            with ease
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-slate-600">
            Maintain healthy financial relationships by tracking who owes what,
            setting reminders, and eliminating awkward money conversations.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="w-full rounded-full bg-blue-600 px-8 py-3 text-base font-medium text-white hover:bg-blue-700 sm:w-auto"
            >
              Get Started for Free
            </Link>
            <Link
              href="#how-it-works"
              className="w-full rounded-full bg-slate-100 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-200 sm:w-auto"
            >
              See How It Works
            </Link>
          </div>

          <hr className="my-8 border-slate-800" />

          <div className="flex flex-col items-center justify-between md:flex-row">
            <p>
              © {new Date().getFullYear()} OweFlow Buddy. All rights reserved.
            </p>
            <div className="mt-4 flex gap-4 md:mt-0">
              <Link href="#" className="hover:text-white">
                Privacy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms
              </Link>
              <Link href="#" className="hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="container mx-auto mt-16 px-4">
        <div className="relative h-[400px] overflow-hidden rounded-xl shadow-2xl md:h-[500px] lg:h-[600px]">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-slate-100 to-white">
            <div className="w-full max-w-4xl rounded-xl border border-slate-200 bg-white p-4 shadow-lg">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">
                  Your Lending Dashboard
                </h2>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                    Total Lent: $1,250
                  </span>
                  <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-800">
                    Total Borrowed: $350
                  </span>
                </div>
              </div>

              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-blue-100 bg-blue-50 p-4">
                  <h3 className="mb-2 text-sm font-medium text-blue-900">
                    Money Lent
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between rounded-md bg-white p-2">
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          James Smith
                        </p>
                        <p className="text-xs text-slate-500">
                          Apr 5, 2025 • Dinner
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-slate-900">
                        $45.00
                      </span>
                    </li>
                    <li className="flex items-center justify-between rounded-md bg-white p-2">
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          Sarah Johnson
                        </p>
                        <p className="text-xs text-slate-500">
                          Mar 28, 2025 • Concert tickets
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-slate-900">
                        $120.00
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-orange-100 bg-orange-50 p-4">
                  <h3 className="mb-2 text-sm font-medium text-orange-900">
                    Money Borrowed
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between rounded-md bg-white p-2">
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          Michael Brown
                        </p>
                        <p className="text-xs text-slate-500">
                          Apr 2, 2025 • Groceries
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-slate-900">
                        $35.50
                      </span>
                    </li>
                    <li className="flex items-center justify-between rounded-md bg-white p-2">
                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          Lisa Garcia
                        </p>
                        <p className="text-xs text-slate-500">
                          Mar 15, 2025 • Utility bill
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-slate-900">
                        $78.25
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                <h3 className="mb-2 text-sm font-medium text-slate-700">
                  Upcoming Reminders
                </h3>
                <div className="flex items-center justify-between rounded-md bg-white p-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <span className="text-xs font-medium text-blue-600">
                        JS
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">
                        James Smith
                      </p>
                      <p className="text-xs text-slate-500">Due in 3 days</p>
                    </div>
                  </div>
                  <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
                    Send Reminder
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Features section
const Features = () => {
  const features = [
    {
      title: 'Track Every Transaction',
      description:
        'Record who you lent money to or borrowed from, set repayment dates, and keep detailed transaction histories.',
      icon: '💸',
    },
    {
      title: 'Smart Reminders',
      description:
        'Receive notifications for upcoming due dates and send gentle, automated reminders to borrowers.',
      icon: '⏰',
    },
    {
      title: 'Relationship Protection',
      description:
        'Maintain healthy relationships with pre-written message templates and neutral third-party notifications.',
      icon: '🤝',
    },
    {
      title: 'Dashboard Insights',
      description:
        'Get a clear overview of your lending patterns, total amounts, and repayment statistics.',
      icon: '📊',
    },
    {
      title: 'Flexible Repayments',
      description:
        'Support installment-based repayments, partial payments, and track non-monetary exchanges.',
      icon: '🔄',
    },
    {
      title: 'Secure & Private',
      description:
        'Your financial data is encrypted and protected, keeping sensitive information confidential.',
      icon: '🔒',
    },
  ];

  return (
    <section id="features" className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Features Built for{' '}
            <span className="text-blue-600">Real Relationships</span>
          </h2>
          <p className="text-lg text-slate-600">
            OweFlow Buddy understands that lending between friends and family
            isn't just about money—it's about trust and relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                {feature.title}
              </h3>
              <p className="text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// How it works section
const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Create an account',
      description:
        'Sign up with your email or social accounts to get started in seconds.',
    },
    {
      number: '02',
      title: 'Record transactions',
      description:
        'Add details of money lent or borrowed, including amounts, dates, and notes.',
    },
    {
      number: '03',
      title: 'Set reminders',
      description:
        'Choose when to remind yourself or others about upcoming repayments.',
    },
    {
      number: '04',
      title: 'Track repayments',
      description:
        'Mark transactions as paid and maintain a complete history of all exchanges.',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            How OweFlow Buddy <span className="text-blue-600">Works</span>
          </h2>
          <p className="text-lg text-slate-600">
            A simple process designed to make tracking personal lending and
            borrowing effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-xl font-bold text-blue-600">
                {step.number}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="text-slate-600">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="absolute top-6 left-[calc(100%_-_16px)] hidden h-0.5 w-[calc(100%_-_40px)] bg-blue-100 lg:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials section
const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'OweFlow Buddy transformed how I handle lending to friends. No more awkward conversations and I always know who owes me what.',
      author: 'Jessica T.',
      role: 'Small Business Owner',
    },
    {
      quote:
        'I used to forget when I borrowed money and when it was due. This app helps me stay accountable and maintain trust with my circle.',
      author: 'Marcus L.',
      role: 'Freelance Designer',
    },
    {
      quote:
        "The relationship protection features are genius. The app sends reminders so I don't have to directly ask friends for money back.",
      author: 'Olivia P.',
      role: 'Marketing Manager',
    },
  ];

  return (
    <section id="testimonials" className="bg-slate-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            What Our <span className="text-blue-600">Users Say</span>
          </h2>
          <p className="text-lg text-slate-600">
            OweFlow Buddy is helping thousands maintain healthy financial
            relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-4 text-4xl text-blue-200">"</div>
              <p className="mb-6 text-slate-700">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-slate-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing section
const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for occasional lending and basic tracking needs.',
      features: [
        'Track up to 10 active loans',
        'Basic reminders',
        'Transaction history',
        'Export data to CSV',
        'Email support',
      ],
      buttonText: 'Get Started',
      buttonStyle: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    },
    {
      name: 'Premium',
      price: '$5',
      period: 'per month',
      description: 'Ideal for frequent lenders who need advanced features.',
      features: [
        'Unlimited active loans',
        'Advanced reminders system',
        'Relationship protection features',
        'Detailed reports and insights',
        'Priority support',
        'Custom repayment schedules',
        'SMS notifications',
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'bg-blue-600 text-white hover:bg-blue-700',
      highlight: true,
    },
    {
      name: 'Family',
      price: '$10',
      period: 'per month',
      description: 'For families that want to manage group finances together.',
      features: [
        'Everything in Premium',
        'Up to 5 family accounts',
        'Shared transaction visibility',
        'Family dashboard',
        'Group expense tracking',
        'Family lending policies',
        'Advanced reports',
      ],
      buttonText: 'Start Free Trial',
      buttonStyle: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
            Simple, <span className="text-blue-600">Transparent Pricing</span>
          </h2>
          <p className="text-lg text-slate-600">
            Choose the plan that fits your lending habits and financial
            relationships.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border bg-white shadow-sm ${plan.highlight ? 'border-blue-200 ring-1 ring-blue-600' : 'border-slate-200'} flex h-full flex-col p-6`}
            >
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  {plan.name}
                </h3>
                <div className="mb-2 flex items-end gap-1">
                  <span className="text-3xl font-bold text-slate-900">
                    {plan.price}
                  </span>
                  <span className="mb-1 text-slate-600">/{plan.period}</span>
                </div>
                <p className="text-slate-600">{plan.description}</p>
              </div>

              <ul className="mb-8 flex-grow space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className={`rounded-full px-6 py-3 text-center font-medium ${plan.buttonStyle} w-full`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA section
const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 text-white md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Start tracking your personal lending today
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl opacity-90">
            Join thousands of users who have improved their financial
            relationships with OweFlow Buddy.
          </p>
          <Link
            href="/signup"
            className="rounded-full bg-white px-8 py-3 text-base font-medium text-blue-600 hover:bg-blue-50"
          >
            Get Started for Free
          </Link>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
    <footer className="bg-slate-900 py-12 text-slate-400">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                <span className="text-xl font-bold text-white">O</span>
              </div>
              <span className="text-xl font-bold text-white">
                OweFlow Buddy
              </span>
            </div>
            <p className="mb-4">
              The smart way to track personal lending and maintain healthy
              financial relationships.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-white">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-white">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
