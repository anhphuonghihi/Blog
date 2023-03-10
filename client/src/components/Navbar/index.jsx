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
import mvb from "../../assets/mvb-newlogo.svg";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useWindowSize } from "@internals/hooks";
import { useEffect, useState } from "react";
function NavScrollExample({ edu }) {
  const [menu, setMenu] = useState(false);
  const size = useWindowSize();
  useEffect(() => {
    if (size.width < 768) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  }, [size]);

  return (
    <NavbarContainer dropbar-mode="push" className={styles["menu"]}>
      {!menu && (
        <Navbar className={styles["container"]}>
          <NavItem>
            <Link href="/">
              <Image src={logo} width="171" height="28" alt="logo" />
              {edu && <div className={styles["edu-logo"]}>Education</div>}
            </Link>
          </NavItem>
          <Navbar className={styles["container"]}>
            <NavItem className={styles["li"]}>
              <Link className={styles["link"]}>Giới thiệu</Link>
            </NavItem>
            <NavItem className={styles["li"]}>
              <Link className={styles["link"]}>
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
              <Link className={styles["link"]}>
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
            {!edu && (
              <NavItem className={styles["li"]}>
                <Link className={styles["link"]}>Phân phối và bảo hành</Link>
              </NavItem>
            )}
          </Navbar>
          <Navbar className={styles["right"]}>
            {!edu && (
              <>
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
              </>
            )}
            {edu && (
              <>
                <NavItem>
                  <Link className={styles["link-br"]}>
                    <img src={mvb} alt="" />
                    Dùng Thử Ngay
                  </Link>
                </NavItem>
                <NavItem>
                  <Link className={styles["link-icon"]}>
                    <span>Liên hệ với chúng tôi</span>
                    <EmailOutlinedIcon className={styles["email"]} />
                  </Link>
                </NavItem>
              </>
            )}
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
