const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8f47dcf64ad53b6eb75d5fec466e6ae0',
    originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/original${imgPath}`,
}

export default apiConfig;