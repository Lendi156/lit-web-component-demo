<script setup>
import { ref } from 'vue'

const breadcrumbItems = [
  { label: 'Home', href: '#' },
  { label: 'Dashboard', href: '#' },
  { label: 'Overview' },
]

const departments = [
  { label: 'Engineering', value: 'engineering' },
  { label: 'Operations', value: 'operations' },
  { label: 'Marketing', value: 'marketing' },
]

const menuItems = [
  { label: 'Overview', active: true },
  { label: 'Performance' },
  { label: 'Reports' },
  { label: 'Settings', disabled: true },
]

const dropdownItems = [
  { label: 'Daily summary' },
  { label: 'Weekly report' },
  { label: 'Quarterly overview' },
]

const tableColumns = [
  { key: 'project', label: 'Project' },
  { key: 'owner', label: 'Owner' },
  { key: 'status', label: 'Status' },
  { key: 'progress', label: 'Progress' },
]

const tableRows = [
  { project: 'Aurora', owner: 'Maya', status: 'Running', progress: '76%' },
  { project: 'Atlas', owner: 'Liam', status: 'Review', progress: '54%' },
  { project: 'Viper', owner: 'Sara', status: 'Queued', progress: '21%' },
]

const tabs = [
  { label: 'Overview', value: 'overview', content: 'Overview content for the current release plan.' },
  { label: 'Team', value: 'team', content: 'Team contribution and decision notes.' },
  { label: 'Risk', value: 'risk', content: 'Risk log and mitigation checklist.' },
]

const modalOpen = ref(false)
const drawerOpen = ref(false)
</script>

