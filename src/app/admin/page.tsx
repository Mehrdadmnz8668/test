'use client';

import React, { useState } from 'react';
import { AdminSectionId, AdminShell } from '@/components/layout/AdminShell';
import { AdminWorkspace } from '@/components/admin/AdminWorkspace';

export default function AdminPage() {
  const [activeSection, setActiveSection] = useState<AdminSectionId>('overview');

  return (
    <AdminShell activeSection={activeSection} onSelectSection={setActiveSection}>
      <AdminWorkspace section={activeSection} onNavigateSection={setActiveSection} />
    </AdminShell>
  );
}
