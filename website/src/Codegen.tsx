import { CodeBlock, dracula } from 'react-code-blocks';
import Styles from './App.module.css';
import { Component } from 'components-sdk';
import { useTranslation } from 'react-i18next';

export function Codegen({ state }: { state: Component[]; page: string; setPage: (page: string) => void }) {
    const { t } = useTranslation('website');

    const data = JSON.stringify(state, undefined);

    return (
        <>
            <p style={{ marginBottom: '0.5rem', marginTop: '8rem' }}>{t('codegen.title')}</p>
            <div className={Styles.data}>
                <CodeBlock text={data.replaceAll('"', '\\"')} language="json" showLineNumbers={false} theme={dracula} />
            </div>
        </>
    );
}
