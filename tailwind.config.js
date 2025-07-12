/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                borcelle: "#FE45FF",
            },
            fontFamily: {
                Montserrat: ["Montserrat", "sans-serif"]
            },
            boxShadow: {
                'black2xs': '0px 15px 15px 0px rgba(35,35,35,0.16)'
            }
        },
    },
    plugins: [],
}
