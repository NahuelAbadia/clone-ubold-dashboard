import { VscHeart } from "react-icons/vsc"
import { BsCart2 } from "react-icons/bs"
import { AiOutlineEye } from "react-icons/ai"
import { IoStatsChartSharp } from "react-icons/io5"

import { BiEuro } from "react-icons/bi"
import { FaBtc, FaEthereum } from "react-icons/fa"
import { RiMoneyCnyCircleLine } from "react-icons/ri"


export const Stats = [
  {
    value: "$58,947",
    title: "Total Revenue",
    icon: VscHeart,
    bgColor: "#D9D5F6",
    iconColor: "#6B46C1",
  },
  {
    value: "127",
    title: "Today's Sales",
    icon: BsCart2,
    bgColor: "#C6EEE6",
    iconColor: "#51CCB4",
  },
  {
    value: "0.58%",
    title: "Conversion",
    icon: IoStatsChartSharp,
    bgColor: "#D3F1F7",
    iconColor: "#6DD3ED",
  },
  {
    value: "78.41k",
    title: "Today's Visits",
    icon: AiOutlineEye,
    bgColor: "#FDEDD2",
    iconColor: "#F7BA4F",
  },
]

export const Users = [
  {
    nombre: "Tomaslau",
    image: "https://coderthemes.com/ubold/layouts/assets/images/users/user-2.jpg",
    currency: "BTC",
    icon: FaBtc,
    balance: "0.00816117 BTC",
    rio: "0.00097036 BTC",
  },
  {
    nombre: "Erwin E. Brown",
    image: "https://coderthemes.com/ubold/layouts/assets/images/users/user-3.jpg",
    currency: "ETH",
    icon: FaEthereum,
    balance: "3.16117008 ETH",
    rio: "1.70360009 ETH",
  },
  {
    nombre: "Margeret V. Ligon",
    image: "https://coderthemes.com/ubold/layouts/assets/images/users/user-4.jpg",
    currency: "EUR",
    icon: BiEuro,
    balance: "25.08 EUR",
    rio: "12.58 EUR",
  },
  {
    nombre: "Jose D. Delacruz",
    image: "https://coderthemes.com/ubold/layouts/assets/images/users/user-5.jpg",
    currency: "CNY",
    icon: RiMoneyCnyCircleLine,
    balance: "82.00 CNY",
    rio: "30.83 CNY",
  },
  {
    nombre: "Luke J. Sain",
    image: "https://coderthemes.com/ubold/layouts/assets/images/users/user-6.jpg",
    currency: "BTC",
    icon: FaBtc,
    balance: "2.00816117 BTC",
    rio: "1.00097036 BTC",
  },
]

export const RevenueHistoryData = [
  {
    marketplaces: "Themes Market",
    date: "Oct 15, 2018",
    payouts: "$5848.68",
    status: "Upcoming",
    color: "yellow",
  },
  {
    marketplaces: "Freelance",
    date: "Oct 12, 2018",
    payouts: "$1247.25",
    status: "Paid",
    color: "green",
  },
  {
    marketplaces: "Share Holding",
    date: "Oct 10, 2018",
    payouts: "$815.89",
    status: "Paid",
    color: "green",
  },
  {
    marketplaces: "Envato's Affiliates",
    date: "Oct 03, 2018",
    payouts: "$248.75",
    status: "Overdue",
    color: "red",
  },
  {
    marketplaces: "Marketing Revenue",
    date: "Sep 21, 2018",
    payouts: "$978.21",
    status: "Upcoming",
    color: "yellow",
  },
  {
    marketplaces: "Advertise Revenue",
    date: "Sep 15, 2018",
    payouts: "$358.10",
    status: "Paid",
    color: "green",
  },
]