import { Menu } from "@/types/menu";
import { HomeIcon } from "@heroicons/react/24/outline";

const menuData: Menu[] = [
  {
    id: 1,
    title: "HOME",
    path: "/",
    newTab: false,
    icon: <HomeIcon />,
  },
  {
    id: 2,
    title: "Domande",
    path: "/obiettivi",
    newTab: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M14.4 6H20v10h-7l-.4-2H7v7H5V4h9zm-.4 8h2v-2h2v-2h-2V8h-2v2l-1-2V6h-2v2H9V6H7v2h2v2H7v2h2v-2h2v2h2v-2l1 2zm-3-4V8h2v2zm3 0h2v2h-2z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    title: "CONTENUTI",
    path: "/contenuti",
    newTab: false,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M12 21.5c-1.35-.85-3.8-1.5-5.5-1.5c-1.65 0-3.35.3-4.75 1.05c-.1.05-.15.05-.25.05c-.25 0-.5-.25-.5-.5V6c.6-.45 1.25-.75 2-1c1.11-.35 2.33-.5 3.5-.5c1.95 0 4.05.4 5.5 1.5c1.45-1.1 3.55-1.5 5.5-1.5c1.17 0 2.39.15 3.5.5c.75.25 1.4.55 2 1v14.6c0 .25-.25.5-.5.5c-.1 0-.15 0-.25-.05c-1.4-.75-3.1-1.05-4.75-1.05c-1.7 0-4.15.65-5.5 1.5m-1-14c-1.36-.6-3.16-1-4.5-1c-1.2 0-2.4.15-3.5.5v11.5c1.1-.35 2.3-.5 3.5-.5c1.34 0 3.14.4 4.5 1zM13 19c1.36-.6 3.16-1 4.5-1c1.2 0 2.4.15 3.5.5V7c-1.1-.35-2.3-.5-3.5-.5c-1.34 0-3.14.4-4.5 1zm1-2.65c.96-.35 2.12-.52 3.5-.52c1.04 0 1.88.08 2.5.24v-1.5a13.9 13.9 0 0 0-6 .19zm0-2.66c.96-.35 2.12-.53 3.5-.53c1.04 0 1.88.08 2.5.24v-1.5c-.87-.16-1.71-.23-2.5-.23c-1.28 0-2.45.15-3.5.45zM14 11c.96-.33 2.12-.5 3.5-.5c.91 0 1.76.09 2.5.28V9.23c-.87-.15-1.71-.23-2.5-.23c-1.32 0-2.5.15-3.5.46z"
        />
      </svg>
    ),
  },
];
export default menuData;
