import { useState, useEffect, type JSX } from 'react';
import { useDebounce } from './hooks/useDebounce'; // Perfect! No .js extension anymore
import './App.css';

interface Lead {
  _id: string;
  name: string;
  email: string;
  status: 'New' | 'Contacted' | 'Qualified' | 'Lost';
  source: 'Website' | 'Instagram' | 'Referral';
  createdAt: string;
}

function App(): JSX.Element {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('');
  const [sourceFilter, setSourceFilter] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const debouncedSearch = useDebounce<string>(search, 500);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const mockLeads: Lead[] = [
        { _id: '1', name: 'Rahul Sharma', email: 'rahul@example.com', status: 'Qualified', source: 'Instagram', createdAt: new Date().toISOString() },
        { _id: '2', name: 'Jessica Vance', email: 'jess@example.com', status: 'New', source: 'Website', createdAt: new Date().toISOString() }
      ];

      const filtered = mockLeads.filter(lead => {
        const matchesSearch = lead.name.toLowerCase().includes(debouncedSearch.toLowerCase()) || lead.email.toLowerCase().includes(debouncedSearch.toLowerCase());
        const matchesStatus = statusFilter ? lead.status === statusFilter : true;
        const matchesSource = sourceFilter ? lead.source === sourceFilter : true;
        return matchesSearch && matchesStatus && matchesSource;
      });

      setLeads(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [debouncedSearch, statusFilter, sourceFilter]);

  return (
    <div className="dashboard-container" style={{ padding: '24px', fontFamily: 'sans-serif', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ margin: 0, color: '#111827' }}>Smart Leads Dashboard</h1>
          <p style={{ margin: '4px 0 0 0', color: '#6b7280' }}>Manage corporate client acquisitions</p>
        </div>
        <button style={{ backgroundColor: '#2563eb', color: '#fff', border: 'none', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 }}>
          + Add New Lead
        </button>
      </header>

      <section style={{ display: 'flex', gap: '12px', background: '#fff', padding: '16px', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', marginBottom: '24px' }}>
        <input 
          type="text" 
          placeholder="Search by Name or Email (Debounced)..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 2, padding: '8px 12px', borderRadius: '6px', border: '1px solid #d1d5db' }}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', border: '1px solid #d1d5db' }}>
          <option value="">All Statuses</option>
          <option value="New">New</option>
          <option value="Contacted">Contacted</option>
          <option value="Qualified">Qualified</option>
          <option value="Lost">Lost</option>
        </select>
        <select value={sourceFilter} onChange={(e) => setSourceFilter(e.target.value)} style={{ flex: 1, padding: '8px 12px', borderRadius: '6px', border: '1px solid #d1d5db' }}>
          <option value="">All Sources</option>
          <option value="Website">Website</option>
          <option value="Instagram">Instagram</option>
          <option value="Referral">Referral</option>
        </select>
      </section>

      {isLoading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#4b5563' }}>Loading synchronized leads database...</div>
      ) : leads.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px', background: '#fff', borderRadius: '8px', color: '#9ca3af' }}>No records found matching filter constraints.</div>
      ) : (
        <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead style={{ backgroundColor: '#f3f4f6' }}>
              <tr>
                <th style={{ padding: '12px 16px', color: '#374151' }}>Name</th>
                <th style={{ padding: '12px 16px', color: '#374151' }}>Email</th>
                <th style={{ padding: '12px 16px', color: '#374151' }}>Status</th>
                <th style={{ padding: '12px 16px', color: '#374151' }}>Source</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(lead => (
                <tr key={lead._id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 500 }}>{lead.name}</td>
                  <td style={{ padding: '12px 16px', color: '#4b5563' }}>{lead.email}</td>
                  <td style={{ padding: '12px 16px' }}>
                    <span style={{ backgroundColor: lead.status === 'Qualified' ? '#d1fae5' : '#e0e7ff', color: lead.status === 'Qualified' ? '#065f46' : '#3730a3', padding: '4px 8px', borderRadius: '9999px', fontSize: '12px', fontWeight: 500 }}>
                      {lead.status}
                    </span>
                  </td>
                  <td style={{ padding: '12px 16px', color: '#4b5563' }}>{lead.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;