import './app.css'
import { useState } from "react"
import { CyberpunkAlert, CyberpunkBadge, CyberpunkBreadcrumb, CyberpunkButton, CyberpunkCard, CyberpunkContainer, CyberpunkInput, CyberpunkCheckbox, CyberpunkSelect, CyberpunkProgress, CyberpunkMenu, CyberpunkDropdown, CyberpunkTextArea, CyberpunkTable, CyberpunkTabs, CyberpunkPopover, CyberpunkModal, CyberpunkDrawer } from "@edts/cyberpunk-ui/react";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <>
      <CyberpunkContainer size="xl">
        <div className='dashboard-shell'>
            <header className="topbar">
          <div className="brand">
            <h1 className="brand-title">Cyberpunk UI</h1>
            <span className="brand-subtitle">Operations dashboard</span>
          </div>
          <div className="topbar-actions">
              <CyberpunkButton variant="secondary">Export</CyberpunkButton>
              <CyberpunkButton>Create Report</CyberpunkButton>
            </div>
        </header>

        <CyberpunkBreadcrumb
          items={[
            { label: 'Home', href: '#' },
            { label: 'Dashboard', href: '#' },
            { label: 'Overview' }
          ]}
        />
        <CyberpunkCard>
            <header slot="header">Overview</header>
            <div className="summary-row">
              <div className="summary-card">
                <CyberpunkBadge variant="info" size="small">Live</CyberpunkBadge>
                <strong>23.4K</strong>
                <span className="muted small">Active users</span>
              </div>
              <div className="summary-card">
                <CyberpunkBadge variant="success" size="small">On track</CyberpunkBadge>
                <strong>87%</strong>
                <span className="muted small">Delivery performance</span>
              </div>
              <div className="summary-card">
                <CyberpunkBadge variant="warning" size="small">Pending</CyberpunkBadge>
                <strong>14</strong>
                <span className="muted small">Open issues</span>
              </div>
            </div>
        </CyberpunkCard>
        <CyberpunkCard className="span-5">
          <header slot="header">Profile</header>
          <div className="stack">
            <CyberpunkAlert variant="info">System sync is operating normally.</CyberpunkAlert>
            <CyberpunkInput label="Full name" value="Nova Sinclair" placeholder="Enter your name" />
            <CyberpunkSelect
              options={[
                { label: 'Engineering', value: 'engineering' },
                { label: 'Operations', value: 'operations' },
                { label: 'Marketing', value: 'marketing' }
              ]}
              label="Department"
              placeholder="Choose department"
              value="engineering" />
            <div className="row">
              <CyberpunkCheckbox label="Notify me" checked />
              <CyberpunkCheckbox label="Admin mode" />
            </div>
          </div>
          <footer slot="footer" >
            <CyberpunkButton variant="primary">Save</CyberpunkButton>
            <CyberpunkButton variant="secondary">Cancel</CyberpunkButton>
          </footer>
        </CyberpunkCard>
        <CyberpunkCard className="span-7">
            <header slot="header">Activity</header>
            <div className="stack">
              <CyberpunkProgress label="Network health" value={76} />
              <CyberpunkProgress label="Launch readiness" value={89} />
              <CyberpunkProgress variant="circular" value={64} label="Quality score" />
            </div>
            <footer slot="footer">
              <CyberpunkBadge variant="success" size="small">Stable</CyberpunkBadge>
              <CyberpunkBadge variant="warning" size="small">2 alerts</CyberpunkBadge>
            </footer>
          </CyberpunkCard>
          <CyberpunkCard className="span-4">
            <header slot="header">Navigation</header>
            <CyberpunkMenu
              orientation="vertical"
              items={[
                { label: 'Overview', active: true },
                { label: 'Performance' },
                { label: 'Reports' },
                { label: 'Settings', disabled: true }
            ]}
            />
          </CyberpunkCard>
          <CyberpunkCard className="span-8">
            <header slot="header">Filters</header>
            <div className="stack">
              <CyberpunkDropdown
                label="Select view"
                items={[
                  { label: 'Daily summary' },
                  { label: 'Weekly report' },
                  { label: 'Quarterly overview' }
                ]}
              />
              <CyberpunkTextArea label="Notes" placeholder="Add observations..." rows="5" />
            </div>
            <footer slot="footer">
              <CyberpunkButton variant="info">Apply</CyberpunkButton>
              <CyberpunkButton variant="warning">Review</CyberpunkButton>
            </footer>
          </CyberpunkCard>
          <CyberpunkCard className="span-12">
            <header slot="header">Operations</header>
            <CyberpunkTable
              columns={[
                { key: 'project', label: 'Project' },
                { key: 'owner', label: 'Owner' },
                { key: 'status', label: 'Status' },
                { key: 'progress', label: 'Progress' }
              ]}
              rows={[
                { project: 'Aurora', owner: 'Maya', status: 'Running', progress: '76%' },
                { project: 'Atlas', owner: 'Liam', status: 'Review', progress: '54%' },
                { project: 'Viper', owner: 'Sara', status: 'Queued', progress: '21%' }
              ]}
              striped
            />
          </CyberpunkCard>
          <CyberpunkCard className="span-6">
            <header slot="header">Tabs</header>
            <CyberpunkTabs tabs={
              [
                { label: 'Overview', value: 'overview', content: 'Overview content for the current release plan.' },
                { label: 'Team', value: 'team', content: 'Team contribution and decision notes.' },
                { label: 'Risk', value: 'risk', content: 'Risk log and mitigation checklist.' }
              ]
            } />
          </CyberpunkCard>

          <CyberpunkCard className="span-6">
            <header slot="header">Quick actions</header>
            <div className="stack">
              <div className="row">
                <CyberpunkButton id="open-modal-btn" variant="primary" onClick={() => setOpenModal(true)}>Open modal</CyberpunkButton>
                <CyberpunkButton id="open-drawer-btn" variant="secondary" onClick={() => setOpenDrawer(true)}>Open drawer</CyberpunkButton>
              </div>

              <CyberpunkPopover placement="top" trigger="click">
                <button slot="trigger" style={{padding: "10px 14px", borderRadius: 0, border: "1px solid rgba(84,193,230,0.45)", background: "rgba(15,23,42,0.9)", color: "#f8fafc", cursor: "pointer"}}>More options</button>
                <div slot="content">
                  <div>Duplicate</div>
                  <div>Archive</div>
                  <div>Share</div>
                </div>
              </CyberpunkPopover>
            </div>
          </CyberpunkCard>
        </div>
      </CyberpunkContainer>
      <CyberpunkModal id="dashboard-modal" title="Create report" open={openModal} onClose={() => setOpenModal(false)}>
      <div className="stack">
        <CyberpunkAlert variant="success">Your draft was synced successfully.</CyberpunkAlert>
        <CyberpunkInput label="Report title" value="Launch checklist" placeholder="Type a name" />
        <div className="row">
          <CyberpunkButton variant="primary">Confirm</CyberpunkButton>
          <CyberpunkButton onClick={() => setOpenModal(false)} variant="secondary">Later</CyberpunkButton>
        </div>
      </div>
    </CyberpunkModal>

    <CyberpunkDrawer id="dashboard-drawer" title="Quick panel" position="right" width="360px" open={openDrawer} onClose={() => setOpenDrawer(false)}>
      <div className="stack">
        <CyberpunkBadge variant="warning" size="small">Needs review</CyberpunkBadge>
        <CyberpunkInput label="Task" value="Prepare rollout" placeholder="Task name" />
        <CyberpunkTextArea label="Summary" placeholder="Describe the update..." rows="4" />
        <CyberpunkButton variant="primary">Submit</CyberpunkButton>
      </div>
    </CyberpunkDrawer>
    </>
  )
}

export default App
