var content = [ 
  {
    number: 1,
    name: "Cheese",
    detail: "Swiss"
  },
  {
    number: 2,
    name: "Bread",
    detail: "Germany"
  },
  {
    number: 3,
    name: "Apple",
    detail: "USA"
  },
  {
    number: 4,
    name: "Rice",
    detail: "China"
  },
    {
    number: 5,
    name: "Dog meat",
    detail: "Viet"
  },
  {
    number: 6,
    name: "Orange",
    detail: "Libia"
  },
  {
    number: 7,
    name: "Wurst",
    detail: "Germany"
  },
  {
    number: 8,
    name: "Grapes",
    detail: "Laos"
  },
  {
    number: 9,
    name: "Grains",
    detail: "Korea"
  },
    {
    number: 10,
    name: "Cats",
    detail: "Thais"
      
  },
  {
    number: 11,
    name: "Laptops",
    detail: "Sweden"
  },
  {
    number: 12,
    name: "Plans",
    detail: "Australia"
  },
  {
    number: 13,
    name: "Screws",
    detail: "USA"
  },
  {
    number: 14,
    name: "Glass",
    detail: "Sudan"
  },
    {
    number: 15,
    name: "Banana",
    detail: "Mongo"
  },
  {
    number: 16,
    name: "Pusheen",
    detail: "Asia"
  },
  {
    number: 17,
    name: "Hammer",
    detail: "USA"
  },
  {
    number: 18,
    name: "jewels",
    detail: "Africa"
  },
    {
    number: 19,
    name: "cows",
    detail: "Arghentina"
  },
  {
    number: 20,
    name: "soy",
    detail: "Pakistan"
  }
    
] 


var current_page = 1;
// page hien tai
var pageRecord = 4;
// page dieu chinh theo so dong
function numPages()
{      
    var n = Math.ceil(content.length / pageRecord);
    return n;
}
function prevPage()
{
    if (current_page > 1) 
    {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) 
    {
        current_page++;
        changePage(current_page);
    }
  }

function changePage(page)
{
    var col = document.getElementsByClassName("no");
    var colName = document.getElementsByClassName("name");
    var colDetail = document.getElementsByClassName("info");
    var page_span = document.getElementById("page");

    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();
  
for (var i = 0; i < pageRecord; i++)
  {
      col[i].innerText = content[i + (page-1) * pageRecord].number;
      colName[i].innerText = content[i + (page-1) * pageRecord].name;
      colDetail[i].innerText = content[i + (page-1) * pageRecord].detail;
      page_span.innerHTML = page;
  }
}
  


window.onload = function() {
    changePage(1);
};
//already print document ao on the table so wao
// need checking the add()
// checked




// delete button creating
var myNodelist = document.getElementsByClassName("deleteButton");

for ( var i = 0; i < myNodelist.length; i++) 
{
  var button = document.createElement("button");
  var text = document.createTextNode("Delete");
  button.appendChild(text);
  button.className = "delete";
  myNodelist[i].appendChild(button);
}

// delete button deleting
var xoa = document.getElementsByClassName("delete");
for( var i = 0; i< xoa.length;i++)
{
  xoa[i].onclick = function()
  {
    var nothing = this.parentElement.parentElement.style.display = "none";
  }
}

// creating edit button
  var bigDick = document.getElementsByClassName("editButton");
  for( var i =0; i< bigDick.length;i++)
  {
    var nutEdit = document.createElement("button");
    var editText = document.createTextNode("Edit");
    nutEdit.appendChild(editText);
    nutEdit.className="editing";
    bigDick[i].appendChild(nutEdit);
  }

  // edit button editing

  var sua = document.getElementsByClassName("editing");
  for( var i = 0; i < sua.length; i++)
  {
    sua[i].onclick = function()
    {
      var nothingMore = this.parentElement.parentElement.setAttribute("contenteditable","true")
    }
  }

// create new 
  function add() 
{
    var table = document.getElementById("bang");
    var row = table.insertRow(5);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
  // creating button
  var button = document.createElement("button");
  var text = document.createTextNode("Delete");
  button.appendChild(text);
  button.className = "delete";
  cell4.appendChild(button);
  // creating button
  var button1 = document.createElement("button");
  var text1 = document.createTextNode("Edit");
  button1.appendChild(text1);
  button1.className = "editing";
  cell4.appendChild(button1);
  
  var xoa = document.getElementsByClassName("delete");
  for( var i = 0; i< xoa.length;i++)
  {
  xoa[i].onclick = function()
    {
    var nothing = this.parentElement.parentElement.style.display = "none";
    }
  }
  
  var sua = document.getElementsByClassName("editing");
  for( var i = 0; i < sua.length; i++)
  {
    sua[i].onclick = function()
    {
      var nothingMore =this.parentElement.parentElement.setAttribute("contenteditable","true")
    }
  }
   
}

// Search


var ketqua =[]


function toObject(arr) 
{
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
    rv[i] = arr[i];
  return rv;
}
var newArray = toObject(content);
// console.log(newArray)

function timKiem()
{
  var thuTim;
  var a = document.getElementById("tim");
  var thuTim = a.value;
  console.log(thuTim);
  searchObj (newArray, thuTim)
}

function searchObj (newArray, thuTim) 
{
    for (var i in newArray) 
    {
        var value = newArray[i];
        // console.log(value);
        if (typeof value === 'object') 
        {
            searchObj(value, thuTim); 
        }
        if (value === thuTim) 
        {
            
            run();
            document.getElementById("outputText").innerHTML = "Tên là " + newArray.name + ", STT "+   newArray.number +", chi tiết : "+newArray.detail;
          
          
            ketqua.push(newArray);
            console.log(ketqua);
        }
         
        
    }
}


// Sort number
  var emptyNumber = [];
  var emptyNumber2 =[]; 
   var temp =[];

  for( var i = 0; i < content.length; i++)
    {
    emptyNumber.push(content[i].number);
    }


  function sortNumber(array)
    {
    var temp = 0;
  for(a=0;a<array.length;a++){
    for(b=a+1;b<array.length;b++){
      if (array[a] < array[b]){
        temp = array[a];
        array[a] = array[b];
        array[b] = temp;
        }
      }
    }
  return array; 
  }
var newOne = emptyNumber;

var emptyNumber2 = sortNumber(emptyNumber);


 for( var i = 0; i < content.length; i++)
    {
    temp.push(content[i].number);
    }

function toggleNumber() 
{
  for ( var i =0; i< content.length; i++)
  {
    if( content[i].number === temp[i] )
    {
      var cunt = document.getElementsByClassName("no"); 
      cunt[i].innerHTML = emptyNumber2[i];
    }
    else if( content[i].number === emptyNumber2[i] )
    {
      var cunt = document.getElementsByClassName("no"); 
      cunt[i].innerHTML = emptyNumber2[i];
    }
  }
}

// dropdown modal not from mir

function run()
{
var modal = document.getElementById('myModal');  
 modal.style.display = "block";
  

window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
      }
  }
}
