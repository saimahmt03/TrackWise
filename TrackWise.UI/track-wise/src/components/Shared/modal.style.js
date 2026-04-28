export const modalStyles = {
    overlay: `
        fixed inset-0 z-50
        flex items-center justify-center
        bg-black/50 backdrop-blur-sm
        p-4
    `,
    container: `
        bg-white
        w-full max-w-lg
        rounded-xl
        shadow-2xl
        border border-gray-200
        overflow-hidden
        animate-fadeIn
    `,
    header: `
        flex items-center justify-between
        px-6 py-4
        border-b border-gray-200
    `,
    title: `
        text-lg font-semibold text-gray-800
    `,
    closeButton: `
        text-gray-400 hover:text-gray-700
        text-xl font-bold
        transition
    `,
    body: `
        px-6 py-5
        text-sm text-gray-600
        leading-relaxed
    `
};