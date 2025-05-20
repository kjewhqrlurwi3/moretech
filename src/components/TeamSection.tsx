import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useGLTF, Environment, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  position: [number, number, number];
  rotation: [number, number, number];
  socials: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const TeamMemberCard = ({ member, index }: { member: TeamMember; index: number }) => {
  return (
    <Float
      speed={1.5} 
      rotationIntensity={0.5} 
      floatIntensity={0.5}
      position={member.position}
      rotation={member.rotation}
    >
      <group>
        <mesh castShadow receiveShadow>
          <planeGeometry args={[2, 3]} />
          <meshStandardMaterial>
            <texture attach="map" url={member.image} />
          </meshStandardMaterial>
        </mesh>
        <Html position={[0, -1.7, 0.1]} transform occlude>
          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-4 rounded-lg shadow-xl w-64 text-center">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{member.name}</h3>
            <p className="text-purple-600 dark:text-purple-400 text-sm">{member.role}</p>
          </div>
        </Html>
      </group>
    </Float>
  );
};

const Scene = ({ teamMembers }: { teamMembers: TeamMember[] }) => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <Environment preset="city" />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} castShadow />
      
      {teamMembers.map((member, index) => (
        <TeamMemberCard key={index} member={member} index={index} />
      ))}
      
      <OrbitControls 
        enableZoom={false}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.5}
      />
    </>
  );
};

const TeamSection: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: "Sapnil Sultana Bizle",
      role: "Founder & CEO",
      description: "Oversees day-to-day operations, partner coordination, and community engagement at MORE TECH BD.",
      image: "https://cdn.hack.ngo/slackcdn/4700f111afd9db6c10f11805015336d8.jpg",
      position: [-3, 0, 0],
      rotation: [0, 0.2, 0],
      socials: {
        linkedin: "https://linkedin.com/in/sapnil-sultana",
        twitter: "https://twitter.com/sapnilsultana",
        email: "sapnil@moretechbd.com"
      }
    },
    {
      name: "Khan Prince Yeasir Arafat",
      role: "Co-Founder & Chief Technology Officer",
      description: "4-time National Robotics Champion and an International Robotics Champion.",
      image: "https://cdn.hack.ngo/slackcdn/14f3efe73e573be9c3cbfb984f0f2481.jpg",
      position: [-1, 0, 0],
      rotation: [0, 0.1, 0],
      socials: {
        linkedin: "https://linkedin.com/in/khan-prince",
        twitter: "https://twitter.com/khanprince",
        email: "prince@moretechbd.com"
      }
    },
    {
      name: "Chandan Kumar Mondal",
      role: "Lead Research Advisor",
      description: "Distinguished academic and senior researcher at Khulna University.",
      image: "https://cdn.hack.ngo/slackcdn/66e360c0620a4f562a7cbd73156c5ca5.png",
      position: [1, 0, 0],
      rotation: [0, -0.1, 0],
      socials: {
        linkedin: "https://linkedin.com/in/chandan-mondal",
        email: "chandan@moretechbd.com"
      }
    },
    {
      name: "Dr. Md. Nahid Haider",
      role: "Medical Advisor",
      description: "Currently pursuing MBBS at Satkhira Medical College.",
      image: "https://cdn.hack.ngo/slackcdn/f293df881b0f552303721853f0a199f3.png",
      position: [3, 0, 0],
      rotation: [0, -0.2, 0],
      socials: {
        linkedin: "https://linkedin.com/in/dr-nahid",
        email: "nahid@moretechbd.com"
      }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
            Meet Our Team
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            The passionate innovators behind MORE TECH BD's mission to revolutionize mobility solutions.
          </p>
        </motion.div>

        <div className="h-[600px] rounded-xl overflow-hidden">
          <Suspense fallback={<div>Loading...</div>}>
            <Canvas shadows>
              <Scene teamMembers={teamMembers} />
            </Canvas>
          </Suspense>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;