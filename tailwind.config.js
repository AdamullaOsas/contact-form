/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                grey: {
                    500: "#86A2A5",
                    900: "#2A4144",
                },
                green: {
                    600: "#0C7D69",
                    200: "#E0F1E8",
                },
                red: "#D73C3C",
            },
        },
    },
    plugins: [],
};
