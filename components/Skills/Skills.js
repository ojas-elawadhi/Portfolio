/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { MENULINKS, SKILLS } from "../../constants";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./Skills.module.scss";

const SKILL_LABELS = {
  html: "HTML5",
  css: "CSS3",
  javascript: "JavaScript",
  typescript: "TypeScript",
  java: "Java",
  python: "Python",
  webpack: "Webpack",
  vite: "Vite",
  firebase: "Firebase",
  react: "React",
  redux: "Redux",
  nextjs: "Next.js",
  tailwindcss: "Tailwind CSS",
  styledcomponents: "styled-components",
  "chakra-ui": "Chakra UI",
  "tanstack-query": "TanStack Query",
  mysql: "MySQL",
  postgresql: "PostgreSQL",
  "react-native": "React Native",
  fastapi: "FastAPI",
  railway: "Railway",
};

const SKILL_ASSETS = {
  "react-native": "react",
};

const SkillItem = ({ skill, isActive, onToggle, onDismiss }) => {
  const label = SKILL_LABELS[skill] || skill;
  const tooltipId = `skill-tooltip-${skill}`;

  return (
    <span
      className={`${styles.skillItem} ${
        isActive ? styles.skillItemActive : ""
      }`}
      data-skill-item
    >
      <button
        type="button"
        className={styles.skillButton}
        aria-describedby={tooltipId}
        aria-label={`${label} skill`}
        onClick={onToggle}
        onBlur={onDismiss}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            onDismiss();
            event.currentTarget.blur();
          }
        }}
      >
        <Image
          className={styles.skillIcon}
          src={`/images/${SKILL_ASSETS[skill] || skill}.svg`}
          alt={label}
          width={50}
          height={50}
        />
      </button>
      <span id={tooltipId} className={styles.tooltip} role="tooltip">
        {label}
      </span>
    </span>
  );
};

const Skills = () => {
  const targetSection = useRef(null);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const revealTl = gsap.timeline({ defaults: { ease: Linear.easeNone } });
    revealTl.from(
      targetSection.current.querySelectorAll(".seq"),
      { opacity: 0, duration: 0.5, stagger: 0.5 },
      "<"
    );

    ScrollTrigger.create({
      trigger: targetSection.current.querySelector(".skills-wrapper"),
      start: "100px bottom",
      end: `center center`,
      animation: revealTl,
      scrub: 0,
    });
  }, [targetSection]);

  useEffect(() => {
    const dismissTooltip = (event) => {
      if (!event.target.closest("[data-skill-item]")) {
        setActiveSkill(null);
      }
    };

    document.addEventListener("pointerdown", dismissTooltip);

    return () => document.removeEventListener("pointerdown", dismissTooltip);
  }, []);

  const renderSkill = (skill) => (
    <SkillItem
      key={skill}
      skill={skill}
      isActive={activeSkill === skill}
      onToggle={() =>
        setActiveSkill((currentSkill) =>
          currentSkill === skill ? null : skill
        )
      }
      onDismiss={() =>
        setActiveSkill((currentSkill) =>
          currentSkill === skill ? null : currentSkill
        )
      }
    />
  );

  return (
    <section
      className="w-full relative select-none mt-44"
      id={MENULINKS[1].ref}
      ref={targetSection}
    >
      <div className="section-container py-16 flex flex-col justify-center">
        <img
          src="/right-pattern.svg"
          alt=""
          className="absolute hidden right-0 bottom-2/4 w-2/12 max-w-xs md:block"
          loading="lazy"
          height={700}
          width={320}
        />
        <div className="flex flex-col skills-wrapper">
          <div className="flex flex-col">
            <p className="uppercase tracking-widest text-gray-light-1 seq">
              SKILLS
            </p>
            <h1 className="text-6xl mt-2 font-medium text-gradient w-fit seq">
              My Skills
            </h1>
            <h2 className="text-[1.65rem] font-medium md:max-w-lg w-full mt-2 seq">
              I like to take responsibility to craft aesthetic user experience
              using modern frontend architecture.{" "}
            </h2>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              LANGUAGES AND TOOLS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {SKILLS.languagesAndTools.map(renderSkill)}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              LIBRARIES AND FRAMEWORKS
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {SKILLS.librariesAndFrameworks.map(renderSkill)}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="uppercase tracking-widest text-gray-light-2 font-medium text-base mb-4 seq">
              DATABASES
            </h3>
            <div className="flex flex-wrap gap-6 transform-gpu seq">
              {SKILLS.databases.map(renderSkill)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
