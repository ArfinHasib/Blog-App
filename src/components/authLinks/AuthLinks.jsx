'use client';

import Link from 'next/link';
import styles from './authLinks.module.css';
import { useState } from 'react';

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const status = 'notauthenticated';

  return (
    <>
      {status === 'notauthensticated' ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>LogOut</span>
        </>
      )}

      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">HomePage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === 'notauthensticated' ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>LogOut</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
