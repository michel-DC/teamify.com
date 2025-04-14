import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    company: "TechCorp",
    testimonial:
      "This product has completely transformed the way we work. The efficiency and ease of use are unmatched!",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sophia Lee",
    designation: "Data Analyst",
    company: "InsightTech",
    testimonial:
      "This tool has saved me hours of work! The analytics and reporting features are incredibly powerful.",
    avatar: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "UX Designer",
    company: "DesignPro",
    testimonial:
      "An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry. " +
      "The intuitive interface makes it easy to onboard new team members, and the automation features save us countless hours every week. ",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "Marketing Specialist",
    company: "BrandBoost",
    testimonial:
      "I've seen a significant improvement in our team's productivity since we started using this service.",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Daniel Martinez",
    designation: "Full-Stack Developer",
    company: "CodeCrafters",
    testimonial:
      "The best investment we've made! The support team is also super responsive and helpful.",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    id: 6,
    name: "Jane Smith",
    designation: "Product Manager",
    company: "InnovateX",
    testimonial:
      "The user experience is top-notch! The interface is clean, intuitive, and easy to navigate.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
];

const Testimonial02 = () => (
  <div className="flex justify-center items-center px-6 py-12 min-h-screen">
    <div>
      <div className="gap-8 mx-auto max-w-screen-xl columns-1 md:columns-2 lg:columns-3">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="mb-8 rounded-xl p-6 break-inside-avoid shadow-[0px_0px_16px_0px_rgba(0,_0,_0,_0.1)] bg-gray-900"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-4 items-center">
                <Avatar>
                  <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold text-gray-200">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-400">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" target="_blank">
                  <TwitterLogo className="w-4 h-4 text-gray-200" />
                </Link>
              </Button>
            </div>
            <p className="mt-5 text-[17px] text-gray-400">
              {testimonial.testimonial}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default Testimonial02;
