import React from "react";
import { useInline } from "draft-js-rte";
import clsx from "clsx";

const InlineToggleButton = ({ className, value, ...other }) => {
  const { selected, ...inlineProps } = useInline(value);

  return (
    <span
      className={clsx(
        className,
        "styleButton",
        selected && "activeButton"
      )}
      {...other}
      {...inlineProps}
    />
  );
};

export default InlineToggleButton;
