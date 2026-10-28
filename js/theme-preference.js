
(() => {
    const STORAGE_KEY = "theme-preference";
    const ALLOWED = ["light", "system", "dark"];

    // Read saved theme
    let savedTheme = "system";

    try {
        const stored = localStorage.getItem(STORAGE_KEY);

        if (ALLOWED.includes(stored)) {
            savedTheme = stored;
        }
    } catch {
        // Use system theme if storage is unavailable
    }

    // Apply theme immediately
    document.documentElement.dataset.theme = savedTheme;

    // Check if dark mode is active
    function isDarkMode() {
        const theme = document.documentElement.dataset.theme;

        if (theme === "dark") {
            return true;
        }

        if (theme === "light") {
            return false;
        }

        return window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
    }

    // Update theme buttons
    function updateButtons() {
        const dark = isDarkMode();

        document.querySelectorAll(".simple-theme-toggle")
            .forEach((button) => {
                const icon = button.querySelector(".theme-icon");

                if (icon) {
                    icon.textContent = dark ? "☀️" : "🌙";
                }

                button.setAttribute(
                    "aria-pressed",
                    String(dark)
                );

                button.setAttribute(
                    "aria-label",
                    dark
                        ? "Switch to light mode"
                        : "Switch to dark mode"
                );
            });
    }

    // Keep old theme menus working
    function syncThemeControls(theme) {
        const inputs = document.querySelectorAll(
            '.theme-menu input[name="theme-preference"]'
        );

        inputs.forEach((input) => {
            input.checked = input.value === theme;
        });
    }

    // Save selected theme
    function setTheme(theme) {
        if (!ALLOWED.includes(theme)) {
            return;
        }

        document.documentElement.dataset.theme = theme;

        syncThemeControls(theme);
        updateButtons();

        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch {
            // Theme works without storage
        }
    }

    // Set up theme buttons
    function initializeTheme() {
        syncThemeControls(savedTheme);
        updateButtons();

        document.querySelectorAll(".simple-theme-toggle")
            .forEach((button) => {
                button.addEventListener("click", () => {
                    const nextTheme = isDarkMode()
                        ? "light"
                        : "dark";

                    setTheme(nextTheme);
                });
            });
    }

    // Wait until HTML is ready
    if (document.readyState === "loading") {
        document.addEventListener(
            "DOMContentLoaded",
            initializeTheme
        );
    } else {
        initializeTheme();
    }

    // Support existing theme menus
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

    // Update icon when system theme changes
    window.matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", updateButtons);
})();
