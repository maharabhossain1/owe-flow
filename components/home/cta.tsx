import { Link } from '@/i18n/navigation';

const CTA = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 to-purple-800 py-16 text-white md:py-24">
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
            className="rounded-full bg-white px-8 py-3 text-base font-medium text-purple-600 hover:bg-purple-50"
          >
            Get Started for Free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
