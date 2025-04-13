import {
  CreditCard,
  Bell,
  Users,
  BarChart3,
  RefreshCw,
  Lock,
} from 'lucide-react';
import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Track Loans Simply',
      description:
        "Record who has your money and when it's coming back without the complexity.",
      icon: CreditCard,
      color: '#3B82F6',
    },
    {
      title: 'Smart Reminders',
      description:
        'Get notified about upcoming payments and let the app handle those awkward follow-ups.',
      icon: Bell,
      color: '#8B5CF6',
    },
    {
      title: 'Protect Relationships',
      description:
        'Keep friendships intact with a system that puts people first, not just the money.',
      icon: Users,
      color: '#EC4899',
    },
    {
      title: 'Visual Insights',
      description:
        'See exactly where your money is going with clean, straightforward charts.',
      icon: BarChart3,
      color: '#F59E0B',
    },
    {
      title: 'Flexible Paybacks',
      description:
        'Handle installments, partial payments, and even track non-monetary exchanges.',
      icon: RefreshCw,
      color: '#10B981',
    },
    {
      title: 'Private & Secure',
      description:
        'Your lending data stays private. No one sees who owes you except you.',
      icon: Lock,
      color: '#6B7280',
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-kreon mb-4 text-4xl font-semibold text-gray-900 md:text-4xl">
            Preserve Trust,{' '}
            <em className=" relative z-0 inline-block">
              Eliminate Money Stress
              <svg
                viewBox="0 0 1213 73"
                aria-hidden="true"
                preserveAspectRatio="none"
                height="12"
                className="absolute -bottom-0.5 left-0 -z-1 h-3 w-full text-purple-400 sm:-bottom-1 md:-bottom-[6px]"
              >
                <g buffered-rendering="static">
                  <path
                    fill="url(#underline-gradient)"
                    d="M1213.19 35.377c2.37-13.011-22.95-10.753-31.04-14.087C1086.89 5.705 911.742 2.887 815.218 2.809c-78.003.231-155.966-1.833-233.961.481-57.545.429-114.885 6.164-172.419 7.383-121.164 5.39-242.94 10.751-362.507 32.199-12.356 3.286-25.614 4.255-37.332 9.401-29.507 22.983 27.103 20.15 39.468 17.234 357.956-47.703 362.767-46.261 636.452-50.97 121.033-2.508 241.892 6.658 428.341 19.243 4.74.404 8.98-4.032 8-8.788a942.105 942.105 0 0154.69 6.378c9.44 1.843 18.92 3.583 28.29 5.729 4.01.839 8.02-1.718 8.95-5.712v-.01z"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    id="underline-gradient"
                    gradientTransform="rotate(110)"
                  >
                    <stop offset="5%" stopColor="#CA7FF8"></stop>
                    <stop offset="95%" stopColor="#795BE9"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </em>
          </h2>
          <p className=" text-gray-600">
            OweFlow transforms awkward lending moments into clear, comfortable
            transactions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-100 bg-white p-6"
            >
              <div className="mb-4 flex items-center">
                <div
                  className="mr-3 flex h-10 w-10 items-center justify-center rounded-md"
                  style={{ backgroundColor: `${feature.color}10` }}
                >
                  <feature.icon
                    style={{ color: feature.color }}
                    className="h-5 w-5"
                  />
                </div>
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="ml-[52px] text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
