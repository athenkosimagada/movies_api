import React, { createContext, useContext, ReactNode, ReactElement } from 'react';

// Define the type for the context value
interface ToggleContextType {
  plan: string;
  updatePlan: (newPlan: string) => void;
}

// Create the context with an initial default value
const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

// Create a provider component to wrap your app
interface ToggleProviderProps {
  children: ReactNode;
}

export function ToggleProvider({ children }: ToggleProviderProps): ReactElement {
  const [plan, setPlan] = React.useState<string>('monthly');

  const updatePlan = (newPlan: string) => {
    setPlan(newPlan);
  };

  const contextValue: ToggleContextType = {
    plan,
    updatePlan,
  };

  return <ToggleContext.Provider value={contextValue}>{children}</ToggleContext.Provider>;
}

// Create a hook to use the context
export function useToggleContext(): ToggleContextType {
  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('useToggleContext must be used within a ToggleProvider');
  }

  return context;
}
