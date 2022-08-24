import {
  Menu,
  Home,
  Search,
  Notes,
  PeopleAlt,
  Build,
  Store,
  HelpOutline
} from "@material-ui/icons";
import styled, { css } from 'styled-components';

const SidebarContainer = styled.div`
  width: 180px;
  min-height: 100vh;
  background-color: #111827;
  color: #9ca3af;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 768px) {
    width: 50px;
  };
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  border-bottom: 1px solid #4b4b4b;
  padding: 10px 0;
  margin-bottom: 10px;
  /* logo selector */
  .logo {
    font-size: 24px;
    margin-right: 10px;
    cursor: pointer;
    padding-left: 10px;
  }
`;
const Brand = styled.span`
  font-weight: bold;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    display: none;
  };
`;
const Center = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  border-bottom: 1px solid #4b4b4b;
  padding: 10px 0;
  margin-bottom: 10px;
  padding: 0;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;
const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  /* icon selector */
  .icon {
    width: 30px;
    font-size: 20px;
  }
  /* hover */
  &:hover {
    background-color: #374151;
    color: white;
  }
  /* active styling */
  color: ${props => props.active ? css`white` : 'inherit'};
  background-color: ${props => props.active ? css`#374151` : 'inherit'};
  @media only screen and (max-width: 768px) {
    justify-content: center;
  };
`;
const ListItemSpan = styled.span`
  @media only screen and (max-width: 768px) {
    display: none;
  };
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 10px 0;
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  };
`;
const ColorBox = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #9ca3af;
  margin-right: 15px;
  cursor: pointer;
  /* class selectors */
  &.dark {
    background-color: #111827;
  };
  &.night {
    background-color: #312e81;
  };
  &.light {
    background-color: #f3f4f6;
  };
  @media only screen and (max-width: 768px) {
    margin-bottom: 10px;
    margin-right: 0;
  };
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <Top>
        <Menu className="logo" />
        <Brand>The App</Brand>
      </Top>
      <Center>
        <List>
          <ListItem active>
            <Home className="icon" />
            <ListItemSpan>Dashboard</ListItemSpan>
          </ListItem>
          <ListItem>
            <Search className="icon" />
            <ListItemSpan>Search</ListItemSpan>
          </ListItem>
          <ListItem>
            <Notes className="icon" />
            <ListItemSpan>Insight</ListItemSpan>
          </ListItem>
          <ListItem>
            <PeopleAlt className="icon" />
            <ListItemSpan>Community</ListItemSpan>
          </ListItem>
          <ListItem>
            <Build className="icon" />
            <ListItemSpan>Tools</ListItemSpan>
          </ListItem>
          <ListItem>
            <Store className="icon" />
            <ListItemSpan>Market</ListItemSpan>
          </ListItem>
          <ListItem>
            <HelpOutline className="icon" />
            <ListItemSpan>Resources</ListItemSpan>
          </ListItem>
        </List>
      </Center>
      <Bottom>
        <ColorBox className="dark"></ColorBox>
        <ColorBox className="night"></ColorBox>
        <ColorBox className="light"></ColorBox>
      </Bottom>
    </SidebarContainer>
  );
};
