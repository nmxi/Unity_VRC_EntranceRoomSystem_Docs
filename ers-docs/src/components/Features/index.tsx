import React from 'react';
import styles from './styles.module.css';

type FlowStep = {
  title: string;
  description: string;
};

const flowSteps: FlowStep[] = [
  {
    title: 'ワールド入室と個別転送',
    description:
      '利用者がワールドに入室すると、まずは参加者単位で個別の待機部屋に転送され、落ち着いて準備ができます。',
  },
  {
    title: '注意事項の確認',
    description:
      '待機部屋ではガイドに沿って注意事項を確認し、重要なポイントを理解したうえで次のステップへ進めます。',
  },
  {
    title: '同意後にメインエリアへ移動',
    description:
      '全ての内容に同意してボタンを押すと、メインエリアへ自動的に転送され、本編の体験を開始できます。',
  },
];

export default function Features(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>主要機能</h2>
        </div>
        <div className={styles.flowCard}>
          <ol className={styles.flowList}>
            {flowSteps.map((step, index) => (
              <li key={step.title} className={styles.flowItem}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <div className={styles.flowText}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
