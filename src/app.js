;(function(){function g(a,c){a.setHours(a.getHours()+parseFloat(c));return a}function h(a,c){var b="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");return c?b[a.getDay()].substr(0,3):b[a.getDay()]}function k(a,c){var b="January February March April May June July August September October November December".split(" ");return c?b[a.getMonth()].substr(0,3):b[a.getMonth()]}function e(a,c){if(a){if("compound"==a){if(!1===c)return this.format.compound;var b={},d;for(d in Date.prototype.format.compound)b[d]=
this.format(Date.prototype.format.compound[d]);return b}if(Date.prototype.format.compound[a])return this.format(Date.prototype.format.compound[a],c);if("constants"==a){if(!1===c)return this.format.constants;b={};for(d in Date.prototype.format.constants)b[d]=this.format(Date.prototype.format.constants[d]);return b}if(Date.prototype.format.constants[a])return this.format(Date.prototype.format.constants[a],c);if("pretty"==a){if(!1===c)return this.format.pretty;b={};for(d in Date.prototype.format.pretty)b[d]=
this.format(Date.prototype.format.pretty[d]);return b}if(Date.prototype.format.pretty[a])return this.format(Date.prototype.format.pretty[a],c);var b=a.split(""),e="";for(d in b){var f=b[d];f&&/[a-z]/i.test(f)&&!/\\/.test(e+f)&&(b[d]=l[f]?l[f].apply(this):f);e=b[d]}return b.join("").replace(/\\/g,"")}return a}var l={d:function(){var a=this.getDate();return 9<a?a:"0"+a},D:function(){return h(this,!0)},j:function(){return this.getDate()},l:function(){return h(this)},N:function(){return this.getDay()+
1},S:function(){var a=this.getDate();return/^1[0-9]$/.test(a)?"th":/1$/.test(a)?"st":/2$/.test(a)?"nd":/3$/.test(a)?"rd":"th"},w:function(){return this.getDay()},z:function(){return Math.round(Math.abs((this.getTime()-(new Date("1/1/"+this.getFullYear())).getTime())/864E5))},W:function(){var a=new Date(this.getFullYear(),0,1);return Math.ceil(((this-a)/864E5+a.getDay()+1)/7)},F:function(){return k(this)},m:function(){var a=this.getMonth()+1;return 9<a?a:"0"+a},M:function(){return k(this,!0)},n:function(){return this.getMonth()+
1},t:function(){return(new Date(this.getFullYear(),this.getMonth()+1,0)).getDate()},L:function(){var a=this.getFullYear();return 0==a%4&&0!=a%100||0==a%400},o:function(){return parseInt(this.getFullYear())},Y:function(){return parseInt(this.getFullYear())},y:function(){return parseInt((this.getFullYear()+"").substr(-2))},a:function(){return 12<=this.getHours()?"pm":"am"},A:function(){return 12<=this.getHours()?"PM":"AM"},B:function(){return"@"+("00"+Math.floor((60*((this.getHours()+1)%24*60+this.getMinutes())+
this.getSeconds()+.001*this.getMilliseconds())/86.4)).slice(-3)},g:function(){var a=this.getHours();return 0==a?12:12>=a?a:a-12},G:function(){return this.getHours()},h:function(){var a=this.getHours(),a=12>=a?a:a-12;return 0==a?12:9<a?a:"0"+a},H:function(){var a=this.getHours();return 9<a?a:"0"+a},i:function(){var a=this.getMinutes();return 9<a?a:"0"+a},s:function(){var a=this.getSeconds();return 9<a?a:"0"+a},u:function(){return this.getMilliseconds()},e:function(){var a=this.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/);
return 1<a.length?a[1]:""},I:function(){var a=new Date(this.getFullYear(),0,1),c=new Date(this.getFullYear(),6,1),a=Math.max(a.getTimezoneOffset(),c.getTimezoneOffset());return this.getTimezoneOffset()<a?1:0},O:function(){var a=this.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/);return 2<a.length?a[2]:""},P:function(){var a=this.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/);return 2<a.length?a[2].substr(0,3)+":"+a[2].substr(3,2):""},T:function(){return this.toLocaleString("en",{timeZoneName:"short"}).split(" ").pop()},
Z:function(){return 60*this.getTimezoneOffset()},c:function(){return g(new Date(this),-(this.getTimezoneOffset()/60)).toISOString()},r:function(){return g(new Date(this),-(this.getTimezoneOffset()/60)).toISOString()},U:function(){return this.getTime()/1E3|0}},m={commonLogFormat:"d/M/Y:G:i:s",exif:"Y:m:d G:i:s",isoYearWeek:"Y\\WW",isoYearWeek2:"Y-\\WW",isoYearWeekDay:"Y\\WWj",isoYearWeekDay2:"Y-\\WW-j",mySQL:"Y-m-d h:i:s",postgreSQL:"Y.z",postgreSQL2:"Yz",soap:"Y-m-d\\TH:i:s.u",soap2:"Y-m-d\\TH:i:s.uP",
unixTimestamp:"@U",xmlrpc:"Ymd\\TG:i:s",xmlrpcCompact:"Ymd\\tGis",wddx:"Y-n-j\\TG:i:s"},n={AMERICAN:"F j, Y",AMERICANSHORT:"m/d/Y",AMERICANSHORTWTIME:"m/d/Y h:i:sA",ATOM:"Y-m-d\\TH:i:sP",COOKIE:"l, d-M-Y H:i:s T",EUROPEAN:"j F Y",EUROPEANSHORT:"d.m.Y",EUROPEANSHORTWTIME:"d.m.Y H:i:s",ISO8601:"Y-m-d\\TH:i:sO",LEGAL:"j F Y",RFC822:"D, d M y H:i:s O",RFC850:"l, d-M-y H:i:s T",RFC1036:"D, d M y H:i:s O",RFC1123:"D, d M Y H:i:s O",RFC2822:"D, d M Y H:i:s O",RFC3339:"Y-m-d\\TH:i:sP",RSS:"D, d M Y H:i:s O",
W3C:"Y-m-d\\TH:i:sP"},p={"pretty-a":"g:i.sA l jS \\o\\f F, Y","pretty-b":"g:iA l jS \\o\\f F, Y","pretty-c":"n/d/Y g:iA","pretty-d":"n/d/Y","pretty-e":"F jS - g:ia","pretty-f":"g:iA","pretty-g":"F jS, Y","pretty-h":"F jS, Y g:mA"};Object.defineProperty?Object.defineProperty(e,"compound",{value:m}):e.compound=m;Object.defineProperty?Object.defineProperty(e,"constants",{value:n}):e.constants=n;Object.defineProperty?Object.defineProperty(e,"pretty",{value:p}):e.pretty=p;Object.defineProperty&&!Date.prototype.hasOwnProperty("format")?
Object.defineProperty(Date.prototype,"format",{value:e}):Date.prototype.format=e})();


