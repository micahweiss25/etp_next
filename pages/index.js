import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import Loader from '../components/Loader';

export default function Home() {
    return (
        <div>
            shoot
            <Loader show />
        </div>
    );
}