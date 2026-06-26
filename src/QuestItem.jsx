const QuestItem = ({ quest, onDeleteQuest }) => {
    return (
        <li className="quest-item">
          <span>・{quest.text}</span>
          <button onClick={() => onDeleteQuest(quest.id)} className="delete-btn">
            完了
          </button>
        </li>
    );
}

export default QuestItem;
