const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-y-4">
          <div className="text-sm opacity-80">
            &copy; {currentYear} OweFlow. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
