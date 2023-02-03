import {
  NavbarContainer,
  Navbar,
  Link,
  NavbarDropdown,
  Image,
  Flex,
  NavItem,
} from "uikit-react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navbar.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useWindowSize } from "@internals/hooks";
import { useEffect, useState } from "react";
function NavScrollExample() {
  const [menu, setMenu] = useState(false);
  const size = useWindowSize();
  useEffect(() => {
    if (size.width < 768) {
      setMenu(true);
    }
  }, [size]);

  return (
    <NavbarContainer dropbar-mode="push" className={styles["menu"]}>
      {!menu && (
        <Navbar className={styles["container"]}>
          <NavItem>
            <Link href="/">
              <Image src={logo} width="171" height="28" alt="logo" />
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
          <button onClick={() => setMenu(true)}>
            <CloseIcon />
          </button>
        </Navbar>
      )}
      {menu && (
        <button onClick={() => setMenu(!menu)}>
          <MenuIcon />
        </button>
      )}
    </NavbarContainer>
  );
}

export default NavScrollExample;
