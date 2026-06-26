import QuestItem from "./QuestItem";

const QuestList = ({ quests }) => {
    return (
        <ul>
            {quests.map((quest) => (
                <QuestItem key={quest.id} title={quest.title} />
            ))}
        </ul>
    );
}

export default QuestList;