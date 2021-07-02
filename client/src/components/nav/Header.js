import React, { useState } from "react";
import { Avatar, Menu } from "antd";
import {
  AppstoreOutlined,
  HomeOutlined,
  LockOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

const { SubMenu, Item } = Menu;

const Header = () => {
  const [current, setCurrent] = useState("");

  let dispatch = useDispatch();
  let { user } = useSelector((state) => ({ ...state }));

  let history = useHistory();

  const handleClick = () => {
    setCurrent(current);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    history.push("/login");
  };

  return (
    <Menu onClick={handleClick} selectedKeys={null} mode="horizontal">
      <Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Home</Link>
      </Item>

      <SubMenu
        key="username"
        icon={user ? <Avatar icon={<UserOutlined />} /> : <LockOutlined />}
        title={user && user.email ? user.email.split("@")[0] : "Welcome"}
      >
        {!user && (
          <Item key="register" icon={<UserAddOutlined />}>
            <Link to="/register">Register</Link>
          </Item>
        )}
        {!user && (
          <Item key="login" icon={<UserOutlined />}>
            <Link to="/login">Login</Link>
          </Item>
        )}
        {user && user.role === "subscriber" && (
          <Item key="dashboard" icon={<AppstoreOutlined />}>
            <Link to="/user/history">Dashboard</Link>
          </Item>
        )}
        {user && user.role === "admin" && (
          <Item key="dashboard" icon={<AppstoreOutlined />}>
            <Link to="/admin/dashboard">Dashboard</Link>
          </Item>
        )}
        {user && (
          <Item key="logout" icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        )}
      </SubMenu>
    </Menu>
  );
};

export default Header;
