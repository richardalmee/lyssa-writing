import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Badge, UncontrolledDropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { AppAsideToggler, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'

const propTypes = {
  children: PropTypes.node,
};

const homeProps = {};

class HomeHeader extends Component {
  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <span>Lyssa</span>
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'Lyssa Writing' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'Lyssa' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="ml-auto" navbar>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="icon-bell"></i><Badge pill color="danger">5</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="fa fa-envelope-o"></i><Badge pill color="danger">2</Badge></NavLink>
          </NavItem>
          <NavItem className="d-md-down-none">
            <NavLink to="#" className="nav-link"><i className="fa fa-tasks"></i><Badge pill color="danger">8</Badge></NavLink>
          </NavItem>
          <UncontrolledDropdown nav direction="down">
            <DropdownToggle nav>
              <img src={'../../assets/img/avatars/richard_almee.jpg'} className="img-avatar" alt="Richard Almée" />
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem header tag="div" className="text-center"><strong>Richard Almée</strong></DropdownItem>
              <DropdownItem><i className="fa fa-file"></i> Projets<Badge color="primary">1</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">2</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-tasks"></i> Tâches<Badge color="danger">8</Badge></DropdownItem>
              <DropdownItem><i className="fa fa-comments"></i> Commentaires<Badge color="warning">42</Badge></DropdownItem>
              <DropdownItem header tag="div" className="text-center"><strong>Profil</strong></DropdownItem>
              <DropdownItem><i className="fa fa-user"></i> Voir profil</DropdownItem>
              <DropdownItem><i className="fa fa-wrench"></i> Paramètres</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={e => this.props.onLogout(e)}><i className="fa fa-lock"></i> Déconnection</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <AppAsideToggler className="d-md-down-none" />
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

HomeHeader.propTypes = propTypes;
HomeHeader.homeProps = homeProps;

export default HomeHeader;
