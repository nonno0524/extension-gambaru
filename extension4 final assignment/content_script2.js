let header = document.querySelectorAll("#h2_content_1_2, #h2_content_1_3, #h2_content_1_4, #h2_content_1_5, .list1");
for(let i = 0; i < header.length; i++){
    header[i].style.display = 'none';
}

let title = document.getElementById("title");
title.textContent = "ドラゴンクエスト大辞典を作ろうぜ！(激おもろサイト)"
title.style.fontWeight = "bold";
title.style.fontSize = "20pt";