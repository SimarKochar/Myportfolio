import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Send } from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! I will get back to you soon.",
        action: (
          <button
            onClick={() => console.log("Closed")}
            className="text-primary font-medium hover:underline"
          >
            Close
          </button>
        ),
      });
       setIsSubmitting(false);
    }, 1500);

   
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className=" container max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">Contact Me</h2>
        <p className="text-center text-muted-foreground  mb-12 max-w-2xl mx-auto">
          Feel free to reach out to me via email or connect with me on LinkedIn.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="font-medium">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Mail className="h-6 w-6 text-primary"></Mail>
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:simark8640@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    simark8640@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Phone className="h-6 w-6 text-primary"></Phone>
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+919131241430"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 9131241430
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <MapPin className="h-6 w-6 text-primary"></MapPin>
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Jaipur, Rajasthan, India
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8 ">
              <h4 className="font-medium mb-4">Connect with me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="">
                  <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors"></Linkedin>
                </a>
                <a href="">
                  <Twitter className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors"></Twitter>
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6">Send a message</h3>

            <form className="space-y-6" action="">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-bg text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter Name..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-bg text-foreground focus:outline-hidden focus:ring-2 focus:ring-primary"
                  placeholder="Enter email..."
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-nedium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-bg focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I would like to know more about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex justify-center items-center gap-2"
                )}
              >
                <span className="text-sm font-medium">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <Send size={16}></Send>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
