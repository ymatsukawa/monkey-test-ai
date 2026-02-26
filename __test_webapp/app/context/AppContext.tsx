import { createContext, useContext, useState, type ReactNode } from "react";

interface ShowFields {
  name: boolean;
  title: boolean;
  email: boolean;
}

interface Settings {
  doNotShowRead: boolean;
  showFields: ShowFields;
}

interface AppContextType {
  readMessageIds: Set<number>;
  toggleRead: (id: number) => void;
  settings: Settings;
  updateSettings: (settings: Partial<Settings>) => void;
  updateShowFields: (fields: Partial<ShowFields>) => void;
}

const AppContext = createContext<AppContextType>({
  readMessageIds: new Set(),
  toggleRead: () => {},
  settings: {
    doNotShowRead: false,
    showFields: { name: true, title: true, email: false },
  },
  updateSettings: () => {},
  updateShowFields: () => {},
});

export function useApp() {
  return useContext(AppContext);
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [readMessageIds, setReadMessageIds] = useState<Set<number>>(new Set());
  const [settings, setSettings] = useState<Settings>({
    doNotShowRead: false,
    showFields: { name: true, title: true, email: false },
  });

  function toggleRead(id: number) {
    setReadMessageIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  }

  function updateSettings(partial: Partial<Settings>) {
    setSettings((prev) => ({ ...prev, ...partial }));
  }

  function updateShowFields(fields: Partial<ShowFields>) {
    setSettings((prev) => ({
      ...prev,
      showFields: { ...prev.showFields, ...fields },
    }));
  }

  return (
    <AppContext.Provider
      value={{ readMessageIds, toggleRead, settings, updateSettings, updateShowFields }}
    >
      {children}
    </AppContext.Provider>
  );
}
