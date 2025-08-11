import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TeamProps } from './TeamTypes';
import { teamMembers } from './TeamData';

const Team: React.FC<TeamProps> = () => {
  return (
    <section id="team" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="text-[#e6002e]">Team</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience, creative vision, and technical expertise to deliver exceptional results for every project.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-gray-900/30 to-black/30 border-gray-800 hover:border-[#e6002e]/50 hover:shadow-[0_0_30px_rgba(230,0,46,0.2)] transition-all duration-300 group cursor-pointer"
            >
              <CardHeader className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gray-700 group-hover:border-[#e6002e]/50 transition-all">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <CardTitle className="text-white text-xl">{member.name}</CardTitle>
                <CardDescription className="text-[#e6002e] font-semibold">
                  {member.position}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                <div>
                  <div className="text-sm font-semibold text-white mb-2">Expertise:</div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs text-gray-400 border-gray-600"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
