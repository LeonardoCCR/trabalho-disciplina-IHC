export default {
    theme: {
        extend: {
            colors: {
                primary: "#007AFF", // Azul - Segurança e confiabilidade
                secondary: "#34C759", // Verde - Sucesso, confirmação
                error: "#FF3B30", // Vermelho - Atenção, erro
                default: "#F2F2F7", // Cinza Claro - Fundo neutro
                white: "#FFFFFF",
                text: "#1C1C1E", // Preto 90% - Contraste para textos
            },
            animation: {
                'slide-in': 'slideIn 0.3s ease-in-out forwards',
                'slide-out': 'slideOut 0.3s ease-in-out forwards',
            },
            keyframes: {
                slideIn: {
                    '0%': { transform: 'translateX(100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                slideOut: {
                    '0%': { transform: 'translateX(0)', opacity: '1' },
                    '100%': { transform: 'translateX(-100%)', opacity: '0' },
                },
            },
        },
    },
    plugins: [],
};