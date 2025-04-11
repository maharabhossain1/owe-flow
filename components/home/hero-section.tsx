import { Link } from '@/i18n/navigation';

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            Track money <span className="text-purple-600">lent & borrowed</span>{' '}
            with ease
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-600">
            Maintain healthy financial relationships by tracking who owes what,
            setting reminders, and eliminating awkward money conversations.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="w-full rounded-full bg-purple-600 px-8 py-3 text-base font-medium text-white hover:bg-purple-700 sm:w-auto"
            >
              Get Started for Free
            </Link>
            <Link
              href="#how-it-works"
              className="w-full rounded-full bg-gray-100 px-8 py-3 text-base font-medium text-gray-700 hover:bg-gray-200 sm:w-auto"
            >
              See How It Works
            </Link>
          </div>

          <hr className="my-8 border-gray-200" />

          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-gray-600">
              © {new Date().getFullYear()} OweFlow Buddy. All rights reserved.
            </p>
            <div className="mt-4 flex gap-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-purple-600">
                Privacy
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600">
                Terms
              </Link>
              <Link href="#" className="text-gray-600 hover:text-purple-600">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="container mx-auto mt-16 px-4">
        <div className="relative h-[400px] overflow-hidden rounded-xl shadow-2xl md:h-[500px] lg:h-[600px]">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-gray-100 to-white">
            <div className="w-full max-w-4xl rounded-xl border border-gray-200 bg-white p-4 shadow-lg">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900">
                  Your Lending Dashboard
                </h2>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800">
                    Total Lent: $1,250
                  </span>
                  <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-800">
                    Total Borrowed: $350
                  </span>
                </div>
              </div>

              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-purple-100 bg-purple-50 p-4">
                  <h3 className="mb-2 text-sm font-medium text-purple-900">
                    Money Lent
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between rounded-md bg-white p-2">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          James Smith
                        </p>
                        <p className="text-xs text-gray-500">
                          Apr 5, 2025 • Dinner
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        $45.00
                      </span>
                    </li>
                    <li className="flex items-center justify-between rounded-md bg-white p-2">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Sarah Johnson
                        </p>
                        <p className="text-xs text-gray-500">
                          Mar 28, 2025 • Concert tickets
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        $120.00
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-amber-100 bg-amber-50 p-4">
                  <h3 className="mb-2 text-sm font-medium text-amber-900">
                    Money Borrowed
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center justify-between rounded-md bg-white p-2">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Michael Brown
                        </p>
                        <p className="text-xs text-gray-500">
                          Apr 2, 2025 • Groceries
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        $35.50
                      </span>
                    </li>
                    <li className="flex items-center justify-between rounded-md bg-white p-2">
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          Lisa Garcia
                        </p>
                        <p className="text-xs text-gray-500">
                          Mar 15, 2025 • Utility bill
                        </p>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">
                        $78.25
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                <h3 className="mb-2 text-sm font-medium text-gray-700">
                  Upcoming Reminders
                </h3>
                <div className="flex items-center justify-between rounded-md bg-white p-2">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <span className="text-xs font-medium text-purple-600">
                        JS
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        James Smith
                      </p>
                      <p className="text-xs text-gray-500">Due in 3 days</p>
                    </div>
                  </div>
                  <button className="text-xs font-medium text-purple-600 hover:text-purple-700">
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

export default HeroSection;
