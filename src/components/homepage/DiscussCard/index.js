import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';
import {addDarkToFileName} from '../../../util/util';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSquareCheck, faEye } from '@fortawesome/free-solid-svg-icons'; // Fallback classic icons

export default function DiscussCard({
  link,
  title,
  tags,
  views,
  liked,
  solution,
}) {
  let solved = (
    <img
      className={styles.cardDiscuss}
      src={useBaseUrl('/homepage/edit.png')}></img>
  );
  let linkText = <div className={styles.linkText}>Join the Discussion</div>;
  if (solution) {
    solved = (
      <FontAwesomeIcon
        icon={faSquareCheck}
        className={styles.cardSolved}
        size="lg"
      />
    );
    linkText = <div className={styles.linkSolvedText}>View the Solution</div>;
  }
  return (
    <Link to={link}>
      <div className={styles.card}>
        <ThemedImage
          className={styles.cardIcon}
          sources={{
            light: useBaseUrl('/homepage/quotes.png'),
            dark: useBaseUrl(addDarkToFileName('/homepage/quotes.png')),
          }}></ThemedImage>
        <ThemedImage
          className={styles.cardArrow}
          sources={{
            light: useBaseUrl('/homepage/arrow-right.png'),
            dark: useBaseUrl('/homepage/arrow-right-dark.png'),
          }}></ThemedImage>
        <FontAwesomeIcon icon={faEye} className={styles.cardEye} size="lg" />
        <img
          className={styles.cardLiked}
          src={useBaseUrl('/homepage/liked.png')}></img>
        {solved}
        <div className={styles.cardText}>{title}</div>
        <div className={styles.cardViews}>{views}</div>
        <div className={styles.cardLikes}>{liked}</div>
        {linkText}

        <div className={styles.tags}>
          {tags?.map((tag, index) => {
            if (index > 2) {
              return '';
            }
            return (
              <div key={tag} className={styles.tag}>
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
