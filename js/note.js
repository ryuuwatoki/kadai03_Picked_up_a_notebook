var killSound1 = new Audio('../sound/01_first-blood-sound.mp3')
var killSound2 = new Audio('../sound/02_double-kill-lol.mp3')
var killSound3 = new Audio('../sound/03_triple-kill-lol.mp3')
var killSound4 = new Audio('../sound/04_quadrakill-lol.mp3')
var killSound5 = new Audio('../sound/05_pentakill-lol.mp3')
var killSound6 = new Audio('../sound/06_legendary.mp3')

var rebornSound1 = new Audio('../sound/12_revival.mp3')
var rebornAllSound1 = new Audio('../sound/11_hallelujah.mp3')





// 隱藏body，然後在n秒內淡入
$(document).ready(function() {
    $('body').hide().fadeIn(1000); 
});





$(document).ready(function() {


    // Save 按鈕點擊事件
    $("#save").on("click", function () {
        const key = $("#title").val();
        const value = $("#text").val().trim() === '' ? '心臓麻痺' : $("#text").val();

        if (key === '') {
            alert('名前を入力してください！');
            return;
        }

        if (key === '夜神月') {
            alert('夜神月は神様だから、死にません！');
            $('#title').val('');
            $('#text').val('');    
            return;
        }


        if (localStorage.length === 0) {
            killSound1.play();
        }

        if (localStorage.length === 1) {
            killSound2.play();
        }

        if (localStorage.length === 2) {
            killSound3.play();
        }

        if (localStorage.length === 3) {
            killSound4.play();
        }

        if (localStorage.length === 4) {
            killSound5.play();
        }

        if (localStorage.length >= 5) {
            killSound6.play();
        }



        // 將資料存入 localStorage
        localStorage.setItem(key, value);

        // 生成 HTML 元素並顯示在列表中
        const html = `
        <li>
            <p>死者:${key}</p>
            <p>死因:${value}</p>
            <button class="Reborn" data-key="${key}">蘇る</button>
        </li>
        `;
        $("#list").append(html);

        // 清空欄位
        $('#title').val('');
        $('#text').val('');
    });








    // Clear 按鈕點擊事件
    $("#clear").on("click", function () {

        if (localStorage.length !==0) {
            rebornAllSound1.play();
        }
        else {
            alert('犠牲者がいない！');
        }

        // 清空 localStorage 和列表
        localStorage.clear();
        $("#list").empty();

    });





    // 列表中的蘇る按鈕點擊事件
    $("#list").on("click", ".Reborn", function () {
        const key = $(this).data("key");
        rebornSound1.play();

        // 移除相應的值
        localStorage.removeItem(key);

        // 移除包含該按鈕的 <li> 元素
        $(this).closest("li").remove();
    });





    // 頁面載入時顯示 localStorage 中的資料
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const html = `
        <li>
            <p>${key}</p>
            <p>${value}</p>
            <button class="Reborn" data-key="${key}">蘇る</button>
        </li>
        `;
        $("#list").append(html);
    }


});

