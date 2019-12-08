
$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'top'
    });
});

var ctx = document.getElementById("polarAreaChart ");
var polarAreaChart = new Chart(ctx, {
  type: 'polarArea',
  options: {
      legend: {
          display: true,
          position: 'bottom',
          boxWidth: 30
      },
      title: {
        display: true,
        text: 'Dimensiones ponderadas',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontSize: 25,
        fontColor: '#696969'
      },
      scale: {
        ticks: {
            beginAtZero: true,
            max: 1// maximum value
        }
      }
  },
  data: {
    labels: ["Dimensión 1","Dimensión 2","Dimensión 3", "Dimensión 4", "Dimensión 5", "Dimensión 6"],
    datasets: [{
      label: 'Dimensiones',
      data: [0, 0, 0, 0, 0, 0],
      borderColor: '#2c3e50',
      backgroundColor: [
        "rgba(127, 206, 248, 0.6)",
        "rgba(253, 119, 146, 0.6)",
        "rgba(127, 77, 113, 0.6)",
        "rgba(85, 174, 149, 0.6)",
        "rgba(248, 127, 70, 0.6)",
        "rgba(127, 146, 248, 0.6)"
      ]
    }]
  }
});


//get input values
function graphMe(){

    var a1 = parseInt(document.getElementById("a1").value);
    var a2 = parseInt(document.getElementById("a2").value);
    var a3 = parseInt(document.getElementById("a3").value);
    var a4 = parseInt(document.getElementById("a4").value);
    var a5 = parseInt(document.getElementById("a5").value);

    var b1 = parseInt(document.getElementById("b1").value);
    var b2 = parseInt(document.getElementById("b2").value);
    var b3 = parseInt(document.getElementById("b3").value);
    var b4 = parseInt(document.getElementById("b4").value);

    var c1 = parseInt(document.getElementById("c1").value);
    var c2 = parseInt(document.getElementById("c2").value);
    var c3 = parseInt(document.getElementById("c3").value);
    var c4 = parseInt(document.getElementById("c4").value);
    var c5 = parseInt(document.getElementById("c5").value);

    var d1 = parseInt(document.getElementById("d1").value);
    var d2 = parseInt(document.getElementById("d2").value);
    var d3 = parseInt(document.getElementById("d3").value);

    var e1 = parseInt(document.getElementById("e1").value);
    var e2 = parseInt(document.getElementById("e2").value);
    var e3 = parseInt(document.getElementById("e3").value);

    var f1 = parseInt(document.getElementById("f1").value);
    var f2 = parseInt(document.getElementById("f2").value);
    var f3 = parseInt(document.getElementById("f3").value);

    const arr1 = new Array(a1,a2,a3,a4,a5);
    var sum1 = 0;
    for( var i = 0; i < arr1.length; i++ ){
        sum1 += parseInt( arr1[i], 10 ); //don't forget to add the base
    }

    const avg1 = sum1/(arr1.length * 5);
    console.log(avg1)

    const arr2 = new Array(b1,b2,b3,b4);
    var sum2 = 0;
    for( var i = 0; i < arr2.length; i++ ){
        sum2 += parseInt( arr2[i], 10 ); //don't forget to add the base
    }

    const avg2 = sum2/(arr2.length * 5);
    console.log(avg2)

    const arr3 = new Array(c1,c2,c3,c4,c5);
    var sum3 = 0;
    for( var i = 0; i < arr3.length; i++ ){
        sum3 += parseInt( arr3[i], 10 ); //don't forget to add the base
    }

    const avg3 = sum3/(arr3.length * 5);
    console.log(avg3)

    const arr4 = new Array(d1,d2,d3);
    var sum4 = 0;
    for( var i = 0; i < arr4.length; i++ ){
        sum4 += parseInt( arr4[i], 10 ); //don't forget to add the base
    }

    const avg4 = sum4/(arr4.length * 5);
    console.log(avg4)

    const arr5 = new Array(e1,e2,e3);
    var sum5 = 0;
    for( var i = 0; i < arr5.length; i++ ){
        sum5 += parseInt( arr5[i], 10 ); //don't forget to add the base
    }

    const avg5 = sum5/(arr5.length * 5);
    console.log(avg5)

    const arr6 = new Array(f1,f2,f3);
    var sum6 = 0;
    for( var i = 0; i < arr4.length; i++ ){
        sum6 += parseInt( arr6[i], 10 ); //don't forget to add the base
    }

    const avg6 = sum6/(arr6.length * 5);
    console.log(avg6)

polarAreaChart.data.datasets[0].data[0] = avg1.toFixed(2);
polarAreaChart.data.datasets[0].data[1] = avg2.toFixed(2);
polarAreaChart.data.datasets[0].data[2] = avg3.toFixed(2);
polarAreaChart.data.datasets[0].data[3] = avg4.toFixed(2);
polarAreaChart.data.datasets[0].data[4] = avg5.toFixed(2);
polarAreaChart.data.datasets[0].data[5] = avg6.toFixed(2);

polarAreaChart.update();
 }
