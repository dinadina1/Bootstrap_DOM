// table Creation
function table_create(tagname,attrname,attrvalue){
    let ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    return ele;
}

// row creation
function tr_create(tagname){
    let ele=document.createElement(tagname);
    return ele;
}

// table data creation
function td_create(tagname,content){
    let ele=document.createElement(tagname);
    ele.innerHTML=content;
    return ele;
}


let table = table_create("table","class","table");
let thead = table_create("thead","class","thead-dark");

let tr1 = tr_create("tr");
let th1 = td_create("th","First");
let th2 = td_create("th","Last");

let tbody = table_create("tbody","class","tbody");

let tr2 = tr_create("tr");
let td1 = td_create("td","Mark");
let td2 = td_create("td","Mark");

let tr3 = tr_create("tr");
let td3 = td_create("td","Jacob");
let td4 = td_create("td","Thornton");

let tr4 = tr_create("tr");
let td5 = td_create("td","Larry");
let td6 = td_create("td","The Bird");

// append into the tr
tr1.append(th1,th2);
tr2.append(td1,td2);
tr3.append(td3,td4);
tr4.append(td5,td6);

// append into the thead
thead.append(tr1);

// append into the tbody
tbody.append(tr2,tr3,tr4);

// append into the table 
table.append(thead,tbody);

// append into the document
document.body.append(table);