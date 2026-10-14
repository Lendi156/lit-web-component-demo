import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Dashboard', href: '#' },
    { label: 'Overview' },
  ];

  readonly departments = [
    { label: 'Engineering', value: 'engineering' },
    { label: 'Operations', value: 'operations' },
    { label: 'Marketing', value: 'marketing' },
  ];

  readonly menuItems = [
    { label: 'Overview', active: true },
    { label: 'Performance' },
    { label: 'Reports' },
    { label: 'Settings', disabled: true },
  ];

  readonly dropdownItems = [
    { label: 'Daily summary' },
    { label: 'Weekly report' },
    { label: 'Quarterly overview' },
  ];

  readonly tableColumns = [
    { key: 'project', label: 'Project' },
    { key: 'owner', label: 'Owner' },
    { key: 'status', label: 'Status' },
    { key: 'progress', label: 'Progress' },
  ];

  readonly tableRows = [
    { project: 'Aurora', owner: 'Maya', status: 'Running', progress: '76%' },
    { project: 'Atlas', owner: 'Liam', status: 'Review', progress: '54%' },
    { project: 'Viper', owner: 'Sara', status: 'Queued', progress: '21%' },
  ];

  readonly tabs = [
    { label: 'Overview', value: 'overview', content: 'Overview content for the current release plan.' },
    { label: 'Team', value: 'team', content: 'Team contribution and decision notes.' },
    { label: 'Risk', value: 'risk', content: 'Risk log and mitigation checklist.' },
  ];

  modalOpen = false;
  drawerOpen = false;
}
