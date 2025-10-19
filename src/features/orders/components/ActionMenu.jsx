import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export default function ActionMenu({ params }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => {
          window.dispatchEvent(new CustomEvent("openEditDialog", { detail: params.row }));
          handleClose();
        }}>
          Edit
        </MenuItem>
        <MenuItem onClick={() => {
          window.dispatchEvent(new CustomEvent("openDeleteDialog", { detail: params.row }));
          handleClose();
        }}>
          Delete
        </MenuItem>
      </Menu>
    </>
  );
}