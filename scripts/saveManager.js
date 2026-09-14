const ENABLED = true;

const STORAGE_PREFIX = "RE-OS-1_";

const saveManager = {
    get(key, fallback = null) {
        if (ENABLED == false) return fallback;
        try {
            const raw = localStorage.getItem(STORAGE_PREFIX + key);
            if (raw == null) return fallback;
            return JSON.parse(raw);
        } catch(e) {
            console.warn('SaveManager: Failed to read "${key}"', e)
            return fallback;
        }
    },

    set(key, value) {
        if (ENABLED == false) return false;
        try {
            localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value));
            return true;
        } catch(e) {
            console.warn(`SaveManager: Failed to set "${key}"`, e)
            return false;
        }
    },

    remove(key, value) {
        localStorage.removeItem(STORAGE_PREFIX + key);
    },

    clear() {
        Object.keys(localStorage)
            .filter(k => k.startsWith(STORAGE_PREFIX))
            .forEach(k => localStorage.removeItem(k))
    }
};

export default saveManager;