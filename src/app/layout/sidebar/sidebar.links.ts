import { MenuItem } from 'primeng/api';

export const sidebarLinks: Array<MenuItem> = [
  { label: 'Dashboard', icon: 'fa fa-fw fa-th-large', routerLink: ['/'], routerLinkActiveOptions: { exact: true } },
  {
    label: 'Organization',
    icon: 'fa fa-fw fa-building',
    items: [
      { label: 'Departments', styleClass: 'sidebar-menu-subitem' },
      { label: 'Job Roles', styleClass: 'sidebar-menu-subitem' },
      { label: 'Activities', styleClass: 'sidebar-menu-subitem' },
      { label: 'People', styleClass: 'sidebar-menu-subitem' },
      { label: 'Companies', styleClass: 'sidebar-menu-subitem' },
      { label: 'Clients', styleClass: 'sidebar-menu-subitem' },
      { label: 'Suppliers', styleClass: 'sidebar-menu-subitem' }
    ]
  },
  { label: 'Human Resources', icon: 'fa fa-fw fa-users' },
  { label: 'Project Management', icon: 'fa fa-fw fa-project-diagram' },
  { label: 'Activity Tracker', icon: 'fa fa-fw fa-calendar-alt' },
  { label: 'Recruitment', icon: 'fa fa-fw fa-user-tag' },
  { label: 'Marketing & Sales', icon: 'fa fa-fw fa-dollar-sign' },
  { label: 'Administration', icon: 'fa fa-fw fa-cog' },
  { label: 'Help & Support', icon: 'fa fa-fw fa-question' }
];
