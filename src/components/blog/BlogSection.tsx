import React from "react";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Improve your customer retention",
    href: "#",
    description:
      "Learn strategies to keep your customers engaged and loyal to your brand. Discover the latest trends in customer relationship management.",
    date: "Apr 5, 2020",
    datetime: "2020-04-05",
    category: { title: "Business", href: "#" },
    author: {
      name: "Emma Johnson",
      role: "Customer Success Manager",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "The future of remote work",
    href: "#",
    description:
      "Explore how remote work is shaping the future of businesses and what tools you need to stay productive in a distributed team environment.",
    date: "May 12, 2020",
    datetime: "2020-05-12",
    category: { title: "Technology", href: "#" },
    author: {
      name: "David Smith",
      role: "Product Manager",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 4,
    title: "Mastering time management",
    href: "#",
    description:
      "Effective time management techniques to boost your productivity and achieve your goals faster. Learn how to prioritize and focus on what matters most.",
    date: "Jun 20, 2020",
    datetime: "2020-06-20",
    category: { title: "Productivity", href: "#" },
    author: {
      name: "Sarah Lee",
      role: "Productivity Coach",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 5,
    title: "Building a strong company culture",
    href: "#",
    description:
      "Discover the key elements of creating a positive and productive company culture that attracts and retains top talent.",
    date: "Jul 8, 2020",
    datetime: "2020-07-08",
    category: { title: "Leadership", href: "#" },
    author: {
      name: "James Wilson",
      role: "HR Director",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 6,
    title: "Effective team communication strategies",
    href: "#",
    description:
      "Learn how to improve communication within your team to enhance collaboration and productivity. Discover tools and techniques for better team dynamics.",
    date: "Aug 15, 2020",
    datetime: "2020-08-15",
    category: { title: "Teamwork", href: "#" },
    author: {
      name: "Laura Brown",
      role: "Communication Specialist",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 7,
    title: "Innovation in the digital age",
    href: "#",
    description:
      "Explore how digital transformation is driving innovation across industries and what it means for the future of business.",
    date: "Sep 22, 2020",
    datetime: "2020-09-22",
    category: { title: "Innovation", href: "#" },
    author: {
      name: "Robert Taylor",
      role: "Innovation Consultant",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 8,
    title: "Innovation in the digital age",
    href: "#",
    description:
      "Explore how digital transformation is driving innovation across industries and what it means for the future of business.",
    date: "Sep 22, 2020",
    datetime: "2020-09-22",
    category: { title: "Innovation", href: "#" },
    author: {
      name: "Robert Taylor",
      role: "Innovation Consultant",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 9,
    title: "Innovation in the digital age",
    href: "#",
    description:
      "Explore how digital transformation is driving innovation across industries and what it means for the future of business.",
    date: "Sep 22, 2020",
    datetime: "2020-09-22",
    category: { title: "Innovation", href: "#" },
    author: {
      name: "Robert Taylor",
      role: "Innovation Consultant",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function BlogSection() {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center text-gray-200 bg-clip-text mb-12 mt-24 md:mb-24 md:mt-42">
        Découvrez notre
        <span className="text-purple-500"> Blog</span>
      </h1>

      <div className="text-white flex flex-col lg:flex-row justify-center items-center gap-12">
        <div className="w-full max-w-7xl px-6 py-8 bg-gray-800/30 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between p-6 bg-gray-900/50 rounded-lg hover:bg-gray-900/70 transition-colors"
              >
                <div className="flex items-center gap-x-4 text-sm">
                  <time dateTime={post.datetime} className="text-gray-400">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-purple-500/10 px-3 py-1.5 font-medium text-purple-400 hover:bg-purple-500/20"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative mt-4">
                  <h3 className="text-lg font-semibold text-gray-200 group-hover:text-purple-300 transition-colors">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm text-gray-400">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-6 flex items-center gap-x-4">
                  <img
                    alt=""
                    src={post.author.imageUrl}
                    className="size-10 rounded-full bg-gray-800"
                  />
                  <div className="text-sm">
                    <p className="font-semibold text-gray-200">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-400">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
