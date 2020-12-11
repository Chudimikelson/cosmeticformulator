import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Emulsifiers from './EmulsifiersList';
import Stabilizers from './StabList';
import Waxes from './WaxList';
import Thickners from './ThickList';
import Bases from './BaseList';


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
          EMULSIFIERS
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className='nav rounded'>
            <Emulsifiers/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel round expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary className="lead footer-panels" aria-controls="panel2d-content" id="panel2d-header">
          STABILIZERS
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav rounded">
          <Stabilizers/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel round expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary className="lead footer-panels" aria-controls="panel3d-content" id="panel3d-header">
          WAXES
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav rounded">
          <Waxes/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel round expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary className="lead footer-panels" aria-controls="panel4d-content" id="panel4d-header">
          THICKNERS
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav rounded">
          <Thickners/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel round expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary className="lead footer-panels" aria-controls="panel5d-content" id="panel5d-header">
          COSMETIC BASES
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav rounded">
          <Bases/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