class toDoList {
    
    constructor(){
        this.render();
    };
    
    statusMessage(message, type){
        let elem = document.querySelector('#reports');
       
        elem.innerHTML = message;
        elem.classList.toggle(type);
        elem.classList.toggle('fade-out');
        elem.style.visibility = "visible";

        setTimeout(() => {      // this is not ideial if actions are takken to fast
            elem.style.visibility = "hidden";
            elem.classList.toggle(type);
            elem.classList.toggle('fade-out')
        }, 1990);
    };
    
    // set an item to local storage
    setStorage(item, data){
        localStorage.setItem( item , JSON.stringify(data));
    };
    // get the Localstorage data
    getStorage(item){                       
        return JSON.parse(localStorage.getItem(item));
    };

    // resets the local storage
    clear(){
        localStorage.clear();
        this.statusMessage("Local storage emptied", "success");
        location.reload()
    };

    // scaffold new lists // sets a starting element to the Localsorage if none exists
    addList(list = "defaultList"){ 
        
        if (list == "defaultList"){
            let lists = [ list ];
            this.setStorage("Lists", lists )
        } else {                                
            let lists = this.getStorage("Lists");       // get array of lists 
            lists.push(list);                           // push new list to array and store it
            this.setStorage("Lists", lists) 
        }
    };
            
   /*  renderLists(data){}; */


    renderToDos(){
        let todos = this.getStorage("ToDos");
        todos.forEach( (item, key) => {
        if (item.completed) {
            var check = "box-checked";
            var grayout = "grayout";
        }  else { 
            var check = grayout = "";
        }
        document.querySelector("#todo-group").innerHTML += 
        
            `<div class=" ${grayout}">
            <div class="checkbox ${check} " style="justify-content: center" onclick="MyLists.check('${key}')">L</div>
            <form id="editForm${key}" class="todo-form" data-index="${key}">
                <input type="text" onkeyup="MyLists.showBtn('editForm${key}', '${item.title}')" value="${item.title}" required style="margin-right:8px">
                <input type="text" onkeyup="MyLists.showBtn('editForm${key}', '${item.description}')" value="${item.description}"></input>
                <select id="listName" style="display: none">
                    <option value="defaultList">default</option>
                    <!-- instert options with javascript -->
                </select>
                <button type="submit" style="visibility:hidden;">Save</button>                        
            </form>
            <div style="flex:1"></div>
            <button class="btn-del" onclick="MyLists.remove(undefined , ${key})">X</button> </div>`  
        });    
    };

