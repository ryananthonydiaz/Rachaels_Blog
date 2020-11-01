import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

// const useStyles = makeStyles({
//   root: {
//     height: 240,
//     flexGrow: 1,
//     maxWidth: 400,
//   },
// });

export default function ControlledTreeView({ topic }) {
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);

  const handleToggle = (event, nodeIds) => {
    event.stopPropagation()
    console.log(event)
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    event.stopPropagation()
    console.log(event)
    setSelected(nodeIds);
  };

  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
    >
      <TreeItem nodeId="1" label={topic}>
        <TreeItem nodeId="2" label="Calendar" onClick={() => alert('2')} />
        <TreeItem nodeId="3" label="Chrome" onClick={() => alert('3')} />
        <TreeItem nodeId="4" label="Webstorm" onClick={() => alert('4')} />
      </TreeItem>
    </TreeView>
  );
}