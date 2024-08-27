/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                p_Cyan: "hsl(179, 62%, 43%)",
                p_Bright_Yellow: "hsl(71, 73%, 54%)",
                p_Light_Gray: "hsl(204, 43%, 93%)",
                p_Grayish_Blue: "hsl(218, 22%, 67%)",
            },
            fontFamily: {
                karla: ["Karla", "sans-serif"]
            }
        },
    },
    plugins: [],
}

