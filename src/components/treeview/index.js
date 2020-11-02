import React, { useState } from 'react';
import Link from 'next/link'
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

export default function ControlledTreeView({ topic, posts }) {
  const [expanded, setExpanded] = useState([]);
  const [selected, setSelected] = useState([]);
  console.log(posts)
  const handleToggle = (event, nodeIds) => {
    event.stopPropagation()
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    event.stopPropagation()
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
        {
          posts.map(({ id }, index) => (
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a><TreeItem nodeId={index + 2} label="Calendar" /></a>
            </Link>
          ))
        }
      </TreeItem>
    </TreeView>
  );
}