import * as React from "react";
import { NavLink, Routes, Route, useParams } from "react-router-dom";

const AdminPage: React.FC = () => {
  return (
    <div className="page-container">
      <h1>Admin Panel</h1>
      <ul className="admin-sections">
        <li key="users">
          <NavLink
            to={`/admin/users`}
            className={({ isActive }) => (isActive ? "admin-link-active" : "")}
          >
            Users
          </NavLink>
        </li>
        <li key="products">
          <NavLink
            to={`/admin/products`}
            className={({ isActive }) => (isActive ? "admin-link-active" : "")}
          >
            Products
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="users" element={<AdminUsers />} />
        <Route path="products" element={<AdminProducts />} />
        <Route path="/admin/users/:id" element={<AdminUser />} />
      </Routes>
    </div>
  );
};

const AdminProducts: React.FC = () => {
  return <div>Some options to administer products</div>;
};

interface IUser {
  id: number;
  name: string;
  isAdmin: boolean;
}
const adminUsersData: IUser[] = [
  { id: 1, name: "Fred", isAdmin: true },
  { id: 2, name: "Bob", isAdmin: false },
  { id: 3, name: "Jane", isAdmin: true },
];
const AdminUsers: React.FC = () => {
  return (
    <div>
      <ul className="admin-sections">
        {adminUsersData.map((user) => (
          <li key={user.id}>
            <NavLink
              to={`/admin/users/${user.id}`}
              className={({ isActive }) =>
                isActive ? "admin-link-active" : ""
              }
            >
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const AdminUser: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  let user: IUser | undefined;

  if (id) {
    const userId: number = parseInt(id, 10);
    user = adminUsersData.find((u) => u.id === userId);
  } else {
    return null;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <div>
        <b>Id: </b>
        <span>{user.id.toString()}</span>
      </div>
      <div>
        <b>Is Admin: </b>
        <span>{user.isAdmin.toString()}</span>
      </div>
    </div>
  );
};

export default AdminPage;
