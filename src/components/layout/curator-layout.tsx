import { ReactNode } from 'react';
import { SideBar } from '@/components/ui/sidebar.tsx';

export const CuratorLayout = ({ children }: { children: ReactNode }) => {
  const navItems = [
    {
      title: 'Dashboard',
      link: '/',
    },
    {
      title: 'Reviews',
      link: '/reviews',
    },
  ];

  return (
    <div className="lg:grid lg:grid-cols-6 w-full min-h-screen border-box">
      <SideBar items={navItems} isUser={true} />
      <div className="lg:col-span-5 px-8 py-12 md:p-20 lg:py-20 space-y-4">{children}</div>
    </div>
  );
};
