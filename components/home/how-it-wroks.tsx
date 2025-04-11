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
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            How OweFlow Buddy <span className="text-purple-600">Works</span>
          </h2>
          <p className="text-lg text-gray-600">
            A simple process designed to make tracking personal lending and
            borrowing effortless.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-50 text-xl font-bold text-purple-600">
                {step.number}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="absolute top-6 left-[calc(100%_-_16px)] hidden h-0.5 w-[calc(100%_-_40px)] bg-purple-100 lg:block"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
