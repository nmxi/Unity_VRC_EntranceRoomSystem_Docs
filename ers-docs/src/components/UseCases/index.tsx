import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type UseCaseItem = {
  title: string;
  description: string;
  icon: JSX.Element;
};

const UseCaseList: UseCaseItem[] = [
  {
    title: '大規模イベント',
    description: 'ステージと観客席で音声を分離。司会者の声を全体に届けながら、観客同士の会話も可能に。',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="14" width="18" height="6" rx="1" opacity="0.3"/>
        <circle cx="7" cy="10" r="2"/>
        <circle cx="12" cy="10" r="2"/>
        <circle cx="17" cy="10" r="2"/>
        <path d="M12 3v4" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    title: 'ロールプレイワールド',
    description: '各部屋や建物ごとに音声を遮断。リアルな空間表現で没入感を向上。',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="10" width="8" height="10" rx="1" opacity="0.8"/>
        <rect x="13" y="10" width="8" height="10" rx="1" opacity="0.8"/>
        <rect x="8" y="3" width="8" height="7" rx="1" opacity="0.5"/>
        <path d="M6 15h2m8 0h2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'ゲームワールド',
    description: 'チーム間の音声を制御。作戦会議は味方だけで、全体アナウンスは全員に。',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M7 4v6l-4 4 4 4v6h10v-6l4-4-4-4V4z" opacity="0.3"/>
        <circle cx="9" cy="12" r="2"/>
        <circle cx="15" cy="12" r="2"/>
      </svg>
    ),
  },
  {
    title: '教育・セミナー',
    description: '講師の声を優先的に配信。グループワーク時は各グループ内で会話。',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <rect x="3" y="8" width="18" height="12" rx="1" opacity="0.3"/>
        <rect x="7" y="11" width="10" height="6" rx="0.5" opacity="0.5"/>
        <circle cx="12" cy="5" r="2"/>
      </svg>
    ),
  },
];

function UseCase({title, description, icon}: UseCaseItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className={styles.useCaseCard}>
        <div className={styles.useCaseIcon}>{icon}</div>
        <div className={styles.useCaseContent}>
          <h3 className={styles.useCaseTitle}>{title}</h3>
          <p className={styles.useCaseDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function UseCases(): JSX.Element {
  return (
    <section className={styles.useCases}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>使用例</h2>
          <p className={styles.sectionSubtitle}>
            あらゆるVRChatワールドで活用できる柔軟な音声制御
          </p>
        </div>
        <div className="row">
          {UseCaseList.map((props, idx) => (
            <UseCase key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}