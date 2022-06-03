import { useContext } from 'react';
import { BiTrash, BiEditAlt } from 'react-icons/bi';
import { AuthContext } from '../contexts/AuthContext';
import '../css/MoreOptions.css';
import userAPI from '../services/userAPI';

export default function MoreOptions({ tweetId, tweet }: any) {
    const token = localStorage.getItem('authToken') || '';
    const { reload, setReload } = useContext(AuthContext);

    const excludeTweet = async () => {
        console.log('exclude tweet');
        await userAPI.deleteTweet(tweetId, token)
        await setReload(!reload);
    };

    const editTweet = async () => {
        console.log('edit tweet');
        console.log(tweet);
        userAPI.updateTweet(tweetId, tweet, token);
        await setReload(!reload);
    };

    return (
        <div>
            <div className="dropdown-container" tabIndex={-1}>
                <div className="three-dots" />
                <div className="dropdown">
                    <a onClick={excludeTweet} href="#">
                        <div>
                            <BiTrash size="1em" />
                            {' '}
                            Excluir
                        </div>
                    </a>
                    <a onClick={editTweet} href="#">
                        <div>
                            {' '}
                            <BiEditAlt />
                            {' '}
                            Editar
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}
