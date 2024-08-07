// AdminPanel.js
import React from 'react';

const AdminPanel = () => {
  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
        <li><a href="/admin/books">Manage Books</a></li>
        <li><a href="/admin/users">Manage Users</a></li>
        <li><a href="/admin/orders">Manage Orders</a></li>
      </ul>
    </div>
  );
};

export default AdminPanel;
