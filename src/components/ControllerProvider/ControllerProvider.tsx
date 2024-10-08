import { ReactNode, SetStateAction, createContext, useState } from "react";
import { Controller } from "../../controller";

export interface Props {
  children?: ReactNode;
}

export interface ContextType {
  controller: Controller;
  setController: React.Dispatch<SetStateAction<Controller>>;
}

export const ControllerContext = createContext<ContextType | null>(null);

export const ControllerProvider = ({ children }: Props) => {
  const [controller, setController] = useState(
    new Controller({ type: "stop", value: null }, false, false, false),
  );
  return (
    <ControllerContext.Provider value={{ controller, setController }}>
      {children}
    </ControllerContext.Provider>
  );
};
