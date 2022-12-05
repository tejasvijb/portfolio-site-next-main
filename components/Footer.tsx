import Link from 'next/link'
import styles from '../styles/footer.module.scss'

const mainLinks = {
  Home: '/',
  Blog: '/blog',
  Projects: '/projects',
}

const footerLinks = [
  [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: 'Projects', url: '/projects' },
  ],
  [
    { name: 'Mail', url: 'mailto:jbtejasvi@gmail.com' },
    { name: 'GitHub', url: 'https://cutt.ly/f1CFeUp' },
    { name: 'LinkedIn', url: 'https://cutt.ly/Z1CDA4C' },
  ],
]

export function Footer({}) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLinks}>
        <ul className={styles.links}>
          {footerLinks[0].map(link => (
            <li key={link.name}>
              <Link href={link.url}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>

        <ul className={styles.links}>
          {footerLinks[1].map(link => (
            <li key={link.name}>
              <Link href={link.url}>
                <a>{link.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <p className={styles.copyright}>&copy; Tejasvi JB {new Date().getFullYear()}</p>
    </footer>
  )
}
