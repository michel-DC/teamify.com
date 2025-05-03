"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  Calendar,
  Users,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavEvents } from "@/components/nav-events";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  user: {
    name: "",
    email: "",
    avatar: "",
  },
  teams: [
    {
      name: "",
      logo: GalleryVerticalEnd,
    },
  ],
  navMain: [
    {
      title: "Tableau de bord",
      url: "/dashboard",
      icon: PieChart,
      isActive: true,
      items: [
        {
          title: "Vue d'ensemble",
          url: "/dashboard/overview",
        },
        {
          title: "Statistiques",
          url: "/dashboard/stats",
        },
      ],
    },
    {
      title: "Événements",
      url: "/events",
      icon: Calendar,
      items: [
        {
          title: "Tous les événements",
          url: "/events",
        },
        {
          title: "Créer un événement",
          url: "/events/new",
        },
        {
          title: "Mes invitations",
          url: "/events/invitations",
        },
      ],
    },
    {
      title: "Organisations",
      url: "/organizations",
      icon: GalleryVerticalEnd,
      items: [
        {
          title: "Mes organisations",
          url: "/organizations",
        },
        {
          title: "Créer une organisation",
          url: "/organizations/new",
        },
        {
          title: "Inviter un membre",
          url: "/organizations/invite",
        },
      ],
    },
    {
      title: "Équipes",
      url: "/teams",
      icon: Users,
      items: [
        {
          title: "Toutes les équipes",
          url: "/teams",
        },
        {
          title: "Créer une équipe",
          url: "/teams/new",
        },
        {
          title: "Gérer les membres",
          url: "/teams/members",
        },
      ],
    },
    {
      title: "Messages",
      url: "/messages",
      icon: Command,
      items: [
        {
          title: "Discussions",
          url: "/messages",
        },
        {
          title: "Nouveau message",
          url: "/messages/new",
        },
      ],
    },
    {
      title: "Paramètres",
      url: "/settings",
      icon: Settings2,
      items: [
        {
          title: "Profil",
          url: "/settings/profile",
        },
        {
          title: "Notifications",
          url: "/settings/notifications",
        },
        {
          title: "Sécurité",
          url: "/settings/security",
        },
        {
          title: "Facturation",
          url: "/settings/billing",
        },
      ],
    },
  ],
  events: [
    {
      name: "Design Engineering",
      url: "#",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "#",
      icon: Map,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [userData, setUserData] = React.useState(data);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/dashboard");
        const dashboardData = await res.json();

        if (dashboardData && dashboardData[0]) {
          const user = dashboardData[0];
          setUserData((prev) => ({
            ...prev,
            user: {
              name: user.name,
              email: user.email,
              avatar: user.profilePicture || "",
            },
            teams: [
              {
                name: user.organization?.name || "My Organization",
                logo: GalleryVerticalEnd,
                plan: "Free",
              },
            ],
          }));
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={userData.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={userData.navMain} />
        <NavEvents events={userData.events} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
