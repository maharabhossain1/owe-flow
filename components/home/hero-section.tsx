import { ArrowRight, Sparkles } from 'lucide-react';

import { Link } from '@/i18n/navigation';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50 via-white to-blue-50 opacity-70" />

      {/* Decorative elements */}
      <div className="absolute top-20 -left-20 h-64 w-64 rounded-full bg-purple-200 opacity-20 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-blue-200 opacity-20 blur-3xl" />

      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-purple-100 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-sm">
            <Sparkles className="mr-2 h-4 w-4 text-purple-500" />
            <span className="text-sm font-medium text-gray-700">
              Stop awkward money conversations
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            Track money{' '}
            <span className="relative">
              <span className="relative z-10 text-purple-600">
                lent & borrowed
              </span>
              <span className="absolute -bottom-1 left-0 z-0 h-3 w-full bg-purple-200 opacity-50" />
            </span>{' '}
            with confidence
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
            Maintain{' '}
            <span className="relative inline-block">
              <span className="relative z-10">
                healthy financial relationships
              </span>
              <span className="absolute -bottom-1 left-0 z-0 h-2 w-full bg-blue-200 opacity-50" />
            </span>{' '}
            by tracking who owes what—eliminating tension and preserving
            friendships.
          </p>

          <div className="mx-auto mb-12 max-w-md">
            <Link
              href="/signup"
              className="group relative flex w-full items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-3.5 text-base font-medium text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-purple-300/30"
            >
              <span className="mr-2">Get Started for Free</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <p className="mt-3 text-sm text-gray-500">
              No credit card required • Free forever plan
            </p>
          </div>
        </div>

        {/* Hero image with modern UI */}
        <div className="mx-auto mt-8 max-w-5xl">
          <div className="relative rounded-2xl bg-white/40 p-6 shadow-xl ring-1 ring-gray-200 backdrop-blur-md">
            {/* Dashboard Preview */}
            <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
              <div className="mb-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    Your Lending Dashboard
                  </h2>
                  <p className="text-sm text-gray-500">
                    Manage all your personal loans in one place
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-800">
                    <span className="mr-1 h-2 w-2 rounded-full bg-green-500"></span>
                    Total Lent: $1,250
                  </span>
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1.5 text-xs font-medium text-amber-800">
                    <span className="mr-1 h-2 w-2 rounded-full bg-amber-500"></span>
                    Total Borrowed: $350
                  </span>
                </div>
              </div>

              <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="overflow-hidden rounded-xl border border-purple-100 bg-purple-50/50">
                  <div className="border-b border-purple-100 bg-purple-50 px-4 py-3">
                    <h3 className="font-medium text-purple-900">Money Lent</h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-3">
                      <li className="overflow-hidden rounded-lg border border-gray-100 bg-white p-3 shadow-sm transition-all hover:shadow-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              James Smith
                            </p>
                            <p className="text-xs text-gray-500">
                              Apr 5, 2025 • Dinner
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">
                            $45.00
                          </span>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Due in 2 days
                          </span>
                          <span className="text-xs font-medium text-purple-600">
                            Send reminder
                          </span>
                        </div>
                      </li>
                      <li className="overflow-hidden rounded-lg border border-gray-100 bg-white p-3 shadow-sm transition-all hover:shadow-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Sarah Johnson
                            </p>
                            <p className="text-xs text-gray-500">
                              Mar 28, 2025 • Concert tickets
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">
                            $120.00
                          </span>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Due next week
                          </span>
                          <span className="text-xs font-medium text-purple-600">
                            View details
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-amber-100 bg-amber-50/50">
                  <div className="border-b border-amber-100 bg-amber-50 px-4 py-3">
                    <h3 className="font-medium text-amber-900">
                      Money Borrowed
                    </h3>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-3">
                      <li className="overflow-hidden rounded-lg border border-gray-100 bg-white p-3 shadow-sm transition-all hover:shadow-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Michael Brown
                            </p>
                            <p className="text-xs text-gray-500">
                              Apr 2, 2025 • Groceries
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">
                            $35.50
                          </span>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Due tomorrow
                          </span>
                          <span className="text-xs font-medium text-amber-600">
                            Mark as paid
                          </span>
                        </div>
                      </li>
                      <li className="overflow-hidden rounded-lg border border-gray-100 bg-white p-3 shadow-sm transition-all hover:shadow-md">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-gray-900">
                              Lisa Garcia
                            </p>
                            <p className="text-xs text-gray-500">
                              Mar 15, 2025 • Utility bill
                            </p>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">
                            $78.25
                          </span>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-xs text-gray-500">
                            Due in 5 days
                          </span>
                          <span className="text-xs font-medium text-amber-600">
                            Set reminder
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Upcoming payment notification */}
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex flex-1 items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                      <span className="text-sm font-medium text-purple-600">
                        JS
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        Payment from James due soon
                      </p>
                      <p className="text-sm text-gray-500">
                        $45.00 due in 2 days
                      </p>
                    </div>
                  </div>
                  <button className="rounded-full bg-purple-600 px-4 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-purple-700">
                    Send Reminder
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Social proof */}
          <div className="mt-6 text-center">
            <p className="text-sm font-medium text-gray-500">
              Trusted by over 10,000 users worldwide
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-8">
              <div className="h-6 w-16 rounded-md bg-gray-200 opacity-60"></div>
              <div className="h-6 w-20 rounded-md bg-gray-300 opacity-60"></div>
              <div className="h-6 w-18 rounded-md bg-gray-200 opacity-60"></div>
              <div className="h-6 w-24 rounded-md bg-gray-300 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
