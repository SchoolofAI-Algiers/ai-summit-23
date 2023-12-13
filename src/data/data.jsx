import { BsFillTelephoneFill } from "react-icons/bs";
import { MdMail } from "react-icons/md";
import { RiMapPin2Fill } from "react-icons/ri";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import React from "react";

import beghdadi from "../assets/Beghdadi.jpg";
import larbi from "../assets/larbi.jpg";
import abed from "../assets/Abed.png";
import hachem from "../assets/hachem.jpg";
import debbah from "../assets/debbah.jpg";
import onur from "../assets/onur.png";
import tahaA from "../assets/TahaArbaoui.png";
import tahaR from "../assets/taharouabah.png";
import yousra from "../assets/yousrabouakba.jpg";
import younes from "../assets/YounesBouhdjar.jpg";
import hadjer from "../assets/Hadjer.jpg";
import noha from "../assets/noha.jpg";
import AISummitlogo from "../assets/assets2023/AISummitlogo.png";
import SOAIlogo from "../assets/assets2023/SOAILogo.png";
import lines_ from "../assets/assets2023/lines.png"
import lines2_ from "../assets/assets2023/lines2.png"
import next_ from "../assets/assets2023/next.svg"
import prev_ from "../assets/assets2023/prev.svg"
import lines_speakers_ from "../assets/assets2023/lines-speakers.svg"


export const lines = lines_;
export const lines2 = lines2_;
export const next = next_;
export const prev = prev_;
export const lines_speakers = lines_speakers_;

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "speakers",
    title: "Speakers",
  },
  {
    id: "agenda",
    title: "Agenda",
  },
  {
    id: "faq",
    title: "Faq",
  },
];

//list of speakers for the speakers section
export const speakers = [
  {
    id: 1,
    name: "Riyadh Beghdadi",
    profession: "Assistant Professor at NYU Abu Dhabi",
    description: "Head First Reinforcement Learning",
    img: beghdadi,
  },
  {
    id: 2,
    name: "Merouane Debbah",
    profession: "Director of the KU 6G Research Center.",
    description: "Data Science Development: Introduction to Data Preparation",
    img: debbah,
  },
  {
    id: 3,
    name: "Onur Mutlu",
    profession:
      "Adjunct Professor at Carnegie Mellon University",
    description: "Hate speech detection against women in the Arabic community",
    img: onur,
  },
  {
    id: 4,
    name: "Abed Benaichouche",
    profession:
      "Cofounder & CEO of Open Innovation AI ",
    description: "Toward Practical Quantum Advantages",
    img: abed,
  },
  {
    id: 5,
    name: "Hachem Betrouni",
    profession:
      "CTO and AI Engineer at BIGmama",
    description: "Adversarial Poisoning in Federated Learning",
    img: hachem,
  },
  {
    id: 6,
    name: "Slimane Larabi",
    profession:
      "Interim Director at National Institute for Theoretical and Computational Science",
    description:
      "Introduction to Quantum Computing and Quantum Machine Learning",
    img: larbi,
  },
];

//social media list of components
export const socials = [
  {
    name: "Facebook",
    link: "https://www.facebook.com/SchoolofAIAlgiers/",
    icon: <FaFacebook size={24}></FaFacebook>,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/soai_algiers",
    icon: <FaInstagram size={24}></FaInstagram>,
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/company/school-of-ai-algiers/",
    icon: <FaLinkedin size={24}></FaLinkedin>,
  },
  {
    name: "Twitter",
    link: "https://twitter.com/soaialgiers",
    icon: <FaTwitter size={24}></FaTwitter>,
  },
  {
    name: "Youtube",
    link: "https://m.youtube.com/channel/UChFa3XnZYZ94tkjfJ5CnPOA",
    icon: <FaYoutube size={24}></FaYoutube>,
  },
];

export const contactInfos = [
  {
    href: "https://www.google.com/maps/place/Ecole+Nationale+Sup%C3%A9rieure+d'Informatique+(Higher+School+for+Computer+Science)/@36.7050299,3.1739156,15z/data=!4m5!3m4!1s0x0:0x215c157a5406653c!8m2!3d36.7050299!4d3.1739156",
    name: "Place",
    icon: <RiMapPin2Fill size={20}></RiMapPin2Fill>,
    content:
      "Higher National School of Computer Science (ESI) Oued Smar, Algiers",
  },
  {
    href: "mailto:schoolofai.algiers@esi.dz",
    name: "Mail",
    icon: <MdMail size={20}></MdMail>,
    content: "schoolofai.algiers@esi.dz",
  },
  {
    href: "tel:+213666636252",
    name: "Phone",
    icon: <BsFillTelephoneFill size={20}></BsFillTelephoneFill>,
    content: "+213 667 271 665",
  },
];

export const faq = [
  {
    question: "When will AI Summit be ?",
    answer:
      "On Friday 16th December online and Saturday 17th December both online and in-person.",
  },
  {
    question: "Where will it take place ?",
    answer:
      "The in-person side of the event will take place at the Higher National School for Artificial Intelligence (ENSIA).",
  },
  {
    question: "Who can participate ?",
    answer:
      "Everyone is welcome to attend the AI Summit talks either on Friday or Saturday or both.",
  },
  {
    question: "How can I register ?",
    answer:
      "Click on the register button on the top right corner of the website and fill the form.",
  },
];

// Agenda times and activity
export const agendaSatP = [
  {
    start: "08:00",
    end: "09:00",
    activity: "Check In",
  },
  {
    start: "09:00",
    end: "09:30",
    activity: "Opening Ceremony",
  },
  {
    start: "09:30",
    end: "09:45",
    activity: "Launching talks",
  },
  {
    start: "09:45",
    end: "10:45",
    activity: "Talk with Noha Nekamiche",
  },
  {
    start: "11:00",
    end: "12:00",
    activity: "Talk with Taha Arbaoui",
  },
  {
    start: "12:00",
    end: "13:15",
    activity: "Break",
  },
  {
    start: "13:15",
    end: "14:15",
    activity: "Talk with Yousra Bouakba",
  },
  {
    start: "14:30",
    end: "15:30",
    activity: "Talk with El Kindi Rezig",
  },
  {
    start: "15:30",
    end: "16:20",
    activity: "Coffee Break",
  },
  {
    start: "16:20",
    end: "16:45",
    activity: "Closing Ceremony",
  },
];

export const agendaSatO = [
  {
    start: "10:00",
    end: "11:00",
    activity: "Talk with Francesco Petruccione and Taha Rouabah",
  },
  {
    start: "13:00",
    end: "14:00",
    activity: "Talk with Matthias Troyer and Taha Rouabah",
  },
];

export const agendaFri = [
  {
    start: "15:30",
    end: "16:30",
    activity: "Talk with Mohamed Amine Merzouk",
  },
  {
    start: "16:45",
    end: "17:45",
    activity: "Talk with Hadjer Benmeziane",
  },
  {
    start: "18:15",
    end: "19:15",
    activity: "Talk with Azzeddine Chenine",
  },
  {
    start: "19:30",
    end: "20:30",
    activity: "Talk with Imane Guellil",
  },
  {
    start: "20:30",
    end: "21:30",
    activity: "Talk with Younes Bouhdjar",
  },
];

export const logos = [
  AISummitlogo,
  SOAIlogo
];
