import React from 'react';
import styles from './styles.module.css';
import ClickableImage from '@site/src/components/ClickableImage';

type FlowStep = {
  alt: string;
  src: string;
};

const flowSteps: FlowStep[] = [
  {
    alt: '個別待機部屋のイメージ',
    src: 'feature-step-1.png',
  },
  {
    alt: '注意事項確認のイメージ',
    src: 'feature-step-2.png',
  },
  {
    alt: 'メインエリア移動のイメージ',
    src: 'feature-step-3.png',
  },
];

export default function Features(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>主要機能</h2>
          <p className={styles.sectionSubtitle}>
            ワールド入室後、個別の注意書き部屋へ転送し、同意後メインエリアに転送する仕組みを簡単構築します。
          </p>
        </div>
        <div className={styles.flowCard}>
          <ol className={styles.flowList}>
            {flowSteps.map((step, index) => (
              <li key={step.alt} className={styles.flowItem}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <div className={styles.stepImage}>
                  <ClickableImage
                    src={`/img/${step.src}`}
                    alt={step.alt}
                    imageClassName={styles.flowImage}
                  />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
