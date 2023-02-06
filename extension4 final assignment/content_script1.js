let menu = document.querySelectorAll("#h2_content_2_0, #h2_content_2_1, #h2_content_2_2, #h2_content_9_0, #h2_content_9_1, #h2_content_9_2,l, .fold-container, .full_hr, #footer, #pc-caption-ad-container, #pc- caption-20th-ad-center, .pc- caption-20th-ad-container, #inbound-ad-container, #main-contents-bottom, #menubar > .list1, .admenu-sticky");
 for(let i = 0; i < menu.length; i++){
    menu[i].style.display = 'none';
  }

function textChange(n){
    let cs = n.childNodes;
    for(let i = 0; i < cs.length; i++){
      let c = cs[i];
      if(c.nodeType == Node.TEXT_NODE){
        c.textContent = c.textContent.replace(/。/g, "！？！？！？");
      }
      else{
        textChange(c)
      }
    }
  }
  
  textChange(document.body);

let rc = document.querySelectorAll(".recent_list li");
for(let i = 0; i < rc.length; i++){
  let r = rc[i];
  let rl = r.textContent.length;
  let fortune = Math.floor( Math.random() * 16 ) ;
  if(rl === fortune){
    r.textContent = "はずれでぇぇぇ～す！！！！！"
  }
}