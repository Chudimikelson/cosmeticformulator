import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { MDBListGroup, MDBDropdownItem, MDBListGroupItem } from "mdbreact";
import { Link } from 'react-router-dom';
import ButtersList from './ButtersList';


const ExpansionPanel = withStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, 0)',
    marginBottom: 1,
    minHeight: 40,
    '&$expanded': {
      minHeight: 40,
    },
  },
  content: {
    '&$expanded': {
      margin: '8px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(1),
  },
}))(MuiExpansionPanelDetails);

export default function CustomizedExpansionPanels(props) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  return (
    <div>
      <ExpansionPanel round expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary className="lead footer-panels" aria-controls="panel1d-content" id="panel1d-header">
          BUTTERS
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className='nav rounded'>
            <ButtersList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel round expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary className="lead footer-panels" aria-controls="panel2d-content" id="panel2d-header">
          ESSENTIAL OILS
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav rounded">
          <MDBDropdownItem ><Link to='/butters'>Niacinamide</Link></MDBDropdownItem>
          <MDBDropdownItem ><Link to='/butters'>Kojic</Link></MDBDropdownItem>
          <MDBDropdownItem onClick={() => props.toggle()}><Link to='/butters'>Mango Butter</Link></MDBDropdownItem>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel round expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary className="lead footer-panels" aria-controls="panel3d-content" id="panel3d-header">
          CARRIER OILS
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav rounded">
          <MDBDropdownItem onClick={() => props.toggle()}><Link to='/oils'>Lavender E/Oil</Link></MDBDropdownItem>
          <MDBDropdownItem onClick={() => props.toggle()}><Link to='/oils'>Rosemary E/Oil</Link></MDBDropdownItem>
          <MDBDropdownItem onClick={() => props.toggle()}><Link to='/oils'>Orange E/Oil</Link></MDBDropdownItem>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel round expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary className="lead footer-panels" aria-controls="panel4d-content" id="panel4d-header">
          FRAGRANCE OILS
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav rounded">
          <MDBDropdownItem onClick={() => props.toggle()}><Link to='/oils'>Carrot Oil</Link></MDBDropdownItem>
          <MDBDropdownItem onClick={() => props.toggle()}><Link to='/oils'>Sunflower Oil</Link></MDBDropdownItem>
          <MDBDropdownItem onClick={() => props.toggle()}><Link to='/oils'>Olive Oil</Link></MDBDropdownItem>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel round expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary className="lead footer-panels" aria-controls="panel5d-content" id="panel5d-header">
          BLENDED OILS
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav rounded">
          <MDBDropdownItem onClick={() => props.toggle()}><Link to='/oils'>Carrot Oil</Link></MDBDropdownItem>
          <MDBDropdownItem onClick={() => props.toggle()}><Link to='/oils'>Sunflower Oil</Link></MDBDropdownItem>
          <MDBDropdownItem onClick={() => props.toggle()}><Link to='/oils'>Olive Oil</Link></MDBDropdownItem>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
