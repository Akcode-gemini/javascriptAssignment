(function () {
    //Build an array containing the data of the employees.
    const personalInfo = new Array();
    personalInfo.push(["Name", "Age", "DOB", "Email", "Company"]);
    personalInfo.push(["Aaliya", 21, "15/08/2001", "aaliyakhanam158@gmail.com", "Gemini"]);
    personalInfo.push(["Aarushi", 21, "6/07/2001", "aarushi6601@gmail.com", "TCS"]);
    personalInfo.push(["Jaskirat", 22, "10/03/2001", "jaskirat200@gmail.com", "Novelvox"]);
    personalInfo.push(["Parul", 22, "6/02/2001", "parul2010@gmail.com", "Gemini"]);

    //Create a HTML Table element.
    var table = document.createElement("table");
    //Create a HTML Table Head Element.
    var tabHead = document.createElement("thead");
    

    
    var colCount = personalInfo[0].length;

    var row = document.createElement("tr");
    for (var i = 0; i < colCount; i++) {
        var headerCell = document.createElement("th");
        headerCell.style.padding="15px";
        headerCell.style.backgroundColor="#f1f1f1";
        var cellText = document.createTextNode(personalInfo[0][i]);
        headerCell.appendChild(cellText);
        row.appendChild(headerCell);
    }
    tabHead.appendChild(row);

    table.appendChild(tabHead);



    var tabBody = document.createElement("tbody");

    for (var i = 1; i < personalInfo.length; i++) {
        var row = document.createElement("tr");
        for (var j = 0; j < colCount; j++) {
            var column = document.createElement("td");
            column.style.padding="10px";
            var cellText = document.createTextNode(personalInfo[i][j]);
            column.appendChild(cellText);
            row.appendChild(column);
        }
        tabBody.appendChild(row);
    }
    table.appendChild(tabBody);
       var tab = document.getElementById("tab");
       tab.innerHTML = "";
       tab.appendChild(table);
       table.style.borderCollapse="collapse";
       table.style.textAlign="center";
       table.setAttribute("border", "5");
       var tabContainer=document.getElementById("container");
       table.style.margin="auto";
       tabContainer.style.paddingTop="10%";

})();