import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onAction?: React.MouseEventHandler<HTMLDivElement> | undefined;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, onAction }) => {
  return (
    <div
      className="hover:bg-[rgba(255,255,255,0.2)] rounded-[5px] size-[32px] flex items-center justify-center cursor-pointer"
      onClick={onAction}
    >
      {icon && icon}
    </div>
  );
};

export default IconButton;
