import styles from './Stack.module.css';

import CursorCard from '../../components/CursorCard/CursorCard';
import Header from '../../components/Header/Header';


import {
    stackCategories,
    type StackCategory
} from '../../constants/stack';

const Stack = () => {

    return (
        <section id="stack" className={styles.stackContainer}>

            <Header center>

                <span>TECH STACK</span>
                <h2>Technology Ecosystem</h2>

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