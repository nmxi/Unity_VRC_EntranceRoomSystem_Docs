import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function HomepageHero(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>
          <div className={styles.heroTitleWrapper}>
            <span className={styles.heroTitleSub}>VRChat Udon Sharp Gimmick</span>
            <div className={styles.heroTitleMainWrapper}>
              <img src={`${siteConfig.baseUrl}img/vgc2-logo.png`} alt="ERS Logo" className={styles.heroLogo} />
              <span className={styles.heroTitleMain}>Entrance Room System</span>
            </div>
          </div>
        </h1>
        <p className={styles.heroDescription}>
          VRChatワールドのエントランスルームを簡単に構築できるシステム。
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx('button button--primary button--lg', styles.heroButton)}
            to="/docs/intro">
            ドキュメントを見る
          </Link>
        </div>
      </div>
    </header>
  );
}