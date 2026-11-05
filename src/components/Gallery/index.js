import React from 'react';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export default function Gallery({ photos }) {
    const { withBaseUrl } = useBaseUrlUtils();
    return (
        <div className={styles.grid}>
            {photos.map((p) => {
                const full = withBaseUrl(`/camerata/gallery/full/${p.file}`);
                const thumb = withBaseUrl(`/camerata/gallery/thumbs/${p.file}`);
                return (
                    <a key={p.file} href={full} target="_blank" rel="noopener noreferrer"
                       className={styles.item}>
                        <img src={thumb} alt={p.alt} loading="lazy" />
                    </a>
                );
            })}
        </div>
    );
}