import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import Link from "next/link";
import { Menu } from "antd";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container content">
        <h3 className="logo">
          <Link href="https://switch.com.iq/en/home-2/">Switch</Link>
        </h3>
        <ol className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <Menu
              key="Hyperpay"
              mode="horizontal"
              title="Hyperpay"
              defaultSelectedKeys={["first"]}
            >
              <Menu.Item key="first" icon={<MailOutlined />}>
                Hyperpay
              </Menu.Item>
              <Menu.SubMenu
                key="SubMenu"
                title="Operation On - Hyperpay"
                icon={<SettingOutlined />}
              >
                <Menu.Item key="two" icon={<AppstoreOutlined />}>
                  <a href="/hyperpay">Payment From</a>
                </Menu.Item>
                <Menu.Item key="three" icon={<AppstoreOutlined />}>
                  <a href="/hyperpay/token">Tokenazation From</a>
                </Menu.Item>
                {/* <Menu.Item key="three" icon={<AppstoreOutlined />}></Menu.Item> */}
              </Menu.SubMenu>
            </Menu>
          </li>
          <li>
            <a href="http://127.0.0.1:5500/newTesting.html">MPGS</a>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default Navbar;
