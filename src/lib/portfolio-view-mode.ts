export type ViewMode = "simple" | "detailed";

export const DEFAULT_VIEW_MODE: ViewMode = "detailed";

const VIEW_MODE_STORAGE_KEY = "portfolioViewMode";
const VIEW_MODE_CHANGE_EVENT = "portfolio-view-mode-change";

export function getPortfolioViewMode(): ViewMode {
  try {
    const savedViewMode = localStorage.getItem(VIEW_MODE_STORAGE_KEY);

    return savedViewMode === "simple" || savedViewMode === "detailed"
      ? savedViewMode
      : DEFAULT_VIEW_MODE;
  } catch {
    return DEFAULT_VIEW_MODE;
  }
}

export function subscribeToPortfolioViewMode(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(VIEW_MODE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(VIEW_MODE_CHANGE_EVENT, onStoreChange);
  };
}

export function setPortfolioViewMode(mode: ViewMode) {
  try {
    localStorage.setItem(VIEW_MODE_STORAGE_KEY, mode);
    window.dispatchEvent(new Event(VIEW_MODE_CHANGE_EVENT));
    return true;
  } catch {
    return false;
  }
}