<template>
  <cyberpunk-container size="xl">
    <div class="dashboard-shell">
      <header class="topbar">
        <div class="brand">
          <h1 class="brand-title">Cyberpunk UI</h1>
          <span class="brand-subtitle">Operations dashboard</span>
        </div>
        <div class="topbar-actions">
          <cyberpunk-button variant="secondary">Export</cyberpunk-button>
          <cyberpunk-button>Create Report</cyberpunk-button>
        </div>
      </header>

      <cyberpunk-breadcrumb :items="breadcrumbItems"></cyberpunk-breadcrumb>

      <div class="grid">
        <cyberpunk-card class="span-12" elevated>
          <header slot="header">Overview</header>
          <div class="summary-row">
            <div class="summary-card">
              <cyberpunk-badge variant="info" size="small">Live</cyberpunk-badge>
              <strong>23.4K</strong>
              <span class="muted small">Active users</span>
            </div>
            <div class="summary-card">
              <cyberpunk-badge variant="success" size="small">On track</cyberpunk-badge>
              <strong>87%</strong>
              <span class="muted small">Delivery performance</span>
            </div>
            <div class="summary-card">
              <cyberpunk-badge variant="warning" size="small">Pending</cyberpunk-badge>
              <strong>14</strong>
              <span class="muted small">Open issues</span>
            </div>
          </div>
        </cyberpunk-card>

        <cyberpunk-card class="span-5">
          <header slot="header">Profile</header>
          <div class="stack">
            <cyberpunk-alert variant="info">System sync is operating normally.</cyberpunk-alert>
            <cyberpunk-input label="Full name" value="Nova Sinclair" placeholder="Enter your name"></cyberpunk-input>
            <cyberpunk-select
              :options="departments"
              label="Department"
              placeholder="Choose department"
              value="engineering"
            ></cyberpunk-select>
            <div class="row">
              <cyberpunk-checkbox label="Notify me" checked></cyberpunk-checkbox>
              <cyberpunk-checkbox label="Admin mode"></cyberpunk-checkbox>
            </div>
          </div>
          <footer slot="footer">
            <div class="row footer-actions">
              <cyberpunk-button variant="primary">Save</cyberpunk-button>
              <cyberpunk-button variant="secondary">Cancel</cyberpunk-button>
            </div>
          </footer>
        </cyberpunk-card>

        <cyberpunk-card class="span-7">
          <header slot="header">Activity</header>
          <div class="stack">
            <cyberpunk-progress label="Network health" :value="76"></cyberpunk-progress>
            <cyberpunk-progress label="Launch readiness" :value="89"></cyberpunk-progress>
            <cyberpunk-progress variant="circular" :value="64" label="Quality score"></cyberpunk-progress>
          </div>
          <footer slot="footer">
            <div class="row footer-actions">
              <cyberpunk-badge variant="success" size="small">Stable</cyberpunk-badge>
              <cyberpunk-badge variant="warning" size="small">2 alerts</cyberpunk-badge>
            </div>
          </footer>
        </cyberpunk-card>

        <cyberpunk-card class="span-4">
          <header slot="header">Navigation</header>
          <cyberpunk-menu orientation="vertical" :items="menuItems"></cyberpunk-menu>
        </cyberpunk-card>

        <cyberpunk-card class="span-8">
          <header slot="header">Filters</header>
          <div class="stack">
            <cyberpunk-dropdown label="Select view" :items="dropdownItems"></cyberpunk-dropdown>
            <cyberpunk-textarea label="Notes" placeholder="Add observations..." :rows="5"></cyberpunk-textarea>
          </div>
          <footer slot="footer">
            <div class="row footer-actions">
              <cyberpunk-button variant="info">Apply</cyberpunk-button>
              <cyberpunk-button variant="warning">Review</cyberpunk-button>
            </div>
          </footer>
        </cyberpunk-card>

        <cyberpunk-card class="span-12">
          <header slot="header">Operations</header>
          <cyberpunk-table striped :columns="tableColumns" :rows="tableRows"></cyberpunk-table>
        </cyberpunk-card>

        <cyberpunk-card class="span-6">
          <header slot="header">Tabs</header>
          <cyberpunk-tabs :tabs="tabs"></cyberpunk-tabs>
        </cyberpunk-card>

        <cyberpunk-card class="span-6">
          <header slot="header">Quick actions</header>
          <div class="stack">
            <div class="row">
              <cyberpunk-button variant="primary" @click="modalOpen = true">Open modal</cyberpunk-button>
              <cyberpunk-button variant="secondary" @click="drawerOpen = true">Open drawer</cyberpunk-button>
            </div>

            <cyberpunk-popover placement="top" trigger="click">
              <button slot="trigger" class="popover-trigger">More options</button>
              <div slot="content" class="popover-options">
                <div>Duplicate</div>
                <div>Archive</div>
                <div>Share</div>
              </div>
            </cyberpunk-popover>
          </div>
        </cyberpunk-card>
      </div>
    </div>
  </cyberpunk-container>

  <cyberpunk-modal
    :open="modalOpen"
    title="Create report"
    @close="modalOpen = false"
  >
    <div class="stack">
      <cyberpunk-alert variant="success">Your draft was synced successfully.</cyberpunk-alert>
      <cyberpunk-input label="Report title" value="Launch checklist" placeholder="Type a name"></cyberpunk-input>
      <div class="row">
        <cyberpunk-button variant="primary" @click="modalOpen = false">Confirm</cyberpunk-button>
        <cyberpunk-button variant="secondary" @click="modalOpen = false">Later</cyberpunk-button>
      </div>
    </div>
  </cyberpunk-modal>

  <cyberpunk-drawer
    :open="drawerOpen"
    title="Quick panel"
    position="right"
    width="360px"
    @close="drawerOpen = false"
  >
    <div class="stack">
      <cyberpunk-badge variant="warning" size="small">Needs review</cyberpunk-badge>
      <cyberpunk-input label="Task" value="Prepare rollout" placeholder="Task name"></cyberpunk-input>
      <cyberpunk-textarea label="Summary" placeholder="Describe the update..." :rows="4"></cyberpunk-textarea>
      <cyberpunk-button variant="primary" @click="drawerOpen = false">Submit</cyberpunk-button>
    </div>
  </cyberpunk-drawer>
</template>
