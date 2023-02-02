import {
  NavbarContainer,
  Navbar,
  Link,
  NavbarDropdown,
  Image,
  Flex,
  NavItem,
  CardTitle,
} from "uikit-react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.scss";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
function NavScrollExample() {
  return (
    <NavbarContainer dropbar-mode="push" className={styles["menu"]}>
      <Navbar className={styles["container"]}>
        <NavItem>
          <Link href="/">
            <Image
              src={logo}
              width="171"
              height="28"
              alt="logo"
            />
          </Link>
        </NavItem>
        <Navbar className={styles["container"]}>
          <NavItem className={styles["li"]}>
            <Link>Giới thiệu</Link>
          </NavItem>
          <NavItem className={styles["li"]}>
            <Link className={styles["dropdown"]}>
              Giải pháp
              <KeyboardArrowDownIcon />
            </Link>

            <NavbarDropdown className={styles["drop"]}>
              <Flex>
                <div className={styles["col6"]}>
                  <span>Xem thêm</span>
                </div>
                <div className={styles["col6"]}></div>
              </Flex>
            </NavbarDropdown>
          </NavItem>
          <NavItem className={styles["li"]}>
            <Link>
              Hỗ trợ <KeyboardArrowDownIcon />
            </Link>
            <NavbarDropdown>
              <NavItem>
                <Link href="/">Xem thêm</Link>
              </NavItem>
            </NavbarDropdown>
          </NavItem>
          <NavItem className={styles["li"]}>
            <Link>Phân phối và bảo hành</Link>
          </NavItem>
        </Navbar>
        <Navbar className={styles["right"]}>
          <NavItem>
            <Link>
              <SearchIcon className={styles["search"]} />
            </Link>
          </NavItem>
          <NavItem>
            <Link>
              <span>Liên hệ</span>
              <EmailOutlinedIcon className={styles["email"]} />
            </Link>
          </NavItem>
        </Navbar>
      </Navbar>
    </NavbarContainer>
  );
}

export default NavScrollExample;
