import QuestList from "./QuestList";

const App = () => {
    const defaultQuests = [
        { id: 1, title: "Reactの基本を学ぶ" },
        { id: 2, title: "QuestItemを作る" },
        { id: 3, title: "アプリを完成させる" },
    ];
    return (
        <div>
            <h1>クエスト一覧（TODO）</h1>
            <QuestList quests={defaultQuests} />
        </div>
    );
}

export default App;