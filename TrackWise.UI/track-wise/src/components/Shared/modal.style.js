export const modalStyles = {
    overlay: `
        fixed
        inset-0
        bg-black/50
        flex
        items-center
        justify-center
        z-50
    `,
    container: `
        bg-white
        rounded-lg
        shadow-lg
        w-full
        max-w-md
        p-5
        animate-fadeIn
    `,
    header: `
        flex
        justify-between
        items-center
        mb-4
    `,
    title: `
        text-lg
        font-semibold
        text-gray-800
    `,
    closeButton: `
        text-gray-500
        hover:text-gray-700
        text-xl
        font-bold
        cursor-pointer
    `,
    body: `
        text-sm
        text-gray-600
    `
};