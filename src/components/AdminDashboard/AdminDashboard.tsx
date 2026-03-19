'use client';

import React, { useEffect, useState } from 'react';
import { auth, getCollectionData } from '@/lib/firebase';
import styles from './AdminDashboard.module.css';
import {
  Users,
  UserRound,
  LogOut,
  Search,
  LayoutDashboard,
  Stethoscope,
  UserCog,
  Plus,
  MoreVertical,
  Calendar,
  AlertCircle,
  Menu,
  X,
  Eye,
  Pencil,
  Trash2,
  RotateCcw,
  FileDown
} from 'lucide-react';
import ExcelJS from 'exceljs';
import Modal from '../Shared/Modal';
import UserModal from './UserModal';
import DataEntryForm from '../DataEntryForm/DataEntryForm';
import { updateFormData } from '@/lib/firebase';

interface Doctor {
  id: string;
  surname: string;
  givenName: string;
  middleName?: string;
  specialty: string;
  department: string;
  email: string;
  phicNo?: string;
  birTan?: string;
  contactNo?: string;
  privacyAccepted?: boolean;
  CreatedAt: any;
  CreatedBy: string;
  UpdatedAt: any;
  UpdatedBy: string;
  IsActive: boolean;
  CreatedFrom?: string;
}

interface User {
  id: string;
  Email: string;
  UserName: string;
  Role: string;
  Password?: string;
  CreatedAt: any;
  CreatedBy: string;
  UpdatedAt: any;
  UpdatedBy: string;
  IsActive: boolean;
  CreatedFrom?: string;
}

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'doctors' | 'users'>('doctors');
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isDoctorModalOpen, setIsDoctorModalOpen] = useState(false);
  
  // New state for actions
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [modalMode, setModalMode] = useState<'create' | 'edit' | 'view'>('create');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isRestoreModalOpen, setIsRestoreModalOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Filter states
  const [deptFilter, setDeptFilter] = useState('');
  const [specFilter, setSpecFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [roleFilter, setRoleFilter] = useState('');

  const handleAddNew = () => {
    setSelectedItem(null);
    setModalMode('create');
    if (activeTab === 'doctors') {
      setIsDoctorModalOpen(true);
    } else {
      setIsUserModalOpen(true);
    }
  };

  const handleView = (item: any) => {
    setSelectedItem(item);
    setModalMode('view');
    if (activeTab === 'doctors') {
      setIsDoctorModalOpen(true);
    } else {
      setIsUserModalOpen(true);
    }
  };

  const handleEdit = (item: any) => {
    setSelectedItem(item);
    setModalMode('edit');
    if (activeTab === 'doctors') {
      setIsDoctorModalOpen(true);
    } else {
      setIsUserModalOpen(true);
    }
  };

  const confirmDelete = (item: any) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const confirmRestore = (item: any) => {
    setSelectedItem(item);
    setIsRestoreModalOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedItem) return;
    
    setIsProcessing(true);
    try {
      const collectionName = activeTab === 'doctors' ? 'doctors' : 'M_Users';
      const result = await updateFormData(collectionName, selectedItem.id, { IsActive: false }, currentUser?.userName || currentUser?.email || 'System');
      
      if (result.success) {
        setIsDeleteModalOpen(false);
        fetchData(); // Refresh data
      } else {
        setError('Failed to deactivate record.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred during deactivation.');
    } finally {
      setIsProcessing(false);
      setSelectedItem(null);
    }
  };

  const handleRestore = async () => {
    if (!selectedItem) return;
    
    setIsProcessing(true);
    try {
      const collectionName = activeTab === 'doctors' ? 'doctors' : 'M_Users';
      const result = await updateFormData(collectionName, selectedItem.id, { IsActive: true }, currentUser?.userName || currentUser?.email || 'System');
      
      if (result.success) {
        setIsRestoreModalOpen(false);
        fetchData(); // Refresh data
      } else {
        setError('Failed to restore record.');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred during restoration.');
    } finally {
      setIsProcessing(false);
      setSelectedItem(null);
    }
  };

  useEffect(() => {
    const sessionStr = localStorage.getItem('admin_session');
    if (sessionStr) {
      try {
        const session = JSON.parse(sessionStr);
        setCurrentUser(session);
        fetchData();
      } catch (e) {
        localStorage.removeItem('admin_session');
        window.location.href = '/login';
      }
    } else {
      window.location.href = '/login';
    }
  }, [activeTab]);

  // Reset filters when changing tabs
  useEffect(() => {
    setDeptFilter('');
    setSpecFilter('');
    setStatusFilter('');
    setRoleFilter('');
  }, [activeTab]);

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const fetchData = async () => {
    setLoading(true);
    setError('');

    try {
      const collectionName = activeTab === 'doctors' ? 'doctors' : 'M_Users';
      const result = await getCollectionData(collectionName);

      if (result.success) {
        if (activeTab === 'doctors') {
          setDoctors(result.data as Doctor[]);
        } else {
          setUsers(result.data as User[]);
        }
      } else {
        setError('Failed to fetch data. Please check your connection.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_session');
    window.location.href = '/login';
  };

  const handleExportExcel = async () => {
    if (activeTab !== 'doctors') return;

    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Doctors Registry');

      // 1. Add Title Row
      const titleRow = worksheet.addRow(['VISAYASMED PHYSICIAN REGISTRY']);
      titleRow.font = { name: 'Arial Black', size: 18, bold: true, color: { argb: 'FFFFFFFF' } };
      worksheet.mergeCells('A1:K1');
      titleRow.alignment = { vertical: 'middle', horizontal: 'center' };
      titleRow.height = 45;
      titleRow.eachCell((cell) => {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF1E40AF' } // Dark Blue Background
        };
      });

      // 2. Add Subtitle Row
      const subtitleRow = worksheet.addRow([`PHYSICIAN REGISTRY MASTER LIST - Generated: ${new Date().toLocaleString()}`]);
      subtitleRow.font = { name: 'Arial', size: 11, bold: true, italic: true, color: { argb: 'FF1E293B' } };
      worksheet.mergeCells('A2:K2');
      subtitleRow.alignment = { vertical: 'middle', horizontal: 'center' };
      subtitleRow.height = 25;
      subtitleRow.eachCell((cell) => {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFF1F5F9' } // Light Grayish Blue Background
        };
      });

      // Add an empty row for spacing
      worksheet.addRow([]);

      // 3. Define Columns & Add Headers Explicitly
      const columnDefs = [
        { header: 'First Name', key: 'givenName', width: 22 },
        { header: 'Middle Name', key: 'middleName', width: 18 },
        { header: 'Last Name', key: 'surname', width: 22 },
        { header: 'Specialization', key: 'specialty', width: 28 },
        { header: 'Department', key: 'department', width: 22 },
        { header: 'Email Address', key: 'email', width: 35 },
        { header: 'Contact No', key: 'contactNo', width: 18 },
        { header: 'PHIC No', key: 'phicNo', width: 18 },
        { header: 'BIR TAN', key: 'birTan', width: 18 },
        { header: 'Status', key: 'status', width: 15 },
        { header: 'Registered Date', key: 'registeredDate', width: 25 }
      ];
      worksheet.columns = columnDefs;

      // EXPLICITLY set the header row values at Row 4
      const headerRow = worksheet.getRow(4);
      headerRow.values = columnDefs.map(col => col.header);

      // 4. Style Header Row (Row 4)
      headerRow.eachCell((cell) => {
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FF334155' } // Slate Gray Background
        };
        cell.font = {
          bold: true,
          color: { argb: 'FFFFFFFF' }, // White
          size: 11
        };
        cell.alignment = { vertical: 'middle', horizontal: 'center' };
        cell.border = {
          top: { style: 'medium', color: { argb: 'FF000000' } },
          left: { style: 'thin', color: { argb: 'FF000000' } },
          bottom: { style: 'medium', color: { argb: 'FF000000' } },
          right: { style: 'thin', color: { argb: 'FF000000' } }
        };
      });
      headerRow.height = 30;

      // 5. Add Data
      filteredDoctors.forEach(doc => {
        worksheet.addRow({
          givenName: doc.givenName,
          middleName: doc.middleName || '',
          surname: doc.surname,
          specialty: doc.specialty,
          department: doc.department || 'N/A',
          email: doc.email,
          contactNo: doc.contactNo || 'N/A',
          phicNo: doc.phicNo || 'N/A',
          birTan: doc.birTan || 'N/A',
          status: doc.IsActive !== false ? 'Active' : 'Inactive',
          registeredDate: formatDate(doc.CreatedAt)
        });
      });

      // 6. Style Data Rows
      worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
        if (rowNumber > 4) {
          row.eachCell((cell, colNumber) => {
            cell.alignment = { vertical: 'middle', horizontal: colNumber <= 3 || colNumber >= 10 ? 'center' : 'left' };
            cell.border = {
              top: { style: 'thin', color: { argb: 'FFE2E8F0' } },
              left: { style: 'thin', color: { argb: 'FFE2E8F0' } },
              bottom: { style: 'thin', color: { argb: 'FFE2E8F0' } },
              right: { style: 'thin', color: { argb: 'FFE2E8F0' } }
            };
            
            if (rowNumber % 2 === 0) {
              cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFF8FAFC' } // Light Gray Alternating
              };
            }

            // Special styling for Status column (J)
            if (colNumber === 10) {
              if (cell.value === 'Active') {
                cell.font = { color: { argb: 'FF059669' }, bold: true };
              } else if (cell.value === 'Inactive') {
                cell.font = { color: { argb: 'FFDC2626' }, bold: true };
              }
            }
          });
          row.height = 22;
        }
      });

      // 7. Write to Buffer and Download
      const buffer = await workbook.xlsx.writeBuffer();
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = url;
      anchor.download = `VisayasMed_Doctors_${new Date().toISOString().split('T')[0]}.xlsx`;
      anchor.click();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Export failed:', err);
      setError('Failed to generate Excel file.');
    }
  };

  const formatDate = (timestamp: any) => {
    if (!timestamp) return 'N/A';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Extract unique departments and specializations for filters
  const departments = Array.from(new Set(doctors.map(doc => doc.department))).filter(Boolean).sort();
  const specializations = Array.from(new Set(doctors.map(doc => doc.specialty))).filter(Boolean).sort();
  const roles = ['Administrator', 'Staff', 'Doctor (Access)'];

  const filteredDoctors = doctors.filter(doc => {
    const matchesSearch = searchQuery === '' || 
      `${doc.givenName} ${doc.surname}`.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDept = !deptFilter || doc.department === deptFilter;
    const matchesSpec = !specFilter || doc.specialty === specFilter;
    const matchesStatus = !statusFilter || (statusFilter === 'Active' ? doc.IsActive !== false : doc.IsActive === false);
    
    return (matchesSearch && matchesDept && matchesSpec && matchesStatus);
  }).sort((a, b) => {
    if (a.IsActive === b.IsActive) return 0;
    return a.IsActive !== false ? -1 : 1;
  });

  const filteredUsers = users.filter(user => {
    const matchesSearch = searchQuery === '' ||
      user.UserName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.Role.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRole = !roleFilter || user.Role === roleFilter;
    const matchesStatus = !statusFilter || (statusFilter === 'Active' ? user.IsActive !== false : user.IsActive === false);
    
    return (matchesSearch && matchesRole && matchesStatus);
  }).sort((a, b) => {
    if (a.IsActive === b.IsActive) return 0;
    return a.IsActive !== false ? -1 : 1;
  });

  const paginatedData = activeTab === 'doctors'
    ? filteredDoctors.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : filteredUsers.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const totalPages = Math.ceil((activeTab === 'doctors' ? filteredDoctors.length : filteredUsers.length) / itemsPerPage);

  const Pagination = () => {
    if ((activeTab === 'doctors' ? filteredDoctors.length : filteredUsers.length) === 0) return null;

    return (
      <div className={styles.pagination}>
        <div className={styles.paginationLeft}>
          <span className={styles.pageInfo}>
            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, (activeTab === 'doctors' ? filteredDoctors.length : filteredUsers.length))} of {activeTab === 'doctors' ? filteredDoctors.length : filteredUsers.length} entries
          </span>
          <div className={styles.pageSizeControl}>
            <label htmlFor="pageSize">Items per page:</label>
            <select
              id="pageSize"
              value={itemsPerPage}
              onChange={(e) => {
                setItemsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className={styles.pageSizeSelector}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>

        <div className={styles.paginationRight}>
          <button
            className={styles.pageBtn}
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(prev => prev - 1)}
          >
            Previous
          </button>

          {/* Show a limited number of page buttons if many pages exist */}
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter(page => {
              if (totalPages <= 7) return true;
              return page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1);
            })
            .map((page, index, array) => (
              <React.Fragment key={page}>
                {index > 0 && array[index - 1] !== page - 1 && <span className={styles.dots}>...</span>}
                <button
                  className={`${styles.pageBtn} ${currentPage === page ? styles.active : ''}`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              </React.Fragment>
            ))
          }

          <button
            className={styles.pageBtn}
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage(prev => prev + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  };

  const totalActive = activeTab === 'doctors'
    ? doctors.filter(doc => doc.IsActive !== false).length
    : users.filter(user => user.IsActive !== false).length;

  const totalInactive = activeTab === 'doctors'
    ? doctors.filter(doc => doc.IsActive === false).length
    : users.filter(user => user.IsActive === false).length;

  return (
    <div className={styles.dashboardWrapper}>
      {/* Sidebar */}
      <aside className={`${styles.sidebar} ${isMobileMenuOpen ? styles.mobileOpen : ''}`}>
        <div className={styles.sidebarLogo}>
          <img 
            src="/Visayas Medical.png" 
            alt="VisayasMed Logo" 
            className={styles.sidebarLogoImg}
          />
          <h2>VisayasMed Hospital</h2>
        </div>

        <nav className={styles.sidebarNav}>
          <button
            className={`${styles.navItem} ${activeTab === 'doctors' ? styles.active : ''}`}
            onClick={() => { setActiveTab('doctors'); setIsMobileMenuOpen(false); }}
          >
            <Users size={20} />
            <span>Doctors List</span>
          </button>
          <button
            className={`${styles.navItem} ${activeTab === 'users' ? styles.active : ''}`}
            onClick={() => { setActiveTab('users'); setIsMobileMenuOpen(false); }}
          >
            <UserCog size={20} />
            <span>System Users</span>
          </button>

        </nav>

        <div className={styles.sidebarFooter}>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            <LogOut size={18} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <button
              className={styles.mobileMenuBtn}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <h1>{activeTab === 'doctors' ? 'Doctors List' : 'System Users'}</h1>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.searchBar}>
              <Search size={18} color="var(--text-secondary)" />
              <input
                type="text"
                placeholder={`Search ${activeTab}...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
                <p style={{ fontWeight: 700 }}>{currentUser?.userName || 'Admin'}</p>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.75rem' }}>{currentUser?.role || 'Administrator'}</p>
              </div>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <UserRound size={20} color="#64748b" />
              </div>
            </div>
          </div>
        </header>

        <div className={styles.contentArea}>
          {/* Stats Cards */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3b82f6' }}>
                <Users size={24} />
              </div>
              <div className={styles.statInfo}>
                <h3>Total {activeTab === 'doctors' ? 'Doctors' : 'Users'}</h3>
                <p>{activeTab === 'doctors' ? doctors.length : users.length}</p>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10b981' }}>
                <Calendar size={24} />
              </div>
              <div className={styles.statInfo}>
                <h3>Total Active</h3>
                <p>{totalActive}</p>
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon} style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#ef4444' }}>
                <AlertCircle size={24} />
              </div>
              <div className={styles.statInfo}>
                <h3>Total Inactive</h3>
                <p>{totalInactive}</p>
              </div>
            </div>
          </div>

          {error && (
            <div className={styles.errorBox}>
              <AlertCircle size={20} />
              {error}
            </div>
          )}

          {/* Table Section */}
          <section className={styles.tableSection}>
            <div className={styles.tableHeader}>
              <h2>{activeTab === 'doctors' ? 'Physician List' : 'System Accounts'}</h2>
              
              <div className={styles.tableActions}>
                <div className={styles.filtersGroup}>
                  {activeTab === 'doctors' ? (
                    <>
                      <select 
                        value={deptFilter} 
                        onChange={(e) => setDeptFilter(e.target.value)}
                        className={styles.filterSelect}
                      >
                        <option value="">All Departments</option>
                        {departments.map(dept => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                      <select 
                        value={specFilter} 
                        onChange={(e) => setSpecFilter(e.target.value)}
                        className={styles.filterSelect}
                      >
                        <option value="">All Specializations</option>
                        {specializations.map(spec => (
                          <option key={spec} value={spec}>{spec}</option>
                        ))}
                      </select>
                    </>
                  ) : (
                    <select 
                      value={roleFilter} 
                      onChange={(e) => setRoleFilter(e.target.value)}
                      className={styles.filterSelect}
                    >
                      <option value="">All Roles</option>
                      {roles.map(role => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  )}
                  <select 
                    value={statusFilter} 
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className={styles.filterSelect}
                  >
                    <option value="">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div className={styles.buttonGroup}>
                  {activeTab === 'doctors' && (
                    <button 
                      onClick={handleExportExcel}
                      className={styles.exportBtn}
                      title="Export to Excel"
                    >
                      <FileDown size={18} />
                      Export Excel
                    </button>
                  )}
                  <button 
                    onClick={handleAddNew}
                    className={styles.addNewBtn}
                  >
                    <Plus size={18} />
                    Add {activeTab === 'doctors' ? 'Doctor' : 'User'}
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.tableContainer}>
              {loading ? (
                <div className={styles.loadingContainer}>
                  <div className={styles.spinner}></div>
                  <p>Fetching records...</p>
                </div>
              ) : (
                <table className={styles.table}>
                  <thead>
                    {activeTab === 'doctors' ? (
                      <tr>
                        <th>Physician Name</th>
                        <th>Specialization</th>
                        <th>Email Address</th>
                        <th>Created At</th>
                        <th>Status</th>
                        <th style={{ width: '120px', textAlign: 'center' }}>Action</th>
                      </tr>
                    ) : (
                      <tr>
                        <th>Username</th>
                        <th>Email Address</th>
                        <th>Account Role</th>
                        <th>Audit Details</th>
                        <th>Status</th>
                        <th style={{ width: '120px', textAlign: 'center' }}>Action</th>
                      </tr>
                    )}
                  </thead>
                  <tbody>
                    {activeTab === 'doctors' ? (
                      paginatedData.length > 0 ? (
                        (paginatedData as Doctor[]).map((doc) => (
                          <tr key={doc.id}>
                            <td>
                              <div className={styles.docName}>
                                <span>{doc.surname}, {doc.givenName}</span>
                                <span>{doc.department || 'N/A'}</span>
                              </div>
                            </td>
                            <td>{doc.specialty}</td>
                            <td>{doc.email}</td>
                            <td>
                              <div className={styles.auditLog}>
                                <span>{formatDate(doc.CreatedAt)}</span>
                                <span className={styles.author}>by {doc.CreatedBy}</span>
                              </div>
                            </td>
                            <td>
                               <span className={`${styles.statusBadge} ${doc.IsActive !== false ? styles.statusActive : styles.statusInactive}`}>
                                 {doc.IsActive !== false ? 'Active' : 'Inactive'}
                               </span>
                            </td>
                            <td>
                               <div className={styles.actionButtons}>
                                 <button onClick={() => handleView(doc)} className={styles.actionBtn} title="View Details">
                                   <Eye size={18} />
                                 </button>
                                 <button onClick={() => handleEdit(doc)} className={styles.actionBtn} title="Edit">
                                   <Pencil size={18} />
                                 </button>
                                 {doc.IsActive !== false ? (
                                   <button 
                                     onClick={() => confirmDelete(doc)} 
                                     className={`${styles.actionBtn} ${styles.deleteBtn}`} 
                                     title="Deactivate"
                                   >
                                     <Trash2 size={18} />
                                   </button>
                                 ) : (
                                   <button 
                                     onClick={() => confirmRestore(doc)} 
                                     className={styles.actionBtn} 
                                     title="Restore"
                                     style={{ color: '#10b981', borderColor: '#10b981' }}
                                   >
                                     <RotateCcw size={18} />
                                   </button>
                                 )}
                               </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr><td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>No doctors found matching your search.</td></tr>
                      )
                    ) : (
                      paginatedData.length > 0 ? (
                        (paginatedData as User[]).map((user) => (
                          <tr key={user.id}>
                            <td>
                              <div style={{ fontWeight: 600 }}>{user.UserName}</div>
                            </td>
                            <td>{user.Email}</td>
                            <td>
                              <span style={{
                                padding: '4px 10px',
                                background: '#f1f5f9',
                                borderRadius: '6px',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                                textTransform: 'capitalize'
                              }}>
                                {user.Role}
                              </span>
                            </td>
                            <td>
                              <div className={styles.auditLog}>
                                <span>Added: {formatDate(user.CreatedAt)}</span>
                                <span className={styles.author}>Last Update: {formatDate(user.UpdatedAt)}</span>
                              </div>
                            </td>
                            <td>
                               <span className={`${styles.statusBadge} ${user.IsActive !== false ? styles.statusActive : styles.statusInactive}`}>
                                 {user.IsActive !== false ? 'Active' : 'Inactive'}
                               </span>
                            </td>
                            <td>
                               <div className={styles.actionButtons}>
                                 <button onClick={() => handleView(user)} className={styles.actionBtn} title="View Details">
                                   <Eye size={18} />
                                 </button>
                                 <button onClick={() => handleEdit(user)} className={styles.actionBtn} title="Edit">
                                   <Pencil size={18} />
                                 </button>
                                 {user.IsActive !== false ? (
                                   <button 
                                     onClick={() => confirmDelete(user)} 
                                     className={`${styles.actionBtn} ${styles.deleteBtn}`} 
                                     title="Deactivate"
                                   >
                                     <Trash2 size={18} />
                                   </button>
                                 ) : (
                                   <button 
                                     onClick={() => confirmRestore(user)} 
                                     className={styles.actionBtn} 
                                     title="Restore"
                                     style={{ color: '#10b981', borderColor: '#10b981' }}
                                   >
                                     <RotateCcw size={18} />
                                   </button>
                                 )}
                               </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr><td colSpan={6} style={{ textAlign: 'center', padding: '3rem', color: 'var(--text-muted)' }}>No users found matching your search.</td></tr>
                      )
                    )}
                  </tbody>
                </table>
              )}
            </div>
            <Pagination />
          </section>
        </div>
      </main>

      {/* Doctor Modal (Create/Edit/View) */}
      <Modal
        isOpen={isDoctorModalOpen}
        onClose={() => setIsDoctorModalOpen(false)}
        title={modalMode === 'view' ? 'Physician Details' : modalMode === 'edit' ? 'Update Physician Info' : 'Register New Physician'}
      >
        <DataEntryForm 
          isModal={true} 
          mode={modalMode}
          initialData={selectedItem}
          currentUserEmail={currentUser?.userName || currentUser?.email || 'System'}
          onCancel={() => setIsDoctorModalOpen(false)}
          onSuccess={() => {
            setIsDoctorModalOpen(false);
            fetchData();
          }}
        />
      </Modal>

      {/* User Modal (Create/Edit/View) */}
      <Modal
        isOpen={isUserModalOpen}
        onClose={() => setIsUserModalOpen(false)}
        title={modalMode === 'view' ? 'Account Details' : modalMode === 'edit' ? 'Update Staff Account' : 'Create Staff Account'}
      >
        <UserModal 
          mode={modalMode}
          initialData={selectedItem}
          onCancel={() => setIsUserModalOpen(false)}
          currentUserEmail={currentUser?.userName || currentUser?.email || 'System'}
          onSuccess={() => {
            setIsUserModalOpen(false);
            // Re-sync session info in case the current user was edited
            const sessionStr = localStorage.getItem('admin_session');
            if (sessionStr) {
              try {
                const session = JSON.parse(sessionStr);
                setCurrentUser(session);
              } catch (e) {
                console.error('Failed to parse session during re-sync');
              }
            }
            fetchData();
          }}
        />
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        title="Confirm Deactivation"
      >
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <div style={{ color: '#ef4444', marginBottom: '1rem' }}>
            <AlertCircle size={48} style={{ margin: '0 auto' }} />
          </div>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Are you sure you want to deactivate this {activeTab === 'doctors' ? 'doctor' : 'user'}? 
            This will mark them as inactive in the system.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button 
              onClick={() => setIsDeleteModalOpen(false)}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                background: 'white',
                cursor: 'pointer'
              }}
              disabled={isProcessing}
            >
              Cancel
            </button>
            <button 
              onClick={handleDelete}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                background: '#ef4444',
                color: 'white',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Yes, Deactivate'}
            </button>
          </div>
        </div>
      </Modal>

      {/* Restore Confirmation Modal */}
      <Modal
        isOpen={isRestoreModalOpen}
        onClose={() => setIsRestoreModalOpen(false)}
        title="Confirm Restoration"
      >
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          <div style={{ color: '#10b981', marginBottom: '1rem' }}>
            <RotateCcw size={48} style={{ margin: '0 auto' }} />
          </div>
          <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Are you sure you want to restore this {activeTab === 'doctors' ? 'doctor' : 'user'}? 
            This will mark them as active again.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <button 
              onClick={() => setIsRestoreModalOpen(false)}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '8px',
                border: '1px solid #e2e8f0',
                background: 'white',
                cursor: 'pointer'
              }}
              disabled={isProcessing}
            >
              Cancel
            </button>
            <button 
              onClick={handleRestore}
              style={{
                padding: '0.6rem 1.5rem',
                borderRadius: '8px',
                border: 'none',
                background: '#10b981',
                color: 'white',
                fontWeight: 600,
                cursor: 'pointer'
              }}
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Yes, Restore'}
            </button>
          </div>
        </div>
      </Modal>

      {/* Sidebar Overlay for Mobile */}
      <div 
        className={`${styles.sidebarOverlay} ${isMobileMenuOpen ? styles.active : ''}`}
        onClick={() => setIsMobileMenuOpen(false)}
      />
    </div>
  );
};

export default AdminDashboard;
