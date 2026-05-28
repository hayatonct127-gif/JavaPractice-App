// 変数
let example = 'Hello World!';
// example = 'Hello World2!';

// 定数
const example2 = 'He..Hell..Hello World!';
// example2 = 'Hello World2!';

// 配列
let inoki = ['いーち', 'にー', 'さん', 'だー！'];

// ループ文
// let i = 0;
// while(i < inoki.length){
//     i++;
//     console.log(inoki[i]);
// }

// if/else
// if(inoki.length >5) {
//     console.log('ボンバイエ！');
// } else {
//     console.log('盆場');
// }

//関数
const test = (arg) => {
    if(inoki.length >arg) {
        console.log('ボンバイエ！');
    } else {
        console.log('盆場');
    }
};

//オブジェクト
const obj = {
    color: 'red',
    size: 'big',
    shape: 'circle',
    goToilet: () => {
        console.log('トイレに行きます');
    }
}
// window.alert('momomo');

// //復習
// // 変数・配列・オブジェクト
// let task = "買い物";
// console.log(task);
// // 再代入
// task = "ランニング";
// console.log(task);

// const tasks = ["筋トレ", "勉強"];
// // console.log(tasks);

// // console.log(tasks[0]);

// const todo = {
//     name: "JavaScript勉強",
//     done: false
// }

// console.log(todo.name);

// if(todo.done) {
//     console.log("完了");
// } else {
//     console.log("未完了");
// }

// for(let i = 0; i < tasks.length; i++) {
//     console.log(tasks[i]);
// }

// let i = 0;
// while(i < tasks.length) {
//     console.log(tasks[i]);
//     i++;
// }

const todo =[
    {name: "勉強", done: false},
    {name: "ランニング", done: true},
    {name: "料理", done: false}
]

const result = todo.filter(list => list.done ===false);

console.log(result);

const results = todo.find(list => !list.done);
console.log(results);
// result.forEach(task => {
//     console.log(task.name + "が完了していません。")
// })

// function addTask(task) {
//     console.log(task + "が完了していません");
// }

// addTask("掃除");

function hello(name) {
    console.log("こんにちは" + name + "さん")
}
hello("村田")

//HTML
{/* <input id="input" type="text">
<button id="button">追加</button>
<ul id="todoList"></ul> */}
//DOM操作
const input = document.getElementById("input");
const button = document.getElementById("button");
const todoList = document.getElementById("todoList");

    //追加ボタン押下時
    button.addEventListener("click", () => {
        //入力値が空でない場合
        if(input.value !== "") {
            //要素作成
            const li = document.createElement("li");
            const deleteButton = document.createElement("button");
            //内容設定
            li.textContent = input.value;
            deleteButton.textContent = "削除";
            li.appendChild(deleteButton);

            //削除ボタン押下時
            deleteButton.addEventListener("click", () => {
                todoList.removeChild(li);
            });

            //追加
            todoList.appendChild(li);
            //入力リセット
            input.value = "";
        };
    });

// 登録ボタン押下時にアーティスト名を取得
const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const artist = document.getElementById("artist").value;
    console.log(artist);
})

//リストに追加する
const latestLive = {
    artist: "ELLEGARDEN",
    date: "2026-3-30",
    location: "幕張メッセ",
    review: "とても良いライブでした！"
};

let liveHistory = [];
liveHistory.push(latestLive);