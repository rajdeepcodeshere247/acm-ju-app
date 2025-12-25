"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import SocialMediaHandleButton, {
  SocialMedia,
  SocialMediaType,
} from "./SocialMedia";

export default function Member({ member }: { member: TeamMember }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 180, damping: 18 });
  const mouseY = useSpring(y, { stiffness: 180, damping: 18 });

  // 🔥 Increased tilt
  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-14deg", "14deg"]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <div className="relative group [perspective:1200px]">
      {/* 🌈 Radiant Border */}
      <div className="absolute -inset-[1.5px] rounded-2xl opacity-0 
                      group-hover:opacity-100 transition duration-500">
        <div className="absolute inset-0 rounded-2xl 
                        bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 
                        blur-md opacity-70" />
      </div>

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 140, damping: 16 }}
        className="relative z-10 flex flex-col items-center rounded-2xl 
                   bg-white/70 backdrop-blur-xl p-7
                   border border-white/10
                   shadow-xl hover:shadow-2xl
                   transition-shadow duration-500"
      >
        {/* Soft inner glow */}
        <div className="absolute inset-0 rounded-2xl 
                        bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 
                        opacity-0 group-hover:opacity-100 transition duration-500" />

        {/* Avatar */}
        <motion.div
  whileHover={{ scale: 1.06 }}
  transition={{ type: "spring", stiffness: 220, damping: 18 }}
  style={{
    transformStyle: "preserve-3d",
    transform: "translateZ(70px)",
  }}
  className="relative"
>
    

  <img
    src={member.imageURL}
    alt={`${member.firstName} ${member.lastName}`}
    className="w-44 h-44 rounded-full object-cover 
               ring-4 ring-white shadow-xl"
  />
</motion.div>


        {/* Text */}
        <div
          className="mt-6 text-center space-y-1"
          style={{ transform: "translateZ(35px)" }}
        >
          <p className="text-xl font-semibold tracking-tight text-gray-900">
            {member.lastName}, {member.firstName}
          </p>

          <p className="text-sm uppercase tracking-wide font-medium text-indigo-600">
            {member.post}
          </p>

          {member.bio && (
            <p className="mt-3 text-sm text-gray-600 max-w-xs leading-relaxed">
              {member.bio}
            </p>
          )}
        </div>

        {/* Socials */}
        <div
          className="mt-5 flex gap-3"
          style={{ transform: "translateZ(60px)" }}
        >
          {member.linkedinURL && (
            <SocialMediaHandleButton
              url={member.linkedinURL}
              socialMedia={new SocialMedia(SocialMediaType.LINKEDIN)}
            />
          )}
          {member.githubURL && (
            <SocialMediaHandleButton
              url={member.githubURL}
              socialMedia={new SocialMedia(SocialMediaType.GITHUB)}
            />
          )}
          {member.leetcodeURL && (
            <SocialMediaHandleButton
              url={member.leetcodeURL}
              socialMedia={new SocialMedia(SocialMediaType.LEETCODE)}
            />
          )}
          {member.twitterURL && (
            <SocialMediaHandleButton
              url={member.twitterURL}
              socialMedia={new SocialMedia(SocialMediaType.TWITTER)}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
}
