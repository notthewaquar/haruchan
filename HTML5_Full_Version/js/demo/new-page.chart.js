$(function () {
  var yAxisDataArr2 = [28, 55, 40, 19, 86, 27, 90];
  
  $('.axis-select').on('change', 'select', function() {
    var myArr = $("#data-table").find('tr').map(function(){
      return [ 
        // $("th", this).text(),
        $("td", this).map(
          function(){ 
            return $(this).text();
          }
        ).get()
      ];
    }).get();
    selectedYAxis = null;
    selectedYAxis = $('#valuesYColumn1').val();
    selectedYAxis = parseInt(selectedYAxis);
    console.log(selectedYAxis);
    var myTableRows = $("#data-table tbody tr").length;
    yDataArr = [];
    for (var b = 1; b < myTableRows; b++) {
      kkkkk = myArr[b][selectedYAxis];
      yDataArr.push(parseInt(kkkkk));
    };

    var yAxisDataArr1 = yDataArr;
    var colorBarA = 'rgba(26,179,148,0.5)';

    // start bar chart
    var barData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
          {
              label: "Data 1",
              backgroundColor: colorBarA,
              pointBorderColor: "#fff",
              data: yAxisDataArr1
          }
          // ,
          // {
          //     label: "Data 2",
          //     backgroundColor: 'rgba(26,179,148,0.5)',
          //     borderColor: "rgba(26,179,148,0.7)",
          //     pointBackgroundColor: "rgba(26,179,148,1)",
          //     pointBorderColor: "#fff",
          //     data: yAxisDataArr2
          // }
      ]
    };
    var barOptions = {
      responsive: true
    }; 
    
    var ctx2 = document.getElementById("barChart").getContext("2d");
    new Chart(ctx2, {type: 'bar', data: barData, options:barOptions});
  });
  

    //  end bar chart







































    // start line chart
    // var lineData = {
    //     labels: ["January", "February", "March", "April", "May", "June", "July"],
    //     datasets: [

    //         {
    //             label: "Data 1",
    //             backgroundColor: 'rgba(26,179,148,0.5)',
    //             borderColor: "rgba(26,179,148,0.7)",
    //             pointBackgroundColor: "rgba(26,179,148,1)",
    //             pointBorderColor: "#fff",
    //             data: [28, 48, 40, 19, 86, 27, 90]
    //         },{
    //             label: "Data 2",
    //             backgroundColor: 'rgba(220, 220, 220, 0.5)',
    //             pointBorderColor: "#fff",
    //             data: [65, 59, 80, 81, 56, 55, 40]
    //         }
    //     ]
    // };

    // var lineOptions = {
    //     responsive: true
    // };


    // var ctx = document.getElementById("lineChart").getContext("2d");
    // new Chart(ctx, {type: 'line', data: lineData, options:lineOptions});
    // start line chart
    //  end polar chart
    // var polarData = {
    //     datasets: [{
    //         data: [
    //             300,140,200
    //         ],
    //         backgroundColor: [
    //             "#a3e1d4", "#dedede", "#b5b8cf"
    //         ],
    //         label: [
    //             "My Radar chart"
    //         ]
    //     }],
    //     labels: [
    //         "App","Software","Laptop"
    //     ]
    // };

    // var polarOptions = {
    //     segmentStrokeWidth: 2,
    //     responsive: true

    // };

    // var ctx3 = document.getElementById("polarChart").getContext("2d");
    // new Chart(ctx3, {type: 'polarArea', data: polarData, options:polarOptions});
    // end polar chart
    // start doughnut chart

    // var doughnutData = {
    //     labels: ["App","Software","Laptop" ],
    //     datasets: [{
    //         data: [300,50,100],
    //         backgroundColor: ["#a3e1d4","#dedede","#b5b8cf"]
    //     }]
    // } ;


    // var doughnutOptions = {
    //     responsive: true
    // };


    // var ctx4 = document.getElementById("doughnutChart").getContext("2d");
    // new Chart(ctx4, {type: 'doughnut', data: doughnutData, options:doughnutOptions});
    // end doughnut chart
    // start radar chart

    // var radarData = {
    //     labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
    //     datasets: [
    //         {
    //             label: "My First dataset",
    //             backgroundColor: "rgba(220,220,220,0.2)",
    //             borderColor: "rgba(220,220,220,1)",
    //             data: [65, 59, 90, 81, 56, 55, 40]
    //         },
    //         {
    //             label: "My Second dataset",
    //             backgroundColor: "rgba(26,179,148,0.2)",
    //             borderColor: "rgba(26,179,148,1)",
    //             data: [28, 48, 40, 19, 96, 27, 100]
    //         }
    //     ]
    // };

    // var radarOptions = {
    //     responsive: true
    // };

    // var ctx5 = document.getElementById("radarChart").getContext("2d");
    // new Chart(ctx5, {type: 'radar', data: radarData, options:radarOptions});
    // end radar chart
});
// var table = document.getElementById('data-table');
// var json = []; // First row needs to be headers 
// var headers = [];
// for (var i = 0; i < table.rows[0].cells.length; i++) {
//   headers[i] = table.rows[0].cells[i].innerHTML.toLowerCase().replace(/ /gi, '');
// }

// // Go through cells 
// // for (var i = 1; i < table.rows.length; i++) {
// //   var tableRow = table.rows[i];
// //   var rowData = {};
// //   for (var j = 0; j < tableRow.cells.length; j++) {
// //     rowData[headers[j]] = tableRow.cells[j].innerHTML;
// //   }

// //   json.push(rowData);
// // }
// // position of column
// var j = 0
// for (var i = 1; i < table.rows.length; i++) {
//   var tableRow = table.rows[i];
//   var rowData = {};

//   rowData[headers[j]] = tableRow.cells[j].innerHTML;

//   json.push(rowData);
// }
// // find number of rows
// var colCount = 0;
// $('#data-table tbody tr:nth-child(1) td').each(function () {
//   colCount++;
// });
// console.log(colCount);
// // find number of rows
// // convert table td to arry
// var ccc = [];
// var columnPos = 1;
// for (var b = 0; b < colCount+1; b++) {
//   // var aaa = +json[b][headers[columnPos].toString()];
//   var aaa = json[b]['ga:session'];
//   ccc.push(aaa);
// }
// console.log(ccc);
// console.log(headers);
// console.log(json);
// // 
// // 
// // 
// // jdsfjdsffkjkjldf
// // var myArr = $("#data-table").find('tr').map(function(){
// //   return [ 
// //     // $("th", this).text(),
// //     $("td", this).map(
// //       function(){ 
// //         return $(this).text();
// //       }
// //     ).get()
// //   ];
// // }).get();
// console.clear();
// // console.log(myArr);
// // selectedYAxis = null;
// // $('.axis-select').on('change', '#valuesYColumn1', function() {
// //   selectedYAxis = this.value;
// //   selectedYAxis = parseInt(selectedYAxis);
// // });

// // console.log(selectedYAxis);

// // var myTableRows = $("#data-table tbody tr").length;
// // yDataArr = [];
// // for (var b = 1; b < myTableRows; b++) {
// //   kkkkk = myArr[b][selectedYAxis];
// //   yDataArr.push(parseInt(kkkkk));
// // };
// // console.log(yDataArr);
// // $('#chartInput').change(function(){
// //   console.log(selectedYAxis);
// // });
// // convert table td to arry
// var yAxisDataArr1Temp = json;