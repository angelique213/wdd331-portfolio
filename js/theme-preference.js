(() => {
    const STORAGE_KEY = "theme-preference";
    const ALLOWED = ["light", "system", "dark"];

    // Read the saved preference.
    let savedTheme = "system";

    try {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (ALLOWED.includes(stored)) {
            savedTheme = stored;
        }
    } catch {
        // Continue with system mode if storage is unavailable.
    }

    // Apply the theme immediately.
    document.documentElement.dataset.theme = savedTheme;

    // Update all visible theme controls.
    function syncThemeControls(theme) {
        const inputs = document.querySelectorAll(
            '.theme-menu input[name="theme-preference"]'
        );

        inputs.forEach((input) => {
            input.checked = input.value === theme;
        });
    }

    // Change the theme and save the selection.
    function setTheme(theme) {
        if (!ALLOWED.includes(theme)) {
            return;
        }

        document.documentElement.dataset.theme = theme;

        syncThemeControls(theme);

        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // Theme still works if storage is unavailable.
        }
    }

    // Restore the selected radio button.
    function initializeTheme() {
        syncThemeControls(savedTheme);
    }

    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeTheme
        );
    } else {
        initializeTheme();
    }

    // Listen for user changes.
    document.addEventListener("change", (event) => {
        const input = event.target;

        if (
            input instanceof HTMLInputElement &&
            input.matches(
                '.theme-menu input[name="theme-preference"]'
            )
        ) {
            setTheme(input.value);
        }
    });
})();
