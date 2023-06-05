import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Container, Link, Tab, Tabs, styled } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledTab = styled(Tab)({
  minHeight: "44px",
  fontSize: "18px"
});

const MenuSlider = ({ selectedTabUrlValue, menuItems, onClickHandler }) => {

  const { t } = useTranslation();

  const selectedTab = React.useMemo(() => {
    const idx = menuItems.map(item => item.url).indexOf(selectedTabUrlValue);
    return idx < 0 ? 0 : idx;
  }, [menuItems, selectedTabUrlValue]);
  const [tabIndex, setTabIndex] = React.useState(selectedTab);

  // handle external tab changes
  useEffect(() => {
    setTabIndex(selectedTab);
  }, [selectedTab]);

  const handleChange = (event, newValue) => {
    setTabIndex(newValue < 0 ? 0 : newValue);
  };

  return (
    <Container disableGutters maxWidth="sm"
      sx={{
        overflowX: "auto",
        // position: '-webkit-sticky',
        position: "sticky",
        top: 0,
        zIndex: 1,
        background: "#Ffdd74",
        opacity: "0.95",
      }}>
      <Tabs
        value={tabIndex}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        orientation="horizontal"
        aria-label="scrollable auto tabs example"
        indicatorColor='red'
        textColor='inherit'
        sx={{
          padding: 0.5,
          marginTop: 1,
          display: "flex",
          overflowX: "auto"
        }}
      >
        {
          menuItems.map((item, idx) => (
            <StyledTab
              key={`tab-main-${item.url}`}
              icon={<img alt="" src={item?.icon} height={25} width={25} />}
              iconPosition='start'
              sx={{
                height: "40px",
                minWidth: "auto",
                textTransform: "none",
                fontWeight: idx === tabIndex ? 500 : null,
                backgroundColor: "#020f85",
                opacity: idx === tabIndex ? null : "0.9",
                borderRadius: "12px",
                color: "white",
                margin: "3px",
              }}

              disableRipple
              label={t(item.text)}
              component={Link}
              to={`#${item.url}`}
              onClick={() => onClickHandler(item)}
            />
          ))
        }
      </Tabs>
    </Container >
  );
};

MenuSlider.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      id: PropTypes.number,
      text: PropTypes.string,
    }),
  ),
  onClickHandler: PropTypes.func,
  selectedTabUrlValue: PropTypes.string,
};

export default React.memo(MenuSlider);
