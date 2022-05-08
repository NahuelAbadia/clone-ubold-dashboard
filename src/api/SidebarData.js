import { AiOutlineCalendar, AiOutlineMail, AiOutlineFolderAdd } from "react-icons/ai"
import { MdChatBubbleOutline } from "react-icons/md"
import { BiStats, BiBriefcaseAlt, } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"
import { FiUsers, FiBook } from "react-icons/fi"
import { MdRssFeed } from "react-icons/md"
import { VscNotebook } from "react-icons/vsc"
import { RiCameraLensLine } from "react-icons/ri"

export const Navigation = [
  {
    id: 1,
    name: "Dashboard 1"
  },
  {
    id: 2,
    name: "Dashboard 2"
  },
  {
    id: 3,
    name: "Dashboard 3"
  },
  {
    id: 4,
    name: "Dashboard 4"
  },
]

export const Apps = [
  {
    name: "Calendar",
    link: "/",
    tag: "false",
    icon: AiOutlineCalendar,
    arrow: "false"
  },
  {
    name: "Chat",
    link: "/",
    tag: "false",
    icon: MdChatBubbleOutline,
    arrow: "false"
  },
  {
    name: "Ecommerce",
    link: "/",
    tag: "false",
    icon: BsCart2,
    arrow: "true"
  },
  {
    name: "CRM",
    link: "/",
    tag: "false",
    icon: FiUsers,
    arrow: "true"
  },
  {
    name: "Email",
    link: "/",
    tag: "false",
    icon: AiOutlineMail,
    arrow: "true"
  },
  {
    name: "Social Feed",
    link: "/",
    tag: "true",
    icon: MdRssFeed,
    arrow: "false"
  },
  {
    name: "Companies",
    link: "/",
    tag: "false",
    icon: BiStats,
    arrow: "false"
  },
  {
    name: "Projects",
    link: "/",
    tag: "false",
    icon: BiBriefcaseAlt,
    arrow: "true"
  },
  {
    name: "Tasks",
    link: "/",
    tag: "false",
    icon: VscNotebook,
    arrow: "true"
  },
  {
    name: "Contacts",
    link: "/",
    tag: "false",
    icon: FiBook,
    arrow: "true"
  },
  {
    name: "Tickets",
    link: "/",
    tag: "false",
    icon: RiCameraLensLine,
    arrow: "true"
  },
  {
    name: "File Manager",
    link: "/",
    tag: "false",
    icon: AiOutlineFolderAdd,
    arrow: "false"
  },
]