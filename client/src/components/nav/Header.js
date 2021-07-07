import React, { useState } from "react";
import { Avatar, Menu } from "antd";
import {
  AppstoreOutlined,
  HomeOutlined,
  ShoppingOutlined,
  LockOutlined,
  UserOutlined,
  UserAddOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import Search from "../forms/Search";

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
    <>
      <Menu onClick={handleClick} selectedKeys={null} mode="horizontal">
        <Item key="home" icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Item>
        <Item key="shop" icon={<ShoppingOutlined />}>
          <Link to="/shop">Shop</Link>
        </Item>

        <SubMenu
          key="username"
          icon={
            user ? (
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                icon={<UserOutlined />}
              />
            ) : (
              <LockOutlined />
            )
          }
          title={user && user.email ? user.email.split("@")[0] : "Welcome"}
          className="float-right"
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
        <span className="float-right p-1">
          <Search />
        </span>
      </Menu>
    </>
  );
};

export default Header;
