import QuestList from "./QuestList";
import QuestForm from "./QuestForm";
import { useState, useEffect } from 'react';

const App = () => {
    const [quests, setQuests] = useState(() => {
    const savedQuests = localStorage.getItem('my-quests');
    return savedQuests ? JSON.parse(savedQuests) : [];
    });

    // quests の中身が変わるたびに、自動でローカルストレージに保存する
    useEffect(() => {
        localStorage.setItem('my-quests', JSON.stringify(quests));
    }, [quests]);

    // 新しいクエストを追加する関数
    const handleAddQuest = (text) => {
      const newQuest = {
        id: Date.now(), // 現在の時刻を固有のID（背番号）にする
        text: text      // フォームから送られてきた文字
      };
      setQuests([...quests, newQuest]); // 今の一覧に新しいクエストを合体させる
    };

    // クエストを削除する関数
    const handleDeleteQuest = (id) => {
      // 指定されたID以外のクエストだけを残す（＝指定されたIDを消す）
      setQuests(quests.filter(quest => quest.id !== id));
    };

    return (
      <div className="app-container">
        <h1>クエスト一覧（TODO）</h1>

        {/* 1. 入力フォームの部品（追加用の関数を渡す） */}
        <QuestForm onAddQuest={handleAddQuest} />

        {/* 2. 一覧表示の部品（クエストのデータと、削除用の関数を渡す） */}
        <QuestList quests={quests} onDeleteQuest={handleDeleteQuest} />
      </div>
    );
}

export default App;