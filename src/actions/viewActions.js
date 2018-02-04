export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW';

export function setCurrentView(currentView) {
    return {
        type: SET_CURRENT_VIEW,
        currentView
    }
}