import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ActivList from './c.ActivesPreservatives/ActivList';
import AddiList from './c.ActivesPreservatives/AddiList';
import CosmeList from './c.ActivesPreservatives/CosmeList';
import PresvList from './c.ActivesPreservatives/PresvList';
import BaseList from './c.Emulsifiers/BaseList';
import EmulsifiersList from './c.Emulsifiers/EmulsifiersList';
import StabList from './c.Emulsifiers/StabList';
import ThickList from './c.Emulsifiers/ThickList';
import WaxList from './c.Emulsifiers/WaxList';
import ButtersList from './c.OilsAndButters/ButtersList';
import CarrierOils from './c.OilsAndButters/CarrOilList';
import EssentialOils from './c.OilsAndButters/EssOilList';
import PowdersList from './c.PowdersExtracts/PowdersList';
import Clays from './c.PowdersExtracts/ClayList';
import Exfoliants from './c.PowdersExtracts/ExfoList';
import Extracts from './c.PowdersExtracts/ExtractList';
import Adjusters from './c.Surfactants/AdjusList';
import Humectants from './c.Surfactants/HumecList';
import Hydrosols from './c.Surfactants/HydroList';
import Solubulizers from './c.Surfactants/SolubsList';



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
      <ExpansionPanel square expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel1d-content" id="panel1d-header">
          <Typography>BUTTERS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <ButtersList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel2d-content" id="panel2d-header">
          <Typography>POWDERS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <PowdersList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel3d-content" id="panel3d-header">
          <Typography>ESSENTIAL OILS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()} className="nav">
          <EssentialOils/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel4d-content" id="panel4d-header">
          <Typography>CARRIER OILS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <CarrierOils/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel5d-content" id="panel5d-header">
          <Typography>ACTIVES</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <ActivList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel6d-content" id="panel6d-header">
          <Typography>
            COSMECEUTICALS
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <CosmeList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel7d-content" id="panel7d-header">
          <Typography>PRESERVATIVES</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <PresvList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel8d-content" id="panel8d-header">
          <Typography>SOAP BASE</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <BaseList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel9d-content" id="panel9d-header">
          <Typography>EMULSIFIERS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <EmulsifiersList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel10d-content" id="panel10d-header">
          <Typography>STABILIZERS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <StabList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel11d-content" id="panel11d-header">
          <Typography>THICKNERS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <ThickList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel12d-content" id="panel12d-header">
          <Typography>WAXES</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <WaxList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel13d-content" id="panel13d-header">
          <Typography>ADDITIVES</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <AddiList/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel14d-content" id="panel14d-header">
          <Typography>CLAYS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <Clays/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel15d-content" id="panel15d-header">
          <Typography>EXFOLIANTS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <Exfoliants/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel16d-content" id="panel16d-header">
          <Typography>PLANT EXTRACTS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <Extracts/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel17d-content" id="panel17d-header">
          <Typography>ADJUSTERS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <Adjusters/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel18d-content" id="panel18d-header">
          <Typography>HYDROSOLS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <Hydrosols/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel19d-content" id="panel19d-header">
          <Typography>HUMECTANTS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <Humectants/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel square expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
        <ExpansionPanelSummary className="footer-panels" aria-controls="panel20d-content" id="panel20d-header">
          <Typography>SOLUBULIZERS</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="nav" onClick={() => props.toggle()}>
          <Solubulizers/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
