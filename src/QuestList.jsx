import QuestItem from "./QuestItem";

const QuestList = ({ quests }) => {
    return (
      <ul>
        {quests.map((quest) => (
          <QuestItem
            key={quest.id}
            quest={quest}
            onDeleteQuest={onDeleteQuest}
          />
        ))}
      </ul>
    );
}

export default QuestList;