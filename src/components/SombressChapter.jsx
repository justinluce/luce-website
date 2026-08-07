import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavLink, Navigate, useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { findSombressChapter, getSombressChapterNeighbors } from '../data/sombressChapters';
import '../shared/styled/Writing.css';

const scrollStorageKey = (slug) => `sombress:scroll:${slug}`;

export const SombressChapter = () => {
    const { slug } = useParams();
    const [chapterTheme, setChapterTheme] = useState('dark');
    const [progress, setProgress] = useState(0);
    const [isScrollable, setIsScrollable] = useState(false);
    const hasRestored = useRef(false);
    const isLightMode = chapterTheme === 'light';
    const chapter = findSombressChapter(slug);

    const readScrollable = useCallback(
        () => document.documentElement.scrollHeight - window.innerHeight,
        []
    );

    useLayoutEffect(() => {
        hasRestored.current = false;
        setProgress(0);
    }, [slug]);

    useLayoutEffect(() => {
        if (!chapter || hasRestored.current) {
            return;
        }

        hasRestored.current = true;

        const saved = Number(window.localStorage.getItem(scrollStorageKey(slug)));

        if (Number.isFinite(saved) && saved > 0) {
            window.scrollTo(0, Math.min(saved, readScrollable()));
        } else {
            window.scrollTo(0, 0);
        }
    }, [chapter, slug, readScrollable]);

    useEffect(() => {
        if (!chapter) {
            return undefined;
        }

        let frame = null;

        const update = () => {
            frame = null;

            const scrollable = readScrollable();
            const offset = window.scrollY;

            setIsScrollable(scrollable > 0);
            setProgress(scrollable > 0 ? Math.min(1, Math.max(0, offset / scrollable)) : 0);

            if (offset > 0) {
                window.localStorage.setItem(scrollStorageKey(slug), String(Math.round(offset)));
            } else {
                window.localStorage.removeItem(scrollStorageKey(slug));
            }
        };

        const onScroll = () => {
            if (frame === null) {
                frame = window.requestAnimationFrame(update);
            }
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            if (frame !== null) {
                window.cancelAnimationFrame(frame);
            }

            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [chapter, slug, readScrollable]);

    if (!chapter) {
        return <Navigate to='/writing/sombress' replace />;
    }

    const { previous, next } = getSombressChapterNeighbors(slug);

    return (
        <div className={`writingContainer poem-theme-${chapterTheme}`}>
            {isScrollable && (
                <div
                    className='chapter-progress'
                    role='progressbar'
                    aria-label='Chapter reading progress'
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={Math.round(progress * 100)}
                >
                    <div
                        className='chapter-progress-fill'
                        style={{ transform: `scaleX(${progress})` }}
                    />
                </div>
            )}
            <div className='poem-theme-controls'>
                <NavLink className='poem-theme-toggle' to={'/writing/sombress'}>
                    ← Chapters
                </NavLink>
                <button
                    type='button'
                    className='poem-theme-toggle'
                    aria-pressed={isLightMode}
                    onClick={() => setChapterTheme(isLightMode ? 'dark' : 'light')}
                >
                    {isLightMode ? 'Dark mode' : 'Light mode'}
                </button>
            </div>
            <div className='markdown-body writing-content chapter-content poem-bordered'>
                <p className='poem-author'>By: Justin Luce</p>
                <h1>{`Chapter ${chapter.number}: ${chapter.title}`}</h1>
                <div className='chapter-body'>
                    <ReactMarkdown remarkPlugins={[remarkBreaks]}>{chapter.doc}</ReactMarkdown>
                </div>
            </div>
            {(previous || next) && (
                <nav className='chapter-nav'>
                    {previous && (
                        <NavLink className='chapter-nav-link' to={`/writing/sombress/${previous.slug}`}>
                            <span className='chapter-nav-direction'>Previous Chapter</span>
                            {`${previous.number}: ${previous.title}`}
                        </NavLink>
                    )}
                    {next && (
                        <NavLink
                            className='chapter-nav-link chapter-nav-next'
                            to={`/writing/sombress/${next.slug}`}
                        >
                            <span className='chapter-nav-direction'>Next Chapter</span>
                            {`${next.number}: ${next.title}`}
                        </NavLink>
                    )}
                </nav>
            )}
        </div>
    );
}
