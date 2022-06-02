import { BiTrash, BiEditAlt } from 'react-icons/bi';
import '../css/MoreOptions.css';

export default function MoreOptions() {
  const excludeTweet = () => {
    console.log('exclude tweet');
  };

  const editTweet = () => {
    console.log('edit tweet');
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
