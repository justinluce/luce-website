import SombressChapter0Doc from '/writing/SombressChapter0.md?url&raw';

export const sombressChapters = [
    {
        slug: 'apoptosis',
        number: 0,
        title: 'Apoptosis',
        doc: SombressChapter0Doc,
    },
    {
        slug: 'apostation',
        number: 1,
        title: 'Apostation',
    },
];

export const publishedSombressChapters = sombressChapters.filter((chapter) => chapter.doc);

export const findSombressChapter = (slug) =>
    publishedSombressChapters.find((chapter) => chapter.slug === slug);

export const getSombressChapterNeighbors = (slug) => {
    const index = publishedSombressChapters.findIndex((chapter) => chapter.slug === slug);

    return {
        previous: index > 0 ? publishedSombressChapters[index - 1] : null,
        next: index >= 0 ? publishedSombressChapters[index + 1] ?? null : null,
    };
};
