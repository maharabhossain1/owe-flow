'use client';

import { UserPlus, ClipboardList, Bell, CheckCircle } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const steps = [
    {
      title: 'Sign up in seconds',
      description:
        'Create your account instantly with email or social login. No credit card required.',
      icon: UserPlus,
    },
    {
      title: 'Record who owes what',
      description:
        'Capture every detail that matters—who, how much, when—and finally feel in control.',
      icon: ClipboardList,
    },
    {
      title: 'Set stress-free reminders',
      description:
        'Let OweFlow do the asking for you. Automatic notifications keep everyone on track.',
      icon: Bell,
    },
    {
      title: 'Watch debts disappear',
      description:
        'Experience the satisfaction of marking payments complete and seeing your balance grow.',
      icon: CheckCircle,
    },
  ];

  // Set up Intersection Observer to detect when component is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0.2, // When 20% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Animation logic - only starts when section is visible
  useEffect(() => {
    if (!isVisible) {
      // Don't start animations if not visible
      return;
    }

    // Reset to null when animation starts
    setActiveStep(null);
    let stepIndex = 0;
    let intervalId: NodeJS.Timeout;

    // Initial delay before starting the animation
    const initialDelay = setTimeout(() => {
      // Show the first step
      setActiveStep(0);

      // Create interval for cycling through steps
      intervalId = setInterval(() => {
        stepIndex = (stepIndex + 1) % steps.length;
        setActiveStep(stepIndex);
      }, 3000); // 3 seconds interval
    }, 100); // Short delay before starting

    // Clean up timers when component unmounts or becomes invisible
    return () => {
      clearTimeout(initialDelay);
      clearInterval(intervalId);
    };
  }, [isVisible, steps.length]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="bg-white py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-kreon mb-4 text-4xl font-semibold text-gray-900 md:text-4xl">
            Stop Wondering{' '}
            <em className=" relative z-0 inline-block">
              Who Owes You
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
            Four simple steps to transform chaotic lending into clear, organized
            transactions.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="relative mb-6">
                {/* Step badge with animation */}
                <div
                  className={`absolute -top-6 -left-6 transform rounded-full bg-yellow-300 px-3 py-0.5 text-xs font-semibold text-gray-800 shadow-sm transition-all duration-500 ${
                    activeStep === index
                      ? 'scale-100 -rotate-12 opacity-100'
                      : 'scale-60 rotate-0 opacity-0'
                  }`}
                >
                  STEP {index + 1}
                </div>
                <div className="mb-4 flex items-center gap-2 text-purple-600">
                  <step.icon className="h-6 w-6" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    {step.title}
                  </h3>
                </div>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
