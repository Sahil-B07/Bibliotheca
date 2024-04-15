import { forwardRef } from "react";
import * as Select from "@radix-ui/react-select";
import classnames from "classnames";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { PiCheckBold } from "react-icons/pi";

const SelectFilter = ({selectedItem, setSelectedItem}) => {
  

  const handleChange = (value) => {
    setSelectedItem(value);
  };

  return (
    <Select.Root onValueChange={handleChange}>
      <Select.Trigger
        className="inline-flex h-10 items-center justify-center gap-1 rounded bg-pink-50 px-4 text-base leading-none shadow-[0_2px_10px] shadow-black/10 outline-none hover:bg-pink-100 border border-pink-200 focus:border-pink-400"
        aria-label="filter"
      >
        <Select.Value placeholder="Filter By" />
        <Select.Icon>
          <FaAngleDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="overflow-hidden rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
          <Select.ScrollUpButton>
            <FaAngleUp />
          </Select.ScrollUpButton>
          <Select.Viewport className="p-[5px]">
            <Select.Group>
              <SelectItem value="genre">Genre</SelectItem>
              <SelectItem value="author">Author</SelectItem>
              <SelectItem value="book">Title</SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="text-violet11 flex h-[25px] cursor-default items-center justify-center bg-white">
            <FaAngleDown />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

const SelectItem = forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames(
          "text-pink-500 data-[highlighted]:outline-none data-[highlighted]:bg-pink-200 data-[highlighted]:text-black relative flex h-7 select-none items-center rounded-sm pl-6 pr-8 text-base leading-none",
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
          <PiCheckBold />
        </Select.ItemIndicator>
      </Select.Item>
    );
  },
);

export default SelectFilter;
