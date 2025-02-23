import { useEffect } from "react";
import { Row, Col, Breadcrumb, Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { LogoutOutlined } from '@ant-design/icons';

const toggler = [
  <svg
    width="20"
    height="20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    key={0}
  >
    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
  </svg>,
];

function Header({ name, subName, onPress }) {
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0));

  const handleLogout = () => {
    // Aquí puedes agregar la lógica de logout
    navigate('/sign-in');
  };

  const breadcrumbItems = [
    {
      title: <NavLink to="/">Pages</NavLink>,
    },
    {
      title: name.replace("/", ""),
      style: { textTransform: "capitalize" },
    },
  ];

  return (
    <>
      <Row gutter={[24, 0]}>
        <Col span={24} md={6}>
          <Breadcrumb items={breadcrumbItems} />
          <div className="ant-page-header-heading">
            <span
              className="ant-page-header-heading-title"
              style={{ textTransform: "capitalize" }}
            >
              {subName.replace("/", "")}
            </span>
          </div>
        </Col>
        <Col span={24} md={18} className="header-control">
          <Button
            type="link"
            className="sidebar-toggler"
            onClick={() => onPress()}
          >
            {toggler}
          </Button>
          <Button 
            type="link"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            style={{ fontSize: '16px', color: '#8c8c8c' }}
          >
            Logout
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default Header;
