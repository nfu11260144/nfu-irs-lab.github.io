import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '新進人員訓練',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    // Svg: '',
    description: (
      <>
        {/* <div className="text--left"> */}
          <ol>
            <li><a href="/docs/orientation-training/step-1">3D 建模</a></li>
            <li><a href="/docs/orientation-training/step-2">基本設備</a></li>
            <li><a href="/docs/orientation-training/step-3">Robotis 套件</a></li>
            <li><a href="/docs/orientation-training/step-4">C# 程式</a></li>
          </ol>
        {/* </div> */}
      </>
    ),
  },
  {
    title: '一般核銷須知',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        收據打統編「64967512」及抬頭「國立虎尾科技大學」<br/>
        <a href="/docs/administrative-affairs/general-reimburse-instructions">查看完整文件</a>
        {/* <a class="button button--secondary button--lg" href="/docs/administrative-affairs/general-reimburse-instructions">查看️</a> */}
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
