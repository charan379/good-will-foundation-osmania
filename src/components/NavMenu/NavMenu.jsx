import { Menu, Typography } from "antd";
import useResponsive from "../../hooks/useResponsive";
import useNavMobileDrawer from "../../context/useNavMobileDrawer";

const NavLabel = ({ name, isLink, href, block, inline }) => {
  const { closeDrawer, isOpen } = useNavMobileDrawer();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: block ?? "center",
        inline: inline ?? "center",
      });
    }
  };

  const handleOnClick = () => {
    if (isOpen) {
      closeDrawer();
    }
    setTimeout(() => {
      scrollToSection(href);
    }, 100);
  };

  if (isLink && href) {
    return (
      <>
        <Typography.Link onClick={handleOnClick}>{name}</Typography.Link>
      </>
    );
  } else {
    return name;
  }
};

const NavMenu = () => {
  const { isMobile } = useResponsive();
  return (
    <Menu
      mode={isMobile ? "inline" : "horizontal"}
      theme="light"
      defaultSelectedKeys={["1"]}
      items={[
        {
          key: "1",
          title: "Home",
          label: (
            <NavLabel
              name={"Home"}
              isLink={true}
              href={"home"}
              block={"start"}
              inline={"start"}
            />
          ),
        },
        {
          key: "2",
          title: "About us",
          label: <NavLabel name={"About Us"} isLink={true} href={"about-us"} />,
          children: [
            // {
            //   key: "2.1",
            //   title: "Our Mission",
            //   label: (
            //     <NavLabel
            //       name={"Our Mission"}
            //       isLink={true}
            //       href={"our-goals"}
            //     />
            //   ),
            // },
            {
              key: "2.3",
              title: "Our Goals",
              label: (
                <NavLabel name={"Our Goals"} isLink={true} href={"our-goals"} />
              ),
            },
            {
              key: "2.4",
              title: "How It All Began",
              label: (
                <NavLabel
                  name={"How it all began"}
                  isLink={true}
                  href={"how-it-all-began"}
                />
              ),
            },
            {
              key: "2.5",
              title: "Support We Offer",
              label: (
                <NavLabel
                  name={"Support We Offer"}
                  isLink={true}
                  href={"how-we-help"}
                />
              ),
            },
            {
              key: "2.6",
              title: "Mission Statement",
              label: (
                <NavLabel
                  name={"Mission Statement"}
                  isLink={true}
                  href={"mission-statement"}
                />
              ),
            },
          ],
        },
        {
          key: "7",
          title: "Our Supporters",
          label: (
            <NavLabel
              name={"Our Supporters"}
              isLink={true}
              href={"our-supporters"}
            />
          ),
        },
        {
          key: "3",
          title: "Achivements",
          label: (
            <NavLabel
              name={"Achivements"}
              isLink={true}
              href={"achivements-2020"}
              block={"center"}
              inline={"center"}
            />
          ),
          children: [
            {
              key: "3.1",
              title: "2024",
              label: (
                <NavLabel
                  name={"Year 2024"}
                  isLink={true}
                  href={"achivements-2024"}
                />
              ),
            },
            {
              key: "3.2",
              title: "2023",
              label: (
                <NavLabel
                  name={"Year 2023"}
                  isLink={true}
                  href={"achivements-2023"}
                />
              ),
            },
            {
              key: "3.3",
              title: "2022",
              label: (
                <NavLabel
                  name={"Year 2022"}
                  isLink={true}
                  href={"achivements-2022"}
                />
              ),
            },
            {
              key: "3.4",
              title: "2021",
              label: (
                <NavLabel
                  name={"Year 2021"}
                  isLink={true}
                  href={"achivements-2021"}
                />
              ),
            },
            {
              key: "3.5",
              title: "2020",
              label: (
                <NavLabel
                  name={"Year 2020"}
                  isLink={true}
                  href={"achivements-2020"}
                />
              ),
            },
          ],
        },
        {
          key: "4",
          title: "Gallery",
          label: (
            <NavLabel
              name={"Gallery"}
              isLink={true}
              href={"image-gallery"}
              block={"start"}
              inline={"start"}
            />
          ),
        },
        {
          key: "6",
          title: "Donate and Support",
          label: (
            <NavLabel
              name={"Donate and Support"}
              isLink={true}
              href={"for-donations"}
            />
          ),
        },
        {
          key: "9",
          title: "Contact Us",
          label: (
            <NavLabel name={"Contact Us"} isLink={true} href={"contact-us"} />
          ),
        },
      ]}
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    />
  );
};

export default NavMenu;
