export const Storage = {
    saveWatchHistory(animeId, title, episode, image, progress = 50) {
        let history = JSON.parse(localStorage.getItem("watchHistory") || "[]");

        // Remove duplicate
        history = history.filter(item => item.id !== animeId);

        history.unshift({
            id: animeId,
            title: title,
            ep: episode,
            image: image,
            progress: progress,
            timestamp: Date.now()
        });

        // Keep only last 30 items
        history = history.slice(0, 30);
        localStorage.setItem("watchHistory", JSON.stringify(history));
    },

    getWatchHistory() {
        return JSON.parse(localStorage.getItem("watchHistory") || "[]");
    },

    saveProgress(malId, episode, progress) {
        localStorage.setItem(`progress_${malId}_${episode}`, progress);
    },

    getProgress(malId, episode) {
        return parseFloat(localStorage.getItem(`progress_${malId}_${episode}`)) || 0;
    }
};
