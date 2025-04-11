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
    <section id="features" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Features Built for{' '}
            <span className="text-purple-600">Real Relationships</span>
          </h2>
          <p className="text-lg text-gray-600">
            OweFlow Buddy understands that lending between friends and family
            isn't just about money—it's about trust and relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 text-3xl">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
