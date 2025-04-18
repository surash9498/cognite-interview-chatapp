import { create } from "zustand";

const useStore = create((set, get) => ({
    selectedId: 1,
    setSelectedId: (id) => set({ selectedId: id }),
    messages: {},
    updateMessage: (id, newMsg) => {
        const oldMsg = get().messages;
        set({
            messages: {
                ...oldMsg,
                [id]: [...(oldMsg[id] || []), newMsg],
            },
        });
    },
    chatOrder: [1, 2, 3, 4],
    setChatOrder: (id) => {
        const currentOrder = get().chatOrder
        set({
            chatOrder: resetChatOrder(currentOrder, id)
        })
    }
}));
export default useStore;
const resetChatOrder = (chatOrder, recentId) => {
    let temp = chatOrder
        .filter((id) => id !== Number(recentId))
    temp.unshift(Number(recentId))
    //need to rewrite logic since it will take longtime
    return temp
};
