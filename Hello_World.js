<html>
   <head>
      <title>VueJs Instance</title>
      <script type = "text/javascript" src = "js/vue.js"></script>
   </head>
   <body>
      <div id = "computed_props">
         <h1 style = "background-color:gray;">Random No from computed property: {{getrandomno}}</h1>
         <h1>Random No from method: {{getrandomno1()}}</h1>
         <h1>Random No from method : {{getrandomno1()}}</h1>
         <h1  style = "background-color:gray;">Random No from computed property: {{getrandomno}}</h1>
         <h1  style = "background-color:gray;">Random No from computed property: {{getrandomno}}</h1>
         <h1  style = "background-color:gray;">Random No from computed
            property: {{getrandomno}}</h1>
         <h1>Random No from method: {{getrandomno1()}}</h1>
         <h1>Random No from method: {{getrandomno1()}}</h1>
      </div>
      <script type = "text/javascript">
         var vm = new Vue({
            el: '#computed_props',
            data: {
               name : "helloworld"
            },
            methods: {
               getrandomno1 : function() {
                  return Math.random();
               }
            },
            computed :{
               getrandomno : function(){
                  return Math.random();
               }
            }
         });
      </script>
   </body>
</html>
