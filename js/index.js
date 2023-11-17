var clickSound = new Audio('sound/Death_Note_Ost_1_20.mp3')
var clickSound2 = new Audio('sound/DeathNoteOP.mp3')





$(document).ready(function() {
    const linkButton = $("#link_div");

    function toggleFade() {
        linkButton.fadeOut(800, function() {
            // 在淡出完成后执行淡入
            linkButton.fadeIn(800);
        });
    }

    // 使用 setInterval 创建fade in和fade out效果，间隔1秒
    setInterval(toggleFade, 1000);
});






$(document).ready(function() {





    // 点击 link_div 时触发
    $("#link_div").on("click", function() {

        clickSound.play();


        // 淡出 opening 内的所有元素
        $("#opening").fadeOut(1000, function() {
            // 清空 opening
            $("#opening").empty();

            // n秒后淡入 second 元素
            setTimeout(function() {
                $("#second1").fadeIn(1400);
            }, 1400);

            // n秒后淡入 second2 元素
            setTimeout(function() {
                $("#second2").fadeIn(1400);
            }, 2800);

            // n秒后淡入 second3 元素
            setTimeout(function() {
                $("#second3").fadeIn(1400);
            }, 4200);

            // n秒后淡入 second4 元素
            setTimeout(function() {
                $("#second4").fadeIn(1400);
            }, 5600);
            
            // n秒后淡入 second5 元素
            setTimeout(function() {
                $("#second5").fadeIn(1400);
            }, 7000);


            // n秒后淡入 second6 元素
            setTimeout(function() {
                $("#second6").fadeIn(1400);
            }, 8400);



            // n秒后淡入 second_next 元素
            setTimeout(function() {
                $("#second_next").fadeIn(2000);
            }, 10000);




        });
    });
});



$(document).ready(function() {
    $("#second_next").click(function(e) {
        e.preventDefault(); // 阻止默认链接行为

        clickSound2.play(); // 播放声音

                // 隐藏 #second_box 元素，持续时间为 n 秒
                $("#second_box").fadeOut(2500);



        // 在声音结束后，延迟跳转到 index2.html
        clickSound2.addEventListener("ended", function() {
            setTimeout(function() {
                window.location.href = "html/note.html";
            }, 0); // 延迟0毫秒以确保声音播放结束后立即跳转
        });
    });
});
