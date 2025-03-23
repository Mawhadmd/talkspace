import ContactForm from "../(Components)/ContactForm";

const SupportPage: React.FC = () => {
  return (
    <div className="flex mx-auto flex-col mt-32">
      <h1 className="mb-8 text-mainTextColor text-6xl font-semibold">
        Support Page
      </h1>
      <section className="mb-10">
        <h2 className="text-secTextColor text-4xl font-medium mb-4">
          Frequently Asked Questions
        </h2>
        <ul className="mx-4 list-disc pl-4 text-xl text-secTextColor">
          <li>How do I reset my password?</li>
          <p className="pl-6">
            Go to the login page, click "Forgot Password", and follow the
            instructions.
          </p>

          <li>How do I contact support?</li>
          <p className="pl-6">
            You can reach out to us via the "Contact Us" section below.
          </p>

          <li>What should I do if my video call isn't working?</li>
          <p className="pl-6">
            Ensure your device camera and microphone are enabled and
            functioning.
          </p>
        </ul>
      </section>
      <ContactForm />
    </div>
  );
};

export default SupportPage;
