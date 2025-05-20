import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sapnil Sultana Bizle",
      role: "Founder & CEO",
      description: "Oversees day-to-day operations, partner coordination, and community engagement at MORE TECH BD.",
      image: "https://cdn.hack.ngo/slackcdn/4700f111afd9db6c10f11805015336d8.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/sapnil-sultana",
        twitter: "https://twitter.com/sapnilsultana",
        email: "sapnil@moretechbd.com"
      }
    },
    {
      name: "Khan Prince Yeasir Arafat",
      role: "Co-Founder & Chief Technology Officer",
      description: "4-time National Robotics Champion and an International Robotics Champion, with 1.5 years of experience as a Technical Specialist at the Japan-Bangladesh Robotics and Advanced Technology Research Centre (JBRATRC).",
      image: "https://cdn.hack.ngo/slackcdn/14f3efe73e573be9c3cbfb984f0f2481.jpg",
      socials: {
        linkedin: "https://linkedin.com/in/khan-prince",
        twitter: "https://twitter.com/khanprince",
        email: "prince@moretechbd.com"
      }
    },
    {
      name: "Chandan Kumar Mondal",
      role: "Lead Research Advisor",
      description: "A distinguished academic and senior researcher at Khulna University, Mr. Mondal brings over 15 years of expertise in robotics, embedded intelligence, and adaptive systems.",
      image: "https://cdn.hack.ngo/slackcdn/66e360c0620a4f562a7cbd73156c5ca5.png",
      socials: {
        linkedin: "https://linkedin.com/in/chandan-mondal",
        email: "chandan@moretechbd.com"
      }
    },
    {
      name: "Dr. Md. Nahid Haider",
      role: "Medical Advisor",
      description: "Currently pursuing his MBBS at Satkhira Medical College, Dr. Nahid offers a unique clinical perspective that strengthens the medical relevance of our innovations.",
      image: "https://cdn.hack.ngo/slackcdn/f293df881b0f552303721853f0a199f3.png",
      socials: {
        linkedin: "https://linkedin.com/in/dr-nahid",
        email: "nahid@moretechbd.com"
      }
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            The passionate innovators behind MORE TECH BD's mission to revolutionize mobility solutions.
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
                </div>

                <div className="md:w-3/5 p-6 relative">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-6">
                    {member.description}
                  </p>

                  <div className="flex space-x-4">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.socials.email && (
                      <a
                        href={`mailto:${member.socials.email}`}
                        className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;