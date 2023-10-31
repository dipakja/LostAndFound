import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlights of Our Portal",
  desc: "LostAndFound is a portal for lost and found items. It will help you to find your lost items and will help you to find the items that you found.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Notifications",
      desc: "Send email or push notifications to users when items matching their criteria are reported",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Item Reporting",
      desc: "Enable users to report lost or found items, providing detailed descriptions, images, and location information.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "User Friendly Interface",
      desc: "Provide a simple and intuitive interface for users to report lost or found items.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

// const benefitTwo = {
//   title: "Offer more benefits here",
//   desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
//   image: benefitTwoImg,
//   bullets: [
//     {
//       title: "Mobile Responsive Template",
//       desc: "Nextly is designed as a mobile first responsive template.",
//       icon: <DevicePhoneMobileIcon />,
//     },
//     {
//       title: "Powered by Next.js & TailwindCSS",
//       desc: "This template is powered by latest technologies and tools.",
//       icon: <AdjustmentsHorizontalIcon />,
//     },
//     {
//       title: "Dark & Light Mode",
//       desc: "Nextly comes with a zero-config light & dark mode. ",
//       icon: <SunIcon />,
//     },
//   ],
// };


export {benefitOne};
