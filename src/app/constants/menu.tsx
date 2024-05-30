import CalIcon from "../../../public/icons/cal.svg";
import ChatIcon from "../../../public/icons/chaticon.svg";
import DashboardIcon from "../../../public/icons/dashboard.svg";
import EmailIcon from "../../../public/icons/email.svg";
import HelpDeskIcon from "../../../public/icons/helpdesk.svg";
import IntegrationsIcon from "../../../public/icons/integrations.svg";
import SettingsIcon from "../../../public/icons/settings.svg";
import StarIcon from "../../../public/icons/staricon.svg";
import TimerIcon from "../../../public/icons/timericon.svg";

type SIDE_BAR_MENU_PROPS = {
  label: string;
  icon: JSX.Element;
  path: string;
};

export const SIDE_BAR_MENU: SIDE_BAR_MENU_PROPS[] = [
  {
    label: "Dashboard",
    icon: <DashboardIcon />,
    path: "dashboard",
  },
  {
    label: "Conversations",
    icon: <ChatIcon />,
    path: "conversation",
  },
  {
    label: "Integrations",
    icon: <IntegrationsIcon />,
    path: "integration",
  },
  {
    label: "Settings",
    icon: <SettingsIcon />,
    path: "settings",
  },
  {
    label: "Appointments",
    icon: <CalIcon />,
    path: "appointment",
  },
  {
    label: "Email Marketing",
    icon: <EmailIcon />,
    path: "email-marketing",
  },
];

type TABS_MENU_PROPS = {
  label: string;
  icon?: JSX.Element;
};

export const TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: "unread",
    icon: <EmailIcon />,
  },
  {
    label: "all",
    icon: <EmailIcon />,
  },
  {
    label: "expired",
    icon: <TimerIcon />,
  },
  {
    label: "starred",
    icon: <StarIcon />,
  },
];

export const HELP_DESK_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: "help desk",
  },
  {
    label: "questions",
  },
];

export const APPOINTMENT_TABLE_HEADER = [
  "Name",
  "RequestedTime",
  "Added Time",
  "Domain",
];

export const EMAIL_MARKETING_HEADER = ["Id", "Email", "Answers", "Domain"];

export const BOT_TABS_MENU: TABS_MENU_PROPS[] = [
  {
    label: "chat",
    icon: <ChatIcon />,
  },
  {
    label: "helpdesk",
    icon: <HelpDeskIcon />,
  },
];
