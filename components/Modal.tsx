import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ModalProps {
  isOpen: boolean;
  onChange: (open: boolean) => void;
  title: string;
  description: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onChange,
  title,
  description,
  children,
}) => {
  return (
    <Dialog open={isOpen} defaultOpen={isOpen} onOpenChange={onChange}>
      <form>
        <DialogContent className="sm:max-w-[425px] drop-shadow-md border-neutral-700 bg-neutral-800 rounded-md focus:outline-none">
          <DialogHeader>
            <DialogTitle className="text-xl text-center font-bold">
              {title}
            </DialogTitle>
            <DialogDescription className="leading-normal text-center">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div>{children}</div>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default Modal;
