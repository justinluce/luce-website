import { useEffect } from 'react';

const SITE_NAME = 'Justin Luce';
const DEFAULT_DESCRIPTION =
  'Personal site of Justin Luce — software developer at Hotlines Inc, hobbyist game developer, and musician.';

export function usePageMeta({ title, description } = {}) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `${SITE_NAME} — ${title}` : SITE_NAME;

    const metaDescription = document.querySelector('meta[name="description"]');
    const previousDescription = metaDescription?.getAttribute('content');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || DEFAULT_DESCRIPTION);
    }

    return () => {
      document.title = previousTitle;
      if (metaDescription && previousDescription != null) {
        metaDescription.setAttribute('content', previousDescription);
      }
    };
  }, [title, description]);
}
