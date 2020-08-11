window.addEventListener("DOMContentLoaded", () => {
  console.log("loaded");
  document.getElementById("connectingBtn").addEventListener("click", ()=>{
    console.log("clicked");
  })
})

// const socket = () => {
//     // socket.io 서버에 접속한다
//     var socket = io.connect("http://localhost:3000", {path: "/socket.io"});;
    
//     // 서버로 자신의 정보를 전송한다.
//     socket.emit("login", {
//       // name: "ungmo2",
//       userid: "ungmo2@gmail.com"
//     });

//     // 서버로부터의 메시지가 수신되면
//     socket.on("login", function(data) {
//       alert("Connection succeed");
//     });

//     // 서버로부터의 메시지가 수신되면
//     socket.on("chat", function(data) {
//         console.log("chatted");
//     });

//     // Send 버튼이 클릭되면
//     $("#start_btn").submit(function(e) {
//       e.preventDefault();
//       //TOdo: user1 user2 connect.
//     //   var $msgForm = $("#msgForm");

//     //   // 서버로 메시지를 전송한다.
//     //   socket.emit("chat", { msg: $msgForm.val() });
//     //   $msgForm.val("");
//     });

// };

