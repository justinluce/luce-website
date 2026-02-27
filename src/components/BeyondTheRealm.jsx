import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import BeyondTheRealmDoc from '/writing/BeyondTheRealm.md?url&raw';
import '../shared/styled/Writing.css';

export const BeyondTheRealm = () => {
    return (
        <div className='writingContainer'>
            <div className='markdown-body writing-content'>
                <ReactMarkdown remarkPlugins={[remarkBreaks]}>{BeyondTheRealmDoc}</ReactMarkdown>
            </div>
        </div>
    );
}