    // render ToDoLists to DOM
    render(){
               
        // LocalStorage empty?
        if(!this.getStorage("ToDos")){
            this.statusMessage("Local storage is empty", "info");   // this should be put into a refreshing div. make it refresh every time.
        //  display data
        } else {
           /*  renderLists(data); */
            this.renderToDos();
        }
    };

    //crud methods (cread, read, update, delete)

    // creates a new toDo
    createToDo(tOdO){

        if (!this.localStorage) this.addList();                 //created a default list if  storage is empty
            
        let newToDo = { 
                 list : tOdO.target[2].value,
                title : tOdO.target[0].value,
          description : tOdO.target[1].value,
            completed : false,                   
              deleted : false,
         lastModified : new Date().format('m-d-Y h:i:s') //https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript

        }
        
        if (!this.getStorage("ToDos")){             // creates array Todos and adds the newTodo
            let ToDos = [newToDo];
            this.setStorage("ToDos", ToDos );
        } else {    
            let todos = this.getStorage("ToDos");                            //get localstorage data
            todos.push(newToDo);

            /* console.log(Array.isArray( todos)); console.log(todos); */
            this.setStorage("ToDos", todos);   // push and set the newToDO into arrrayToDos
        }
        /*  this.render(); */ // re-render  

        //without async js jsut refresh page and the render will be called at start1
        location.reload();
    };


    // edits values 
    update(update){
      
        let todoId = update.target.dataset.index;

        //  edited values
        let Edit = { 
            list : update.target[2].value,
           title : update.target[0].value,
     description : update.target[1].value,
       completed : false,           //update.target[0].value         
         deleted : false,
    lastModified : new Date().format('m-d-Y h:i:s') //https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript

   }
    
    let todos = this.getStorage("ToDos");   // get local storage
    todos[todoId] = Edit;                   // give the new value to the given index
    this.setStorage("ToDos", todos);        // save storage

    location.reload(); 
    };

    check(index){
       
        let todos = this.getStorage("ToDos");
        
        if (!todos[index].completed){
            
            todos[index].completed = true;
        } else { 
            todos[index].completed = false;}
        this.setStorage("ToDos", todos);
        location.reload();
    }
    // deleted a todo
    remove(item = "ToDos" , key){
        let todos = this.getStorage("ToDos"); 
        todos.splice((key),1);
        this.setStorage("ToDos", todos);
        location.reload();
    };

    showBtn(showbutton, input){

        let form = document.querySelector(`#${showbutton}`)
        console.log( form[1].value)
        if (form[0].value != input || form[0].value != input){
            form[3].style.visibility = "visible";
        } else {
            form[3].style.visibility = "hidden";
        } 
    }
   
}
// end of the class ToDoList -------------------------------------- //

let MyLists = new toDoList;

let addToDo = document.querySelector("#addToDo");
/* let addList = document.querySelector("#addList"); */
let cleared = document.querySelector("#clear");

// clears the storage
cleared.onclick = () => {
        if (confirm(" Do you want do delete Local Storage?")) MyLists.clear();
       /*  if (prompt("Type \"delete\" to delete Local storage") === "delete") MyLists.clear(); */
  }; 

// creates a new todo
addToDo.onsubmit = (e) => {
    e.preventDefault(); // prevent default to catch console.logs
     console.log(e)
    MyLists.createToDo(e);
}
/* addList.onsubmit = (e) => {
    console.log(e.targer[0])
    e.preventDefault(); // prevent default to catch console.logs
    MyLists.addList(e.targer[0]);
} */

let forms = document.querySelectorAll('#todo-group') 

forms.forEach((form) => { 
    form.addEventListener("submit", (evt) => { 
       MyLists.update(evt);
    }); 
});




 // this will listen to anything clicked       mousedown -> mouseup -> clicked
/* document.body.onmouseup = (evt) => {
    evt.preventDefault();
    console.dir(this);
    console.log(evt.target.parentNode);
}; */