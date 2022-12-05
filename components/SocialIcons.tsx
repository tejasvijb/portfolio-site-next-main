import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdNorthEast } from 'react-icons/md'
import styles from '../styles/mainheader.module.scss'

export function SocialIcons({ scrollFunction }: any) {
  return (
    <>
      <div className={styles.socialIconsContainer}>
        <div className={styles.header__socialIcons}>
          <div>
            <FaGithub />
            <a target="_blank" href="https://cutt.ly/f1CFeUp" rel="noopener noreferrer" className={styles.iconNames}>
              Github
            </a>
            <MdNorthEast />
          </div>
          <div>
            <FaLinkedin />
            <a target="_blank" href="https://cutt.ly/Z1CDA4C" rel="noopener noreferrer" className={styles.iconNames}>
              LinkedIn
            </a>
            <MdNorthEast />
          </div>
        </div>
      </div>
      <div className={styles.divSayHi}>
        <a target="_blank" href="https://api.whatsapp.com/send?phone=917815018515&text=Hi" className={styles.sayHi}>
          Say Hi 👋
        </a>
      </div>
    </>
  )
}
