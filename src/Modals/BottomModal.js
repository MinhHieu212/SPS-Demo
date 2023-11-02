import React from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

const BottomModal = ({ element, children }) => {
  const [openPopover, setOpenPopover] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  return (
    <Popover open={openPopover} handler={setOpenPopover}>
      <PopoverHandler {...triggers} className="border-none outline-none">
        <Button variant="text" className="outline-none border-none">
          {element}
        </Button>
      </PopoverHandler>
      <PopoverContent
        {...triggers}
        className="z-50 max-w-[24rem] p-0 -translate-x-4"
      >
        {children}
      </PopoverContent>
    </Popover>
  );
};

export default BottomModal;
