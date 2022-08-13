 const li = document.createElement("li");
 li.className = "collection-item";
 li.innerText = "hi";
 const link=document.createElement("a");
 link.className="delete-item secondary-content";

link.innerHTML=`<i class="fa fa-remove"></i>`;
document.querySelector("ul.collection").appendChild(li);
 li.appendChild(link);
 console.log(link);
//  li.id = "item";
//  li.innerText = "haima";
//  console.log(li);
//  li.setAttribute(`title = "hdkf"`)


 

