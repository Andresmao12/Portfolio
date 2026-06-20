import styles from './Stack.module.css';

import { useTranslation } from 'react-i18next';

import CursorCard from '../../components/CursorCard/CursorCard';
import Header from '../../components/Header/Header';

import {
    stackCategories,
    type StackCategory
} from '../../constants/stack';

const Stack = () => {

    const { t } = useTranslation()

    return (
        <section id="stack" className={styles.stackContainer}>

            <Header center>

                <span>{t('stack.badge')}</span>
                <h2>{t('stack.title')}</h2>

            </Header>

            <main className={styles.grid}>
                {stackCategories.map(
                    (category: StackCategory) => (

                        <CursorCard
                            key={category.title}
                            category={category}
                        />
                    )
                )}
            </main>

        </section>
    );
};

export default Stack;